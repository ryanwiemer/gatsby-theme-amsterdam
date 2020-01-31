// Create documentation pages for https://amsterdam.netlify.com/
const slugify = require('slugify')

// Schema customization
exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes(`
    type Page implements Node {
      id: ID!
      slug: String!
      title: String!
      excerpt(pruneLength: Int = 140): String!
      body: String!
    }
  `)
}

// Helper to resolve mdx fields
const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  return resolver(mdxNode, args, context, {
    fieldName,
  })
}

// Pass mdx body and excerpt
exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Page: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
      excerpt: {
        resolve: mdxResolverPassthrough(`excerpt`),
      },
    },
  })
}

// Create 'Page' nodes
exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  if (node.internal.type !== `Mdx`) {
    return
  }

  const parent = getNode(node.parent)
  if (parent.sourceInstanceName !== 'documentation') {
    return
  }

  // Create nodes
  if (node.internal.type === `Mdx`) {
    actions.createNode({
      id: createNodeId(`${node.id} >>> Page`),
      slug: `${node.frontmatter.slug || slugify(parent.relativeDirectory)}`,
      title: node.frontmatter.title,
      parent: node.id,
      internal: {
        type: 'Page',
        contentDigest: createContentDigest(node.internal.contentDigest),
      },
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panic(result.errors)
  }
  const pages = result.data.allPage.edges
  pages.forEach((page, index) => {
    createPage({
      path: page.node.slug,
      component: require.resolve(`./src/templates/page`),
      context: {
        slug: page.node.slug,
      },
    })
  })
}

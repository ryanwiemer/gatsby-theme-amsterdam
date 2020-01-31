const path = require(`path`)
const fs = require(`fs`)
const mkdirp = require(`mkdirp`)
const _ = require(`lodash`)
const { paginate } = require(`gatsby-awesome-pagination`)
const slugify = require('slugify')

// Ensure that content directory exist at the site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()
  const contentPath = themeOptions.contentPath || `content`
  const dirs = [path.join(program.directory, contentPath)]
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

// Schema customization
exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes(`
    type Post implements Node {
      id: ID!
      slug: String!
      title: String!
      date: Date! @dateformat
      excerpt(pruneLength: Int = 140): String!
      body: String!
      cover: File @fileByRelativePath
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
    Post: {
      body: {
        resolve: mdxResolverPassthrough(`body`),
      },
      excerpt: {
        resolve: mdxResolverPassthrough(`excerpt`),
      },
    },
  })
}

// Create 'Post' nodes
exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  // Ignore files not in the defined content directory

  const contentPath = themeOptions.contentPath || 'content'

  if (node.internal.type !== `Mdx`) {
    return
  }

  const parent = getNode(node.parent)
  if (parent.sourceInstanceName !== contentPath) {
    return
  }

  // Create nodes
  if (node.internal.type === `Mdx`) {
    actions.createNode({
      id: createNodeId(`${node.id} >>> Post`),
      slug: `${node.frontmatter.slug || slugify(parent.relativeDirectory)}`,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      cover: node.frontmatter.cover,
      tags: node.frontmatter.tags || [],
      parent: node.id,
      internal: {
        type: 'Post',
        contentDigest: createContentDigest(node.internal.contentDigest),
      },
    })
  }
}

// Create Pages
exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allPost(sort: { fields: [date], order: DESC }) {
          edges {
            node {
              title
              date
              tags
              slug
              cover {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panic(result.errors)
  }
  const posts = result.data.allPost.edges
  const basePath = themeOptions.basePath || `/`

  // Create individual post pages
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: basePath === '/' ? post.node.slug : basePath + post.node.slug,
      component: require.resolve(`./src/templates/post`),
      context: {
        slug: post.node.slug,
        basePath: basePath === '/' ? '' : basePath,
        previous,
        next,
      },
    })
  })

  // Create posts list page and paginate
  const postsPerPage = themeOptions.postsPerPage || 6

  paginate({
    createPage,
    items: posts,
    itemsPerPage: postsPerPage,
    pathPrefix: basePath,
    component: require.resolve(`./src/templates/posts`),
    context: {
      basePath: basePath === '/' ? '' : basePath,
      paginationPath: basePath === '/' ? '' : basePath,
    },
  })

  // Create tag pages and paginate
  let tags = []
  _.each(posts, post => {
    if (_.get(post, 'node.tags')) {
      tags = tags.concat(post.node.tags)
    }
  })
  tags = _.uniq(tags)
  tags.forEach(tag => {
    const postsWithTag = posts.filter(
      post => post.node.tags && post.node.tags.indexOf(tag) !== -1
    )

    const tagPagination =
      basePath === '/'
        ? `${basePath}tag/${_.kebabCase(tag)}`
        : `${basePath}/tag/${_.kebabCase(tag)}`

    paginate({
      createPage,
      items: postsWithTag,
      itemsPerPage: postsPerPage,
      pathPrefix: tagPagination,
      component: require.resolve(`./src/templates/tag`),
      context: {
        tag,
        basePath: basePath === '/' ? '' : basePath,
        paginationPath: tagPagination,
      },
    })
  })
}

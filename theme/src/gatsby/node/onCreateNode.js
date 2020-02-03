const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require('slugify')

// Create Post type nodes
module.exports = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  if (node.internal.type !== `Mdx`) {
    return
  }
  const contentPath = themeOptions.contentPath || 'content'
  const parent = getNode(node.parent)
  if (parent.sourceInstanceName !== contentPath) {
    return
  }
  function generateSlug(...arguments_) {
    return `/${arguments_.join('/')}`.replace(/\/\/+/g, '/')
  }

  if (node.internal.type === `Mdx`) {
    const filePath = createFilePath({ node, getNode })

    actions.createNode({
      id: createNodeId(`${node.id} >>> Post`),
      slug: node.frontmatter.slug
        ? `${generateSlug(
            themeOptions.basePath,
            slugify(node.frontmatter.slug)
          )}/`
        : generateSlug(themeOptions.basePath, filePath),
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      cover: node.frontmatter.cover,
      tags: node.frontmatter.tags,
      parent: node.id,
      internal: {
        type: 'Post',
        contentDigest: createContentDigest(node.internal.contentDigest),
      },
    })
  }
}

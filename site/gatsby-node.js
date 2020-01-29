// Create documentation pages for https://amsterdam.netlify.com/

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fields: { sourceName: { eq: "documentation" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                description
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
  const pages = result.data.allMarkdownRemark.edges
  pages.forEach((post, index) => {
    createPage({
      path: post.node.fields.slug,
      component: require.resolve(`./src/templates/page`),
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}

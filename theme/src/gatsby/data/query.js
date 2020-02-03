module.exports.data = {
  posts: `{
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
  }`,
}

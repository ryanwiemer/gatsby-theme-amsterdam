// Schema customization for Post type
module.exports = ({ actions, schema }) => {
  actions.createTypes(`
    type Post implements Node {
      id: ID!
      slug: String!
      title: String
      tags: [String]
      date: Date @dateformat
      excerpt(pruneLength: Int = 140): String
      body: String
      cover: File @fileByRelativePath
    }
  `)
}

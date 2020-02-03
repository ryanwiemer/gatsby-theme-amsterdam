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

// Pass mdx body and excerpt to Post type
module.exports = ({ createResolvers }) => {
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

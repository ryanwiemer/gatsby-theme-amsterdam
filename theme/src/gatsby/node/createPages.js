const _ = require(`lodash`)
const path = require('path')
const { paginate } = require(`gatsby-awesome-pagination`)
const query = require('../data/query')

module.exports = async ({ graphql, actions }, themeOptions) => {
  const { createPage } = actions
  const postsQuery = await graphql(query.data.posts)
  const posts = postsQuery.data.allPost.edges
  const basePath = themeOptions.basePath || `/`

  const templatesDirectory = path.resolve(__dirname, '../../templates')
  const templates = {
    post: path.resolve(templatesDirectory, 'post.js'),
    posts: path.resolve(templatesDirectory, 'posts.js'),
    tags: path.resolve(templatesDirectory, 'tag.js'),
  }

  // Create individual post pages
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.node.slug,
      component: templates.post,
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
    component: templates.posts,
    context: {
      basePath: basePath === '/' ? '' : basePath,
      paginationPath: basePath === '/' ? '' : `/${basePath}`,
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
        ? `/tag/${_.kebabCase(tag)}`
        : `/${basePath}/tag/${_.kebabCase(tag)}`

    paginate({
      createPage,
      items: postsWithTag,
      itemsPerPage: postsPerPage,
      pathPrefix: tagPagination,
      component: templates.tags,
      context: {
        tag,
        basePath: basePath === '/' ? '' : basePath,
        paginationPath: tagPagination,
      },
    })
  })
}

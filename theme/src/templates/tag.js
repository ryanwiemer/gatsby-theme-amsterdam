import React from 'react'
import { graphql } from 'gatsby'
import Intro from '../components/Intro'
import PostList from '../components/PostList'
import SEO from '../components/SEO'
import Pagination from '../components/Pagination'
import Container from '../components/Container'
import { startCase } from 'lodash'

const TagPage = ({ data, pageContext }) => {
  const posts = data.allPost.edges

  let ogImage
  try {
    ogImage = posts[0].node.cover.childImageSharp.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <>
      <SEO
        title={`Tag: ${startCase(pageContext.tag)}`}
        description={`Posts Tagged: ${startCase(pageContext.tag)}`}
        image={ogImage}
      />
      <Container fullWidth noPadding>
        <Intro
          text={`Tagged: ${pageContext.tag}`}
          context={pageContext}
          capitalize
        />
        {posts.length > 0 && <PostList posts={posts} context={pageContext} />}
      </Container>
      <Pagination context={pageContext} />
    </>
  )
}

export default TagPage

export const tagQuery = graphql`
  query($skip: Int!, $limit: Int!, $tag: String) {
    allPost(
      sort: { fields: [date], order: DESC }
      skip: $skip
      limit: $limit
      filter: { tags: { in: [$tag] } }
    ) {
      edges {
        node {
          slug
          excerpt
          title
          tags
          date(formatString: "MMMM DD, YYYY")
          cover {
            childImageSharp {
              gatsbyImageData(
                width: 1000
                placeholder: BLURRED
                aspectRatio: 1.66
              )
              ogimg: resize(width: 1000) {
                src
              }
            }
          }
        }
      }
    }
  }
`

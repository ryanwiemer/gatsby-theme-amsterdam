import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import Hero from '../components/Hero'
import MDX from '../components/MDX'
import Preview from '../components/Preview'
import SEO from '../components/SEO'
import ProgressIndicator from '../components/ProgressIndicator'
import OptionsContext from '../components/OptionsContext'

const PostTemplate = ({ data, pageContext }) => {
  const next = pageContext.previous
  const previous = pageContext.next
  const options = useContext(OptionsContext)

  let ogImage

  try {
    ogImage = data.post.cover.childImageSharp.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <>
      <SEO
        title={data.post.title}
        description={data.post.excerpt}
        image={ogImage}
      />
      {options.progressIndicator && <ProgressIndicator />}
      <Container fullWidth>
        <Hero
          title={data.post.title}
          image={data.post.cover}
          date={data.post.date}
          tags={data.post.tags}
          context={pageContext}
        />
        <MDX content={data.post.body} />
        <Preview previous={previous} next={next} context={pageContext} />
      </Container>
    </>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    post(slug: { eq: $slug }) {
      body
      excerpt
      title
      tags
      date(formatString: "MMMM DD, YYYY")
      cover {
        childImageSharp {
          gatsbyImageData(width: 1000, placeholder: BLURRED, aspectRatio: 1.66)
          ogimg: resize(width: 1000) {
            src
          }
        }
      }
    }
  }
`

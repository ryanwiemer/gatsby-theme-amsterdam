import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'

// Basic Grid Styling
const List = styled.ul`
  margin: 3rem auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 1.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const Item = styled(motion.li)`
  position: relative;
  display: inline-block;
  flex: 0 100%;
  margin: 0 0 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin: 0 0 2rem;
    flex: 0 49%;
  }
  a {
    text-decoration: none;
    transition: color 0.3s;
    color: ${props => props.theme.colors.secondary};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.secondary} !important;
    }
  }
`

const ImageContainer = styled(motion.div)`
  .gatsby-image-wrapper {
    height: 0;
    padding-bottom: 60%;
  }
`

const Title = styled.h2`
  text-align: left;
  padding: 0.5rem 0 0 0;
  display: inline-block;
  line-height: 1.25;
`

// Organic Grid Styling
const OrganicList = styled(List)`
  max-width: 100%;
`

const OrganicItem = styled(Item)`
  align-self: center;
  flex: 0 47.5%;
  margin: 0 0 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin: 0 0 3rem;
  }
  &:nth-child(3n) {
    flex: 0 75%;
    margin-left: 25%;
    position: relative;
    left: 1.5rem;
  }
  &:nth-child(6n) {
    flex: 0 75%;
    margin-left: 0;
    position: relative;
    left: -1.5rem;
    h2 {
      padding: 1rem 0 0 1.5rem;
    }
  }
`

const OrganicImageContainer = styled(ImageContainer)`
  .gatsby-image-wrapper {
    height: 100%;
    padding: 0;
  }
`

const BasicGrid = props => {
  return (
    <List>
      {props.posts.map(({ node: post }) => (
        <Item key={post.frontmatter.title}>
          <Link to={post.fields.slug}>
            {post.frontmatter.cover && (
              <ImageContainer
                whileHover={{
                  opacity: 0.7,
                  transition: {
                    duration: 0.4,
                  },
                }}
              >
                <Img
                  fluid={post.frontmatter.cover.childImageSharp.fluid}
                  alt={post.frontmatter.cover.childImageSharp.title}
                />
              </ImageContainer>
            )}
            <Title>{post.frontmatter.title}</Title>
          </Link>
        </Item>
      ))}
    </List>
  )
}

const OrganicGrid = props => {
  return (
    <OrganicList>
      {props.posts.map(({ node: post }) => (
        <OrganicItem key={post.frontmatter.title}>
          <Link to={post.fields.slug}>
            {post.frontmatter.cover && (
              <OrganicImageContainer
                whileHover={{
                  opacity: 0.7,
                  transition: {
                    duration: 0.4,
                  },
                }}
              >
                <Img
                  fluid={post.frontmatter.cover.childImageSharp.fluid}
                  alt={post.frontmatter.cover.childImageSharp.title}
                />
              </OrganicImageContainer>
            )}
            <Title>{post.frontmatter.title}</Title>
          </Link>
        </OrganicItem>
      ))}
    </OrganicList>
  )
}

const PostList = props => {
  if (props.grid === 'organic') {
    return <OrganicGrid {...props} />
  }
  return <BasicGrid {...props} />
}

export default PostList

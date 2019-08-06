import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import ImageIcon from '../icons/ImageIcon'

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
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.base} !important;
    }
  }
`

const Cover = styled(Img)`
  transition: opacity 0.4s;
  img {
    transition: transform 0.6s !important;
  }
  &:hover {
    opacity: 0.8;
    img {
      transform: scale(1.03);
    }
  }
  @media (hover: none) {
    opacity: 1 !important;
    img {
      transform: scale(1) !important;
    }
  }
`

const Title = styled.h2`
  font-weight: ${props => props.theme.fonts.boldWeight};
  padding: 0.5rem 0 0 0;
  display: block;
  line-height: 1.25;
  font-size: 1rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1rem;
  }
`

const Excerpt = styled.p`
  padding: 0.5rem 0 0 0;
  line-height: 1.5;
  color: ${props => props.theme.colors.secondary};
`

// Placeholder Image
const Placeholder = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.border};
  padding-bottom: 60%;
  position: relative;
  svg {
    transition: transform 0.6s;
    width: 15%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    svg {
      transform: translate(-50%, -50%) scale(1.05);
    }
  }
  @media (hover: none) {
    opacity: 1 !important;
    svg {
      transform: translate(-50%, -50%) scale(1) !important;
    }
  }
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

const BasicGrid = props => {
  return (
    <List>
      {props.posts.map(({ node: post }) => (
        <Item key={post.frontmatter.title}>
          <Link to={post.fields.slug}>
            {post.frontmatter.cover && (
              <Cover
                sizes={{
                  ...post.frontmatter.cover.childImageSharp.fluid,
                  aspectRatio: 5 / 3,
                }}
                alt={post.frontmatter.cover.childImageSharp.title}
              />
            )}
            {post.frontmatter.cover === null ? (
              <Placeholder>
                <ImageIcon />
              </Placeholder>
            ) : (
              ''
            )}
            <Title>{post.frontmatter.title}</Title>
            <Excerpt>{post.excerpt}</Excerpt>
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
              <Cover
                fluid={post.frontmatter.cover.childImageSharp.fluid}
                alt={post.frontmatter.cover.childImageSharp.title}
              />
            )}
            <Title>{post.frontmatter.title}</Title>
            <Excerpt>{post.excerpt}</Excerpt>
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

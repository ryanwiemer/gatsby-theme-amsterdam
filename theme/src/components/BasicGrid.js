import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Placeholder from './Placeholder'

const List = styled.ul`
  margin: 3rem auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 1.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const Cover = styled(Img)`
  transition: opacity 0.4s;
  img {
    transition: transform 0.6s !important;
  }
  @media (hover: none) {
    opacity: 1 !important;
    img {
      transform: scale(1) !important;
    }
  }
`

const Item = styled.li`
  position: relative;
  display: inline-block;
  flex: 0 100%;
  margin: 0 0 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 49%;
  }
  a {
    text-decoration: none;
    transition: color 0.3s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
      ${Cover} {
        opacity: 0.8;
        img {
          transform: scale(1.03);
        }
      }
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.base} !important;
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
              <Placeholder aspectRatio={5 / 3} />
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

export default BasicGrid

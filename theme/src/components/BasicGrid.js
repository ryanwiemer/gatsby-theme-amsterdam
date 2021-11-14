import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import Placeholder from './Placeholder'
const _ = require(`lodash`)

const List = styled.ul`
  margin: 3rem auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 1.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const Cover = styled(GatsbyImage)`
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
    color: ${props => props.theme.colors.tertiary};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.tertiary} !important;
    }
  }
`

const Title = styled.h2`
  transition: color 0.3s;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fonts.boldWeight};
  margin: 1rem 0 0 0;
  display: block;
  line-height: 1.25;
  font-size: 1rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1rem;
  }
  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
  @media (hover: none) {
    color: ${props => props.theme.colors.text} !important;
  }
`

const Excerpt = styled.p`
  padding: 0.5rem 0 0 0;
  line-height: 1.5;
  color: ${props => props.theme.colors.secondary};
`

const Container = styled.div`
  padding: 1rem 0 0;
  line-height: 1.5;
  font-size: 0.9em;
`

const Divider = styled.span`
  margin: 0 0.25rem;
  color: ${props => props.theme.colors.border};
`

const Date = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.tertiary};
`

const Tag = styled.span`
  display: inline-block;
  margin: 0 0.5rem 0 0;
  text-transform: capitalize;
  a {
    text-decoration: underline;
    color: ${props => props.theme.colors.tertiary};
    @media (hover: none) {
      color: ${props => props.theme.colors.tertiary} !important;
    }
  }
`

const BasicGrid = props => {
  return (
    <List>
      {props.posts.map(({ node: post }) => (
        <Item key={post.title}>
          <Link to={post.slug}>
            {post.cover && (
              <Cover
                image={post.cover.childImageSharp.gatsbyImageData}
                alt={post.title}
              />
            )}
            {post.cover === null ? <Placeholder aspectRatio={5 / 3} /> : ''}
          </Link>
          <Link to={post.slug}>
            <Title>{post.title}</Title>
            <Excerpt>{post.excerpt}</Excerpt>
          </Link>
          <Container>
            {post.date && <Date>{post.date}</Date>}
            {post.tags && (
              <>
                <Divider>/</Divider>
                {post.tags.map(tag => (
                  <Tag key={tag}>
                    <Link
                      to={`${props.context.basePath}/tag/${_.kebabCase(tag)}/`}
                    >
                      {tag}
                    </Link>
                  </Tag>
                ))}
              </>
            )}
          </Container>
        </Item>
      ))}
    </List>
  )
}

export default BasicGrid

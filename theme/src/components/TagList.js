import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import TagIcon from '../icons/TagIcon'
const _ = require(`lodash`)

const List = styled.ul`
  margin: 0 0 1rem 0;
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.5rem 0.25rem 0;
  a {
    float: left;
    transition: 0.3s;
    text-transform: capitalize;
    color: ${props => props.theme.colors.secondary};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.secondary} !important;
    }
  }
`

const TagList = props => {
  return (
    <List>
      <TagIcon />
      {props.tags.map(tag => (
        <Tag key={tag}>
          <Link to={`${props.context.basePath}/tag/${_.kebabCase(tag)}/`}>
            {tag}
          </Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList

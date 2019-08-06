import React from 'react'
import BasicGrid from './BasicGrid'
import ListGrid from './ListGrid'

const PostList = props => {
  if (props.grid === 'list') {
    return <ListGrid {...props} />
  }
  return <BasicGrid {...props} />
}

export default PostList

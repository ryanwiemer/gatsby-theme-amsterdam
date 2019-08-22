import React, { useContext } from 'react'
import BasicGrid from './BasicGrid'
import ListGrid from './ListGrid'
import OptionsContext from './OptionsContext'

const PostList = props => {
  const options = useContext(OptionsContext)

  if (options.grid === 'list') {
    return <ListGrid {...props} />
  }
  return <BasicGrid {...props} />
}

export default PostList

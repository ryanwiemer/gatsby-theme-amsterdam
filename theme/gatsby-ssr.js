import React from 'react'
import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }, pluginOptions) => {
  const { transitions = true } = pluginOptions
  return (
    <Layout {...props} transitions={transitions}>
      {element}
    </Layout>
  )
}

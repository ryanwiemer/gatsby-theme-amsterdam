import React from 'react'
import Layout from './../../components/Layout'
import { OptionsProvider } from './../../components/OptionsContext'

const CustomLayout = ({ element, props }, pluginOptions) => {
  const value = {
    transitions: true,
    grid: 'grid',
    postsPerPage: 6,
    progressIndicator: true,
    basePath: '/',
    colorToggle: true,
    ...pluginOptions,
  }

  return (
    <OptionsProvider value={value}>
      <Layout {...props}>{element}</Layout>
    </OptionsProvider>
  )
}

export default CustomLayout

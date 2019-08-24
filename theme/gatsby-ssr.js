import React from 'react'
import Layout from './src/components/Layout'
import { OptionsProvider } from './src/components/OptionsContext'

export const wrapPageElement = ({ element, props }, pluginOptions) => {
  const value = {
    transitions: true,
    grid: 'grid',
    postsPerPage: 6,
    progressIndicator: true,
    ...pluginOptions,
  }

  return (
    <OptionsProvider value={value}>
      <Layout {...props}>{element}</Layout>
    </OptionsProvider>
  )
}

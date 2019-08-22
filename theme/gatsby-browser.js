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
export const shouldUpdateScroll = (
  { routerProps: { location }, getSavedScrollPosition },
  pluginOptions
) => {
  const { transitions = true } = pluginOptions

  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitions ? 350 : 0)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitions ? 350 : 0
    )
  }
  return false
}

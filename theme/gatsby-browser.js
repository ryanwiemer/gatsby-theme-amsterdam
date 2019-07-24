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

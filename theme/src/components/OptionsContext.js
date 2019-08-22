import React from 'react'

const OptionsContext = React.createContext({})

export const OptionsProvider = OptionsContext.Provider
export const OptionsConsumer = OptionsContext.Consumer
export default OptionsContext

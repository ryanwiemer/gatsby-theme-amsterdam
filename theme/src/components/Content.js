import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import styled from '@emotion/styled'
require('prismjs/themes/prism.css')

const Wrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${props => props.theme.fonts.boldWeight};
    line-height: 1.25;
    margin: 0 0 1rem;
  }

  .task-list-item {
    list-style: none;
  }

  input[type='checkbox'] {
    appearance: checkbox;
    position: relative;
    top: -1px;
  }

  strong {
    font-weight: ${props => props.theme.fonts.boldWeight};
  }

  em {
    font-style: italic;
  }
`

const H1 = styled.h1`
  font-size: 1.75rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2rem;
  }
`

const H2 = styled.h2`
  font-size: 1.25rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.5rem;
  }
`

const H3 = styled.h3`
  font-size: 1.1rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.25rem;
  }
`

const H4 = styled.h4`
  font-size: 1rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1rem;
  }
`

const H5 = styled.h5`
  font-size: 0.875rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 0.95rem;
  }
`

const H6 = styled.h6`
  font-size: 0.75rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 0.875rem;
  }
`

const P = styled.p`
  line-height: 1.5;
  margin: 0 0 1.75rem;
`

const HR = styled.hr`
  border: 0;
  height: 1px;
  background: ${props => props.theme.colors.border};
  margin: 0 0 1.75rem;
`

const Blockquote = styled.blockquote`
  border-left: 2px solid ${props => props.theme.colors.highlight};
  margin: 0 0 1.75rem;
  padding: 0.5rem;
  font-style: italic;
  p:last-child {
    margin: 0;
  }
`

const UL = styled.ul`
  line-height: 1.5;
  margin: 0 0 1.75rem;
  li {
    list-style: disc;
    list-style-position: inside;
    margin: 0 0 0.5rem 0;
    &:last-child {
      margin: 0;
    }
  }
`

const OL = styled.ol`
  line-height: 1.5;
  margin: 0 0 1.75rem;
  li {
    list-style: decimal;
    list-style-position: inside;
    margin: 0 0 0.5rem 0;
    &:last-child {
      margin: 0;
    }
  }
`

const Code = styled.code`
  font-size: 0.9rem !important;
  padding: 0.25rem !important;
  background: ${props => props.theme.colors.code} !important;
`

const Table = styled.table`
  display: block;
  overflow: auto;
  width: 100%;
  margin: 0 0 1.75rem;
  td,
  th {
    padding: 0;
    vertical-align: center !important;
    border: 1px solid ${props => props.theme.colors.border};
    padding: 0.75rem;
  }
  th {
    font-weight: 600;
  }
  td {
    line-height: 1.5;
  }
  tr {
    background: ${props => props.theme.colors.background};
    border-top: 1px solid ${props => props.theme.colors.border};
  }
  tr:nth-of-type(2n) {
    background: ${props => props.theme.colors.code};
  }
`

const Pre = styled.pre`
  text-shadow: none !important;
  border: 0 !important;
  margin: 0 0 1.75rem 0 !important;
  border-radius: 2px !important;
  background: ${props => props.theme.colors.code} !important;
  code,
  span {
    text-shadow: none !important;
    background: ${props => props.theme.colors.code} !important;
    padding: 0 !important;
  }
`

const A = styled.a`
  transition: 0.3s color;
  color: ${props => props.theme.colors.secondary};
  text-decoration: underline;
  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
  @media (hover: none) {
    color: ${props => props.theme.colors.secondary} !important;
  }
`

const components = {
  h1: H2, // h1 reserved for title
  h2: H3,
  h3: H4,
  h4: H5,
  h5: H6,
  h6: H6,
  p: P,
  hr: HR,
  blockquote: Blockquote,
  ul: UL,
  ol: OL,
  code: Code,
  table: Table,
  pre: Pre,
  a: A,
}

const Content = props => {
  return (
    <Wrapper>
      <MDXProvider components={components}>{props.children}</MDXProvider>
    </Wrapper>
  )
}

export default Content

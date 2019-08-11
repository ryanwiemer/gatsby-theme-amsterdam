import React from 'react'
import styled from 'styled-components'
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

  h1 {
    font-size: 1.75rem;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1.25rem;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.1rem;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 1.25rem;
    }
  }

  h4 {
    font-size: 1rem;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 1.1rem;
    }
  }

  h5 {
    font-size: 0.875rem;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 0.95rem;
    }
  }

  h6 {
    font-size: 0.75rem;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 0.875rem;
    }
  }

  p {
    line-height: 1.5;
    margin: 0 0 1.75rem;
  }

  ul,
  ol {
    line-height: 1.5;
    margin: 0 0 1.75rem;
    li {
      position: relative;
    }
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      margin: 0 0 0.5rem 0;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      margin: 0 0 0.5rem 0;
      &:last-child {
        margin: 0;
      }
    }
  }

  .task-list-item {
    list-style: none;
  }

  input[type='checkbox'] {
    appearance: checkbox;
    position: relative;
    top: -1px;
  }

  hr {
    border: 0;
    height: 1px;
    background: ${props => props.theme.colors.border};
    margin: 0 0 1.75rem;
  }

  blockquote {
    border-left: 2px solid ${props => props.theme.colors.highlight};
    margin: 0 0 1.75rem;
    padding: 0.5rem;
    font-style: italic;
    p:last-child {
      margin: 0;
    }
  }

  strong {
    font-weight: ${props => props.theme.fonts.boldWeight};
  }

  em {
    font-style: italic;
  }

  pre {
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
  }

  code {
    font-size: 0.9rem !important;
    padding: 0.25rem !important;
    background: ${props => props.theme.colors.code} !important;
  }

  td,
  th {
    padding: 0;
  }

  table {
    display: block;
    overflow: auto;
    width: 100%;
    margin: 0 0 1.75rem;
  }

  table th {
    font-weight: 600;
  }

  table td,
  table th {
    vertical-align: center !important;
    border: 1px solid ${props => props.theme.colors.border};
    padding: 0.75rem;
  }

  td {
    line-height: 1.5;
  }

  table tr {
    background: ${props => props.theme.colors.background};
    border-top: 1px solid ${props => props.theme.colors.border};
  }

  table tr:nth-child(2n) {
    background: ${props => props.theme.colors.code};
  }

  a {
    transition: 0.3s color;
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.secondary} !important;
    }
  }
`

const Content = props => {
  return (
    <Wrapper>
      {props.children}
      {props.html && <div dangerouslySetInnerHTML={{ __html: props.html }} />}
    </Wrapper>
  )
}

export default Content

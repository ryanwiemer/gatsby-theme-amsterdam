import React from 'react'
import { Link } from 'gatsby'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import Content from 'gatsby-theme-amsterdam/src/components/Content'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'

const FAQPage = ({ data }) => {
  return (
    <Container>
      <SEO
        title="FAQ"
        description="Frequently Asked Questions About Gatsby Theme Amsterdam"
      />
      <Content>
        <h1>Frequently Asked Questions</h1>
        <h3>What is Gatsby?</h3>
        <p>
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>{' '}
          is a free and open source framework based on React that helps
          developers build blazing fast websites and apps.
        </p>
        <h3>What are Gatsby themes?</h3>
        <p>
          <a
            href="https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby themes
          </a>{' '}
          are pre-built, installable packages for setting up a site’s default
          styling, components, plugins, and overall configuration. This allows
          developers to have a fully functional Gatsby site with just a few
          lines of code.
        </p>
        <h3>What does a minimum setup look like?</h3>
        <p>
          A minimum setup requires only two files. A <code>package.json</code>{' '}
          and <code>gatsby-config.js</code>. That will get the site up and
          running but to take advantage of the theme you will want to add
          content. For more information please review the{' '}
          <Link to="/docs/">docs</Link>.
        </p>
        <h3>Can Gatsby Theme Amsterdam be used alongside other themes?</h3>
        <p>
          Yes. Gatsby Theme Amsterdam can be installed alongside other themes.
        </p>
        <h3>Why can't it do this, that or the other thing?</h3>
        <p>
          Gatsby Theme Amsterdam was designed to be a minimal and clean theme
          geared towards photographers, artists and other creative folks. If you
          have an idea for an enhancement or feature that fits within that
          vision please log a ticket on{' '}
          <a
            href="https://github.com/ryanwiemer/gatsby-theme-amsterdam"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          or better yet submit a pull request.
        </p>
        <hr />
        <h3>Still have a question?</h3>
        <p>
          Send me a tweet on Twitter{' '}
          <a
            href="https://twitter.com/ryanwiemer"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ryanwiemer
          </a>
          .
        </p>
      </Content>
    </Container>
  )
}

export default FAQPage

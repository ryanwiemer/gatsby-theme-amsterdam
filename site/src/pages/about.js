import React from 'react'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import Content from 'gatsby-theme-amsterdam/src/components/Content'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'

const AboutPage = ({ data }) => {
  return (
    <Container>
      <SEO title="About" description="About Gatsby Theme Amsterdam" />
      <Content>
        <h1>About</h1>
        <p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
            alt="Flag of the Netherlands"
          />
          <span
            style={{
              display: 'inline-block',
              color: '#686461',
              padding: '.5rem 0 0 0',
            }}
          >
            Official flag of the Netherlands (source:{' '}
            <a
              href="https://en.wikipedia.org/wiki/Netherlands"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
            )
          </span>
        </p>
        <p>
          <strong>Gatsby Theme Amsterdam</strong> was designed to be a minimal
          and clean theme geared towards photographers, artists and other
          creative folks. Inspired by the capital city of the Netherlands known
          for its artistic heritage, impressive architecture and canals that
          criss-cross the city. Truthfully I have never visited before but it
          sounds like a pretty cool place so I decided to use the name.
        </p>
        <p>
          <iframe
            title="github"
            src="https://ghbtns.com/github-btn.html?user=ryanwiemer&repo=gatsby-theme-amsterdam&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="160px"
            height="30px"
          ></iframe>
        </p>
        <p>
          Created by{' '}
          <strong>
            <a
              href="https://twitter.com/ryanwiemer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ryan Wiemer
            </a>
          </strong>
        </p>
        <h3>Features</h3>
        <ul>
          <li>Minimal responsive design</li>
          <li>Optional page transitions</li>
          <li>Multiple grid options to display posts</li>
          <li>Customizable theme colors and typography</li>
          <li>SEO friendly component</li>
          <li>Mobile menu</li>
          <li>Styled components</li>
          <li>Tags</li>
          <li>Pagination</li>
          <li>Offline support</li>
        </ul>
      </Content>
    </Container>
  )
}

export default AboutPage

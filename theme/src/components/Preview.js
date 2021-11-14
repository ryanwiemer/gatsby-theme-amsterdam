import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useColorMode } from 'theme-ui'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 3rem auto 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 2px;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Box = styled(Link)`
  color: ${props => props.theme.colors.text};
  display: block;
  height: 200px;
  position: relative;
  flex: 0 0 50%;
  text-decoration: none !important;
  z-index: 2;
  transition: 0.3s color;
  .gatsby-image-wrapper {
    transition: 0.4s opacity;
    opacity: 0;
  }
  &::after {
    background: ${props =>
      props.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.05)'
        : 'rgba(0, 0, 0, 0.05)'};
    transition: background-color 0.4s;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:hover {
    color: white;
    .gatsby-image-wrapper {
      opacity: 1;
    }
    &::after {
      background: rgba(0, 0, 0, 0.4);
    }
  }
  @media (hover: none) {
    color: ${props => props.theme.colors.text} !important;
    .gatsby-image-wrapper {
      opacity: 0 !important;
    }
    &::after {
      background: rgba(0, 0, 0, 0.05) !important;
    }
  }
`

const TextContainer = styled.div`
  padding: 0 1rem;
  text-transform: capitalize;
  z-index: 2;
  text-align: left;
  display: flex;
  align-items: center;
  margin: 0 0 0 1rem;
  height: 100%;
  position: relative;
`

const SubTitle = styled.div`
  margin: 0 0 1rem 0;
  font-size: 0.9em;
  opacity: 0.5;
`

const Title = styled.h3`
  line-height: 1.25;
`

const Line = styled.div`
  display: block;
  background: ${props => props.theme.colors.border};
  height: 100%;
  width: 1px;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 50;
`

const Preview = props => {
  const [colorMode] = useColorMode()
  const hasPreviewContent = props.next || props.previous

  return (
    <>
      {hasPreviewContent && (
        <Wrapper>
          {props.previous && (
            <Box
              mode={colorMode}
              to={props.previous.slug}
              style={{ order: 1, marginRight: 'auto' }}
            >
              <TextContainer>
                <div>
                  <SubTitle>Previous Post</SubTitle>
                  {props.previous.title && (
                    <Title>{props.previous.title}</Title>
                  )}
                </div>
              </TextContainer>
              {props.previous.cover && (
                <GatsbyImage
                  image={props.previous.cover.childImageSharp.gatsbyImageData}
                  alt={props.previous.title}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              )}
            </Box>
          )}
          <Line />
          {props.next && (
            <Box
              mode={colorMode}
              to={props.next.slug}
              style={{ order: 3, marginLeft: 'auto' }}
            >
              <TextContainer>
                <div>
                  <SubTitle>Next Post</SubTitle>
                  {props.next.title && <Title>{props.next.title}</Title>}
                </div>
              </TextContainer>
              {props.next.cover && (
                <GatsbyImage
                  alt={props.next.title}
                  image={props.next.cover.childImageSharp.gatsbyImageData}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              )}
            </Box>
          )}
        </Wrapper>
      )}
    </>
  )
}

export default Preview

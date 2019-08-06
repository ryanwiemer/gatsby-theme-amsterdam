import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import TagList from './TagList'
import DateIcon from '../icons/DateIcon'

const Wrapper = styled.div`
  margin: 0 -1.5rem 2rem;
`

const ImageContainer = styled.div`
  padding: 0 1.5rem;
`

const BgImg = styled(Img)`
  margin: 0 auto;
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`

const TextContainer = styled.div`
  margin: 0 auto 3rem;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 1.5rem;
`

const Title = styled.h2`
  font-weight: ${props => props.theme.fonts.boldWeight};
  line-height: 1.25;
  text-align: left;
  margin: 0 0 1rem;
  text-transform: capitalize;
  font-size: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 75%;
  }
`

const Date = styled.p`
  font-size: 1em;
  color: ${props => props.theme.colors.secondary};
`

const Hero = props => {
  return (
    <Wrapper>
      <TextContainer>
        <Title>{props.title}</Title>
        {props.tags && <TagList tags={props.tags} />}
        {props.date && (
          <Date>
            <DateIcon />
            {props.date}
          </Date>
        )}
      </TextContainer>
      {props.image && (
        <ImageContainer>
          <BgImg
            fluid={props.image.childImageSharp.fluid}
            alt={props.image.title}
            title={props.image.title}
          />
        </ImageContainer>
      )}
    </Wrapper>
  )
}

export default Hero

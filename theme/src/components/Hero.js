import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import TagList from './TagList'
import DateIcon from '../icons/DateIcon'
import Placeholder from './Placeholder'

const Wrapper = styled.div`
  margin: 0 -1.5rem 2rem;
`

const ImageContainer = styled.div`
  padding: 0 1.5rem;
`

const Cover = styled(Img)`
  margin: 0 auto;
  width: 100%;
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
        {props.tags && <TagList tags={props.tags} context={props.context} />}
        {props.date && (
          <Date>
            <DateIcon />
            {props.date}
          </Date>
        )}
      </TextContainer>
      <ImageContainer>
        {props.image && (
          <Cover
            sizes={{
              ...props.image.childImageSharp.fluid,
              aspectRatio: 5 / 3,
            }}
            alt={props.image.title}
            title={props.image.title}
          />
        )}
        {props.image === null ? <Placeholder aspectRatio={5 / 3} /> : ''}
      </ImageContainer>
    </Wrapper>
  )
}

export default Hero

import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Wrapper = styled.div`
  width: 100%;
  margin: -2.5rem auto 2.5rem;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 1.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
`

const Numbers = styled.span`
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 2px;
  padding: 0.5rem;
  display: inline-block;
  float: left;
  color: ${props => props.theme.colors.secondary};
`

const Pagination = props => {
  return (
    <>
      {props.context.numberOfPages > 1 && (
        <Wrapper>
          <Numbers>
            {props.context.humanPageNumber} / {props.context.numberOfPages}
          </Numbers>
          <div>
            {props.context.previousPagePath && (
              <Button to={props.context.previousPagePath}>&larr; Prev</Button>
            )}
            {props.context.nextPagePath && (
              <Button style={{ order: 3 }} to={props.context.nextPagePath}>
                Next &rarr;
              </Button>
            )}
          </div>
        </Wrapper>
      )}
    </>
  )
}

export default Pagination

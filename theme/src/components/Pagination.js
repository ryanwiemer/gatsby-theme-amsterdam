import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import Button from './Button'
import SelectIcon from '../icons/SelectIcon'

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

const Numbers = styled.div`
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 2px;
  display: inline-block;
  float: left;
  color: ${props => props.theme.colors.secondary};
  padding: 0.5rem;
  background: ${props => props.theme.colors.button};
  position: relative;
  transition: 0.3s all;
  svg {
    margin: 0 0 0 0.25rem;
    transition: 0.3s all;
  }
  &:hover {
    background: ${props => props.theme.colors.highlight};
    border-color: ${props => props.theme.colors.highlight};
    color: white;
    svg {
      fill: white;
    }
  }
  @media (hover: none) {
    background: ${props => props.theme.colors.button} !important;
    color: ${props => props.theme.colors.secondary} !important;
    border-color: ${props => props.theme.colors.border} !important;
    svg {
      fill: ${props => props.theme.colors.tertiary} !important;
    }
  }
`

const Select = styled.select`
  cursor: pointer;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: transparent;
`

const Pagination = props => {
  function changePage(e) {
    navigate(
      e.target.value
        ? `${props.context.paginationPath}/${e.target.value}`
        : `${props.context.paginationPath}/`
    )
  }

  return (
    <>
      {props.context.numberOfPages > 1 && (
        <Wrapper>
          <Numbers>
            {props.context.humanPageNumber}{' '}
            <Select
              value={
                props.context.humanPageNumber === 1
                  ? ``
                  : props.context.humanPageNumber
              }
              onChange={changePage}
            >
              {Array.from({ length: props.context.numberOfPages }, (_, i) => (
                <option value={`${i === 0 ? `` : i + 1}`} key={`page${i + 1}`}>
                  {i + 1}
                </option>
              ))}
            </Select>
            / {props.context.numberOfPages} <SelectIcon />
          </Numbers>
          <div>
            {props.context.previousPagePath && (
              <Button to={`${props.context.previousPagePath}`}>
                <span>&larr;</span> Prev
              </Button>
            )}
            {props.context.nextPagePath && (
              <Button style={{ order: 3 }} to={`${props.context.nextPagePath}`}>
                Next <span>&rarr;</span>
              </Button>
            )}
          </div>
        </Wrapper>
      )}
    </>
  )
}

export default Pagination

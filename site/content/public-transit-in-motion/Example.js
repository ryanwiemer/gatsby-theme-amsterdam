import React, { useState } from 'react';
import styled from '@emotion/styled'

const Wrapper = styled.button`
  height: 150px;
  width: 100%;
  max-width: 300px;
  background: ${props => props.theme.colors.highlight};
  margin: 0 0 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border-radius: 2px;
  cursor: pointer;
`

const Text = styled.p`
  color: white;
  line-height: 1.5;
`

const Number = styled.p`
  color: white;
  font-weight: ${props => props.theme.fonts.boldWeight};
  font-size: 2em;
  margin: 0 0 1rem 0;
`

const Example = props => {
  const [count, setCount] = useState(0);
  return (
    <Wrapper onClick={() => setCount(count + 1)}>
      <div>
        <Number>
          {count}
        </Number>
        <Text>{props.children}</Text>
      </div>
    </Wrapper>
    )
}

export default Example

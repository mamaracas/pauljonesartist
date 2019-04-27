import React, { SFC } from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

const StyledUl = styled('ul')`
  padding: 0;
  margin: 5px;
  text-align: center;
  list-style-type: none;
  li {
    font-size: 12px;
    text-align: center;
  }
`

const PaintingHolder: SFC<{ img: string; title: string; dims: string }> = ({
  img,
  title,
  dims
}) => {
  return (
    <Box mb={[5]}>
      <img src={img} style={{ width: '100%' }} alt={title} />
      <StyledUl>
        {title}
        <li>{dims}</li>
      </StyledUl>
    </Box>
  )
}

export default PaintingHolder

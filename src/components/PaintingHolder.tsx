import React, { SFC } from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

const StyledUl = styled('ul')`
  padding: 0;
  margin: 5px;
  font-weight: bold;
`

const PaintingHolder: SFC<{ img: string; title: string; dims: string }> = ({
  img,
  title,
  dims
}) => {
  return (
    <Box>
      <img src={img} style={{ width: '100%' }} alt={title} />
      <StyledUl>
        {title}
        <li>{dims}</li>
      </StyledUl>
    </Box>
  )
}

export default PaintingHolder

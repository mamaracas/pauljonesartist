import React, { SFC } from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

const StyledBox = styled(Box)`
  background-color: #8f8f8f;
  text-align: right;
  a {
    color: white;
    text-decoration: none;
  }
`
const Footer: SFC = () => (
  <footer style={{ width: '100%' }}>
    <StyledBox width={'100%'} p={[2, 3]}>
      <a
        href="mailto:pauljonesglendaleart@hotmail.co.uk"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact us
      </a>
    </StyledBox>
  </footer>
)

export default Footer

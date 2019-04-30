import React, { SFC } from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

const StyledBox = styled(Box)`
  width: 100%;
`
const Page: SFC = ({ children }) => <StyledBox p={[4]}>{children}</StyledBox>

export default Page

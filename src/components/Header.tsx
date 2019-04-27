import React, { SFC } from 'react'
import { Flex, Box, Text } from 'rebass'
import Navigation from './Navigation'
import HeaderImages from './HeaderImages'
import styled from 'styled-components/macro'

const StyledBox = styled(Box)`
  position: relative;
  z-index: 1;
`

const StyledText = styled(Text)`
  text-shadow: 3px 2px 4px rgba(0, 0, 0, 0.6);
`

const StyledFlex = styled(Flex)`
  height: 100%;
`
const Header: SFC = () => {
  return (
    <header style={{ width: '100%', position: 'relative' }}>
      <StyledBox width={'100%'}>
        <StyledFlex justifyContent="space-between" flexDirection="column">
          <Box flex={'1 0 auto'} alignSelf="flex-end">
            <Flex
              alignItems="flex-end"
              justifyContent="flex-end"
              css={{
                height: '100%'
              }}
            >
              <Box alignSelf="flex-end">
                <StyledText
                  fontSize={[5, 5, 6]}
                  mr={[3]}
                  mt={[5, 5, 6]}
                  color="white"
                  textAlign="right"
                >
                  Paul Jones
                </StyledText>
              </Box>
            </Flex>
          </Box>
          <Box flex={'0 0 auto'}>
            <Navigation />
          </Box>
        </StyledFlex>
      </StyledBox>
      <HeaderImages />
    </header>
  )
}

export default Header

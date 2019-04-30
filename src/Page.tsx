import React, { SFC } from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const StyledBox = styled(Box)`
  width: 100%;
`
const Page: SFC = ({ children }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translate(-40px,0)' },
    to: { opacity: 1, transform: 'translate(0,0)' },
    delay: 200,
    config: { mass: 1, tension: 230, friction: 20 }
  })

  return (
    <StyledBox p={[4]}>
      <animated.div style={props}>{children}</animated.div>
    </StyledBox>
  )
}

export default Page

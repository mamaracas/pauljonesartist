import React, { SFC } from 'react'
import { Box } from 'rebass'
import NavigationItem from './NavigationItem'

const Navigation: SFC = () => {
  return (
    <nav>
      <Box pt={[3]}>
        <ul>
          <NavigationItem to="/">Home</NavigationItem>
          <NavigationItem to="/about">About</NavigationItem>
        </ul>
      </Box>
    </nav>
  )
}

export default Navigation

import React, { SFC } from 'react'
import { Flex, Box } from 'rebass'
import { Link, withRouter } from 'react-router-dom'
import { Iimg } from './ImgLists'
import PaintingHolder from './PaintingHolder'
import styled from 'styled-components/macro'

const PaintingCollectionHeading: SFC<{ marginSpace?: number; item: Iimg }> = ({
  item,
  children,
  marginSpace = 0
}) => {
  return (
    <Flex
      flexDirection="row"
      bg={'#ababab'}
      py={[2]}
      px={[3]}
      my={[marginSpace]}
      alignItems="center"
      css={{ height: '100px', borderBottom: '1px solid #999' }}
    >
      <Box width={[1 / 2]} flex={'1 0 0'}>
        {children}
      </Box>
      <Box width={[1 / 2]} flex={'1 0 0'}>
        <PaintingHolder
          img={item.img}
          largeImg={item.img}
          title={item.title}
          dims={item.dims}
          size={'small'}
        />
      </Box>
    </Flex>
  )
}

export default PaintingCollectionHeading

import React, { SFC } from 'react'
import Page from './Page'
import { Flex, Box } from 'rebass'
import PaintingCarousel from './components/PaintingCarousel'
import { RouteComponentProps } from 'react-router'
import { Link, withRouter } from 'react-router-dom'
import { imgsPrev, imgs2019, Iimg } from './components/ImgLists'
import PaintingHolder from './components/PaintingHolder'

type PathParamsType = {
  year?: string
}
type PropsType = RouteComponentProps<PathParamsType>

const Paintings: SFC<PropsType> = props => {
  const is2019 =
    props.match.params &&
    props.match.params.year &&
    props.match.params.year.indexOf('recent') > -1
  const imgs: Iimg[] = is2019 ? imgs2019 : imgsPrev
  const isSelectionScreen = !(props.match.params && props.match.params.year)
  return (
    <Page>
      <Flex flexWrap={['wrap', 'wrap', 'nowrap']} flexDirection="column">
        <Box bg="#ccc" p={[2]}>
          <Flex flexWrap={['wrap', 'wrap', 'nowrap']} flexDirection="row">
            {isSelectionScreen && (
              <Box
                width={[1, 1, 3 / 10]}
                mt={[2, 2, 4]}
                ml={[2, 2, 0]}
                mr={[2, 2, 2]}
                order={2}
              >
                <PaintingHolder
                  img={require('./images/2019/9.jpg')}
                  largeImg={require('./images/2019/9.jpg')}
                  title={'Beyond the line'}
                  dims={'40 x 40cm'}
                />
              </Box>
            )}

            <Box width={[1, 1, 7 / 10]} order={1} mb={[5]} ml={[2]}>
              <h2>Select a collection:</h2>
              <ul style={{ listStyleType: 'circle' }}>
                <li>
                  <h3>
                    <Link to="/paintings/recent">More recent paintings</Link>
                  </h3>
                </li>
                <li>
                  <h3>
                    <Link to="/paintings/other">Other paintings</Link>
                  </h3>
                </li>
              </ul>
            </Box>
          </Flex>
        </Box>
        {!isSelectionScreen && (
          <Box width={[1]} order={1} mb={[5]}>
            <PaintingCarousel
              pageTitle={is2019 ? 'More recent paintings' : 'Other paintings'}
              imgs={imgs}
            />
          </Box>
        )}
      </Flex>
    </Page>
  )
}

export default withRouter(Paintings)

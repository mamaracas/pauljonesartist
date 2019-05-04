import React, { SFC } from 'react'
import Page from './Page'
import { Flex, Box } from 'rebass'
import PaintingCarousel from './components/PaintingCarousel'
import { RouteComponentProps } from 'react-router'
import { Link, withRouter } from 'react-router-dom'
import { imgsPrev, imgs2019, Iimg, imgsApr08 } from './components/ImgLists'
import PaintingHolder from './components/PaintingHolder'

type PathParamsType = {
  collection?: string
}
type PropsType = RouteComponentProps<PathParamsType>

const selectRandomImg: (imgs: Iimg[]) => Iimg = imgs => {
  return imgs2019[Math.floor(Math.random() * imgs.length)]
}

const selectImgCollection: (collection?: string) => Iimg[] = collection => {
  switch (collection) {
    case 'other':
      return imgsPrev
    case 'apr08':
      return imgsApr08
    default:
      return imgs2019
  }
}

const Paintings: SFC<PropsType> = props => {
  const isLatestCollection =
    props.match.params &&
    props.match.params.collection &&
    props.match.params.collection.indexOf('recent') > -1
  const whichCollection = props.match.params && props.match.params.collection
  const imgs = selectImgCollection(whichCollection)
  const isSelectionScreen = !(
    props.match.params && props.match.params.collection
  )
  const randomImg = selectRandomImg(imgs)
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
                  img={randomImg.img}
                  largeImg={randomImg.img}
                  title={randomImg.title}
                  dims={randomImg.dims}
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
                    {!isSelectionScreen && !isLatestCollection && (
                      <ul>
                        <li>
                          <h4>
                            <Link to="/paintings/apr08">April 2008</Link>
                          </h4>
                        </li>
                      </ul>
                    )}
                  </h3>
                </li>
              </ul>
            </Box>
          </Flex>
        </Box>

        {!isSelectionScreen && (
          <Box width={[1]} order={1} mb={[5]}>
            <PaintingCarousel
              pageTitle={
                isLatestCollection ? 'More recent paintings' : 'Other paintings'
              }
              imgs={imgs}
            />
          </Box>
        )}
      </Flex>
    </Page>
  )
}

export default withRouter(Paintings)

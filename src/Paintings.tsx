import React, { SFC, useRef } from 'react'
import Page from './Page'
import { Flex, Box, BoxProps } from 'rebass'
import PaintingCarousel from './components/PaintingCarousel'
import { RouteComponentProps } from 'react-router'
import { Link, withRouter } from 'react-router-dom'
import { imgsPrev, imgs2019, Iimg, imgsApr08 } from './components/ImgLists'
import PaintingHolder from './components/PaintingHolder'
import styled from 'styled-components/macro'
import PaintingCollectionHeading from './components/PaintingCollectionHeading'
import Collapsible from 'react-collapsible'

type PathParamsType = {
  collection?: string
}
type PropsType = RouteComponentProps<PathParamsType>

const selectRandomImg: (imgs: Iimg[]) => Iimg = imgs => {
  return imgs[Math.floor(Math.random() * imgs.length)]
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
  const titleRef = useRef<HTMLElement | null>(null)
  const isLatestCollection =
    props.match.params &&
    props.match.params.collection &&
    props.match.params.collection.indexOf('recent') > -1
  const whichCollection = props.match.params && props.match.params.collection
  const imgs = selectImgCollection(whichCollection)
  const isSelectionScreen = !(
    props.match.params && props.match.params.collection
  )
  const randomImg = selectRandomImg(imgs2019)
  const scrollToTitleRef = () => {
    window.scrollTo(
      0,
      (titleRef &&
        titleRef.current &&
        titleRef.current.getBoundingClientRect().top) ||
        0
    )
  }

  return (
    <Page>
      <Flex flexWrap={['wrap', 'wrap', 'nowrap']} flexDirection="column">
        <Box bg="#ccc" p={[2]}>
          <Flex flexWrap={['wrap', 'wrap', 'nowrap']} flexDirection="row">
            {isSelectionScreen && (
              <Box width={[1, 1, 3 / 10]} order={2} m={[5]}>
                <PaintingHolder
                  img={randomImg.img}
                  largeImg={randomImg.img}
                  title={randomImg.title}
                  dims={randomImg.dims}
                />
              </Box>
            )}

            <Box width={[1, 1, 5 / 10]} order={1} mb={[5]} mr={[2]}>
              <h2>Select a collection:</h2>
              <PaintingCollectionHeading
                marginSpace={2}
                item={{
                  ...selectRandomImg(imgs2019),
                  title: '',
                  dims: ''
                }}
              >
                <Link to="/paintings/recent" onClick={scrollToTitleRef}>
                  Most recent
                </Link>
              </PaintingCollectionHeading>

              <Collapsible trigger={'Other collections'} open={true}>
                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsPrev),
                    title: '',
                    dims: ''
                  }}
                >
                  <Link to="/paintings/other" onClick={scrollToTitleRef}>
                    2013
                  </Link>
                </PaintingCollectionHeading>

                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsApr08),
                    title: '',
                    dims: ''
                  }}
                >
                  <Link to="/paintings/apr08" onClick={scrollToTitleRef}>
                    April 2008
                  </Link>
                </PaintingCollectionHeading>
              </Collapsible>
            </Box>
          </Flex>
        </Box>

        {!isSelectionScreen && (
          <Box width={[1]} order={1} mb={[5]} ref={titleRef}>
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

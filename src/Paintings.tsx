import React, { SFC, useRef, useEffect } from 'react'
import Page from './Page'
import { Flex, Box, Text } from 'rebass'
import PaintingCarousel from './components/PaintingCarousel'
import { RouteComponentProps } from 'react-router'
import { Link, withRouter } from 'react-router-dom'
import {
  imgsPrev,
  imgs2019,
  Iimg,
  imgsApr08,
  imgsAug07,
  imgsCranborne2013
} from './components/ImgLists'
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
    case 'aug07':
      return imgsAug07
    case 'cran13':
      return imgsCranborne2013
    default:
      return imgs2019
  }
}

const getPageTitle: (collection?: string) => string = collection => {
  switch (collection) {
    case 'other':
      return 'Other Collection'
    case 'apr08':
      return 'April 2008 Collection'
    case 'aug07':
      return 'August 2007 Collection'
    case 'cran13':
      return 'Cranborne 2013 Collection'
    default:
      return 'Most recent Collection'
  }
}

const Paintings: SFC<PropsType> = props => {
  const titleRef = useRef<HTMLElement | null>(null)
  const whichCollection = props.match.params && props.match.params.collection
  useEffect(() => {
    scrollToTitleRef()
  }, [props.match.params.collection])
  const imgs = selectImgCollection(whichCollection)
  const isSelectionScreen = !(
    props.match.params && props.match.params.collection
  )
  const randomImg = selectRandomImg(imgs2019)
  const pageTitle = getPageTitle(whichCollection)
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
                <Link to="/paintings/recent">
                  <PaintingHolder
                    img={randomImg.img}
                    largeImg={randomImg.img}
                    title={randomImg.title}
                    dims={randomImg.dims}
                    showModal={false}
                  />
                </Link>
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
                to="/paintings/recent"
              >
                <Text>Most recent</Text>
              </PaintingCollectionHeading>

              <Collapsible trigger={'Other collections'} open={false}>
                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsPrev),
                    title: '',
                    dims: ''
                  }}
                  to="/paintings/other"
                >
                  Other
                </PaintingCollectionHeading>

                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsCranborne2013),
                    title: '',
                    dims: ''
                  }}
                  to="/paintings/cran13"
                >
                  Cranborne 2013
                </PaintingCollectionHeading>
                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsApr08),
                    title: '',
                    dims: ''
                  }}
                  to="/paintings/apr08"
                >
                  April 2008
                </PaintingCollectionHeading>
                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsAug07),
                    title: '',
                    dims: ''
                  }}
                  to="/paintings/aug07"
                >
                  August 2007
                </PaintingCollectionHeading>
              </Collapsible>
            </Box>
          </Flex>
        </Box>

        {!isSelectionScreen && (
          <Box width={[1]} order={1} mb={[5]} ref={titleRef}>
            <PaintingCarousel pageTitle={pageTitle} imgs={imgs} />
          </Box>
        )}
      </Flex>
    </Page>
  )
}

export default withRouter(Paintings)

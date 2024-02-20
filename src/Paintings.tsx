import React, { useRef, useEffect } from "react";
import Page from "./Page";
import { Flex, Box, Text } from "rebass";
import PaintingCarousel from "./components/PaintingCarousel";
import { RouteComponentProps } from "react-router";
import { Link, withRouter } from "react-router-dom";
import {
  imgsPrev,
  imgs2019,
  Iimg,
  imgsApr08,
  imgsAug07,
  imgsCranborne2013,
  imgsOutOfTheBlue2013,
  imgsStones2013,
  imgsJan2011,
  imgsEarlier,
} from "./components/ImgLists";
import PaintingHolder from "./components/PaintingHolder";
import styled from "styled-components/macro";
import PaintingCollectionHeading from "./components/PaintingCollectionHeading";
import Collapsible from "react-collapsible";
import { delay } from "q";

type PathParamsType = {
  collection?: string;
};
type PropsType = RouteComponentProps<PathParamsType>;

const selectRandomImg: (imgs: Iimg[]) => Iimg = (imgs) => {
  return imgs[Math.floor(Math.random() * imgs.length)];
};

const selectImgCollection: (collection?: string) => Iimg[] = (collection) => {
  switch (collection) {
    case "other":
      return imgsPrev;
    case "apr08":
      return imgsApr08;
    case "aug07":
      return imgsAug07;
    case "cran13":
      return imgsCranborne2013;
    case "outblue13":
      return imgsOutOfTheBlue2013;
    case "stones13":
      return imgsStones2013;
    case "jan11":
      return imgsJan2011;
    case "earlier":
      return imgsEarlier;
    default:
      return imgs2019;
  }
};

const getPageTitle: (collection?: string) => string = (collection) => {
  switch (collection) {
    case "other":
      return "Other Collection";
    case "apr08":
      return "April 2008 Collection";
    case "aug07":
      return "August 2007 Collection";
    case "cran13":
      return "Cranborne 2013 Collection";
    case "outblue13":
      return "Out of the Blue 2013 Collection";
    case "stones13":
      return "Stones 2013 Collection";
    case "jan11":
      return "January 2011 Collection";
    case "earlier":
      return "Earlier Collection";
    default:
      return "Most recent Collection";
  }
};

const Paintings = (props: PropsType) => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const whichCollection = props.match.params && props.match.params.collection;
  const isSelectionScreen = !(
    props.match.params && props.match.params.collection
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isSelectionScreen) scrollToTitleRef();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [isSelectionScreen, props.match.params.collection]);
  const imgs = selectImgCollection(whichCollection);
  const randomImg = selectRandomImg(imgs2019);
  const pageTitle = getPageTitle(whichCollection);
  const scrollToTitleRef = () => {
    window.scrollTo(
      0,
      (titleRef &&
        titleRef.current &&
        titleRef.current.getBoundingClientRect().top) ||
        0
    );
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Page>
      <Flex flexWrap={["wrap", "wrap", "nowrap"]} flexDirection="column">
        <Box bg="#ccc" p={[2]}>
          <Flex flexWrap={["wrap", "wrap", "nowrap"]} flexDirection="row">
            {isSelectionScreen && (
              <Box width={[1, 1, 3 / 10]} order={2} m={[5]}>
                <Link to="/paintings/recent">
                  <PaintingHolder
                    img={randomImg.img}
                    largeImg={randomImg.img}
                    title={randomImg.title}
                    dims={randomImg.dims}
                    showModal={false}
                    showZoom={false}
                  />
                </Link>
              </Box>
            )}

            <Box width={[1, 1, 7 / 10]} order={1} mb={[5]} mr={[2]}>
              <h2>Select a collection:</h2>
              <PaintingCollectionHeading
                marginSpace={2}
                item={{
                  ...selectRandomImg(imgs2019),
                  title: "",
                  dims: "",
                }}
                to="/paintings/recent"
              >
                <Text>Most recent</Text>
              </PaintingCollectionHeading>

              <Collapsible trigger={"Other collections"} open={false}>
                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsPrev),
                    title: "",
                    dims: "",
                  }}
                  to="/paintings/other"
                >
                  Other
                </PaintingCollectionHeading>

                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsCranborne2013),
                    title: "",
                    dims: "",
                  }}
                  to="/paintings/cran13"
                >
                  Cranborne 2013
                </PaintingCollectionHeading>

                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsStones2013),
                    title: "",
                    dims: "",
                  }}
                  to="/paintings/stones13"
                >
                  Stones 2013
                </PaintingCollectionHeading>
                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsOutOfTheBlue2013),
                    title: "",
                    dims: "",
                  }}
                  to="/paintings/outblue13"
                >
                  Out of the Blue 2013
                </PaintingCollectionHeading>
                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsJan2011),
                    title: "",
                    dims: "",
                  }}
                  to="/paintings/jan11"
                >
                  January 2011
                </PaintingCollectionHeading>
                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsApr08),
                    title: "",
                    dims: "",
                  }}
                  to="/paintings/apr08"
                >
                  April 2008
                </PaintingCollectionHeading>
                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsAug07),
                    title: "",
                    dims: "",
                  }}
                  to="/paintings/aug07"
                >
                  August 2007
                </PaintingCollectionHeading>
                <PaintingCollectionHeading
                  item={{
                    ...selectRandomImg(imgsEarlier),
                    title: "",
                    dims: "",
                  }}
                  to="/paintings/earlier"
                >
                  Earlier
                </PaintingCollectionHeading>
              </Collapsible>
            </Box>
          </Flex>
        </Box>
        <Box width={[1]} order={1} mb={[5]}>
          {!isSelectionScreen && (
            <PaintingCarousel pageTitle={pageTitle} imgs={imgs} />
          )}
        </Box>
        <div ref={titleRef}>
          <Box width={[1]} order={1}>
            {!isSelectionScreen && (
              <Box
                bg="#999"
                mb={[5]}
                p={[3]}
                css={{ cursor: "pointer" }}
                onClick={scrollToTop}
              >
                <h4 style={{ color: "white" }}>Back to Top ^</h4>
              </Box>
            )}
          </Box>
        </div>
      </Flex>
    </Page>
  );
};

export default withRouter(Paintings);

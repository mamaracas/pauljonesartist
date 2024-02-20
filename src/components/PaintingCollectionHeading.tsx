import React from "react";
import { Flex, Box } from "rebass";
import { Iimg } from "./ImgLists";
import PaintingHolder from "./PaintingHolder";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const PaintingCollectionHeading = ({ item, children, marginSpace = 0, to }) => {
  return (
    <Flex
      flexDirection="row"
      bg={"#ababab"}
      py={[2]}
      px={[3]}
      my={[marginSpace]}
      alignItems="center"
      css={{
        height: "100px",
        borderBottom: "1px solid #999",
        overflow: "hidden",
      }}
    >
      <Box width={[1 / 2]} flex={"1 0 0"}>
        <Link to={to}>{children}</Link>
      </Box>
      <Box width={[1 / 2]} flex={"1 0 0"}>
        <Link to={to}>
          <PaintingHolder
            img={item.img}
            largeImg={item.img}
            title={item.title}
            dims={item.dims}
            size={"small"}
            showModal={false}
            showZoom={false}
          />
        </Link>
      </Box>
    </Flex>
  );
};

export default PaintingCollectionHeading;

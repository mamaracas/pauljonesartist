import React, { useEffect } from "react";
import Page from "./Page";
import { Flex, Box, Button } from "rebass";
import { imgs2024 } from "./components/ImgLists";
import PaintingCarousel from "./components/PaintingCarousel";
import PaintingHolder from "./components/PaintingHolder";

const Home = () => {
  useEffect(() => {
    //load the latest gallery
    imgs2024.forEach((item) => {
      const img = new Image();
      img.onload = function () {
        console.log("loaded", img.src);
      };
      img.src = item.img;
    });
  }, []);
  return (
    <Page>
      <Flex flexWrap={["wrap"]} flexDirection="row" color={"white"}>
        <Box width={[1]} order={1} mb={[5]} p={4} backgroundColor={"#265845"}>
          <Flex flexWrap={["wrap"]} flexDirection="row">
            <Box width={[1, 1, 6 / 10]}>
              <h2 style={{ color: "white" }}>New & Recent Work 2024</h2>
              {/* <h3 style={{ color: "white" }}>
            2024 New Exhibition, The Sherborne - Dorset
          </h3>
          <h4 style={{ color: "white" }}>March 1st - April 6th 2024</h4> */}
              <Box mb={[3]}>
                <p>
                  You are invited to{" "}
                  <strong>view my latest paintings below</strong>
                </p>
                <p>If you are interested in buying, Please get in touch:</p>
              </Box>
              <Button backgroundColor={"#BF5731"}>
                <a
                  href={
                    "mailto:pauljonesglendaleart@hotmail.co.uk?subject=Latest Work 2024&body=[Purchase enquiry via website]"
                  }
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Reservation / Purchase Enquiry
                </a>
              </Button>
            </Box>
            <Box width={[1, 1, 3 / 10]} p={3} mr={[0, 4]}>
              <PaintingHolder
                key={`01`}
                img={require("./images/2024/01-sold.jpg")}
                largeImg={require("./images/2024/01.jpg")}
                title={""}
                dims={""}
                color="#000"
              />
            </Box>
          </Flex>
        </Box>
        <Box width={1} order={2}>
          <PaintingCarousel autoPlay={false} subTitle={""} imgs={imgs2024} />
        </Box>
      </Flex>
    </Page>
  );
};

export default Home;

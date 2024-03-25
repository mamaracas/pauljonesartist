import React, { useEffect } from "react";
import Page from "./Page";
import { Flex, Box, Button } from "rebass";
import { imgs2024 } from "./components/ImgLists";
import PaintingCarousel from "./components/PaintingCarousel";

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
        <Box width={[1]} order={1} mb={[5]} backgroundColor={"#265845"} p={4}>
          <h2 style={{ color: "white" }}>Paul Jones: Land Work</h2>
          <h3 style={{ color: "white" }}>
            2024 New Exhibition, The Sherborne - Dorset
          </h3>
          <h4 style={{ color: "white" }}>March 1st - April 6th 2024</h4>
          <Box mb={[3]}>
            <p>
              This is the inaugural exhibition of my recent paintings marking
              the superb refurbishment of 'The Sherborne', the town’s new venue
              for the arts.
            </p>
            <p>
              You are invited to <strong>view my paintings below</strong>, if
              you would like to enquire further about reserving and purchasing
              any of the paintings, please get in touch below:
            </p>
            {/* <p>
              If you'd like to find out more, please contact the gallery
              directly:{" "}
              <a href="mailto:hello@thesherborne.uk" style={{ color: "white" }}>
                hello@thesherborne.uk
              </a>
            </p> */}
          </Box>
          <Button backgroundColor={"#BF5731"}>
            <a
              href={
                "mailto:pauljonesglendaleart@hotmail.co.uk?subject=Land Work 2024&body=[Purchase enquiry via website]"
              }
              style={{ color: "white", textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              Reservation / Purchase Enquiry
            </a>
          </Button>
        </Box>
        <Box width={1} order={2}>
          <PaintingCarousel
            autoPlay={false}
            pageTitle={"Paul Jones: Land Work 2024"}
            subTitle={
              "The following carousel shows the paintings in the exhibition, click on an image to view a larger version, and to enquire further please use the options above"
            }
            imgs={imgs2024}
          />
        </Box>
      </Flex>
    </Page>
  );
};

export default Home;

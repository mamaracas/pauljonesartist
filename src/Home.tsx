import React, { useEffect } from "react";
import Page from "./Page";
import { Flex, Box, Button } from "rebass";
import { Link } from "react-router-dom";
import { imgs2019 } from "./components/ImgLists";
import PaintingList from "./components/PaintingList";
import PaintingHolder from "./components/PaintingHolder";

const Home = () => {
  useEffect(() => {
    //load the latest gallery
    imgs2019.forEach((item) => {
      const img = new Image();
      img.onload = function () {
        console.log("loaded", img.src);
      };
      img.src = item.img;
    });
  }, []);
  return (
    <Page>
      <Flex flexWrap={["wrap", "wrap", "nowrap"]} flexDirection="row-reverse">
        <Box width={[1]} order={1} mb={[5]} p={4} backgroundColor={"#265845"}>
          <Flex flexWrap={["wrap"]} flexDirection="row">
            <Box width={[1, 1, 3 / 10]} p={3} mr={[0, 4]}>
              <PaintingHolder
                key={`01`}
                img={require("./images/2024/01.jpg")}
                largeImg={require("./images/2024/01.jpg")}
                title={"LIGHTWATER"}
                dims={"32x40cm"}
                color="white"
              />
            </Box>
            <Box width={[1, 1, 6 / 10]}>
              <h1 style={{ color: "white", fontSize: "36px" }}>
                Paul Jones: Land Work
              </h1>
              <h2 style={{ color: "white" }}>2024 New Exhibition</h2>
              <h3 style={{ color: "white" }}>The Sherborne - Dorset</h3>
              <h4 style={{ color: "white" }}>March 1st - April 6th 2024</h4>
              <Button backgroundColor={"#BF5731"}>
                <Link
                  to={"/land-work"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  View paintings and find out more
                </Link>
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex flexWrap={["wrap", "wrap", "nowrap"]} flexDirection="row-reverse">
        <Box
          width={[1, 1, 3 / 10]}
          mt={[2, 2, 4]}
          ml={[2, 2, 0]}
          mr={[2, 2, 5]}
          order={3}
        >
          <PaintingList count={4} />
        </Box>
        <Box width={[1, 1, 7 / 10]} order={2} mb={[5]}>
          <h2>
            "As a painter, Jones shows knowledge, strength, sensitivity and
            insight"
          </h2>
          <p className="quote">Vivienne Light, Canterton Books</p>
          <br />
          <p>
            Paul Jones was a scholarship student at Bath Academy of Art, Corsham
            at a time when Adrian Heath, Robyn Denny and Howard Hodgkin were his
            tutors. After achieving his National Diploma in Design he taught Art
            and Pottery at Bournville Grammar School and in 1969 was elected a
            Fellow of the Royal Society of Arts.
          </p>
          <p>
            A career change to Graphic Design led to him relocating to Dorset
            where he had his first major exhibition in 1979. The move to Dorset
            provided his first encounter with the chalk laden downland and
            coastline that continues to inspire much of his work.{" "}
            <b>
              <i>
                'His subtle work seems to get right to the heart of the ancient
                landscape...'
              </i>
            </b>{" "}
            (Exhibition Review, Fanny Charles).
          </p>
          <p>
            Prolific by nature, he exhibits nationally and, along with numerous
            private patrons, has work held in collections at Eldridge Pope,
            Longleat House, Dorset Council, 3Ms and UNESCO. He is married and he
            and Julie have a son Matthew and a daughter Sophie.
          </p>
        </Box>
      </Flex>
    </Page>
  );
};

export default Home;

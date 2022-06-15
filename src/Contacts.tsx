import React, { SFC } from "react";
import Page from "./Page";
import PaintingHolder from "./components/PaintingHolder";
import { Flex, Box } from "rebass";
import styled from "styled-components";

const StyledLi = styled.li`
  margin: 5px 0 40px;
`;
const Contacts: SFC = () => (
  <Page>
    <Flex flexWrap={["wrap", "wrap", "nowrap"]} flexDirection="row-reverse">
      <Box
        width={[1, 1, 3 / 10]}
        mt={[2, 2, 4]}
        ml={[2, 2, 0]}
        mr={[2, 2, 5]}
        order={2}
      >
        <PaintingHolder
          img={require("./images/Contacts_Landwork.jpg")}
          largeImg={require("./images/lrg/Landwork.jpg")}
          title={"Landwork"}
          dims={"40 x 40cm"}
        />
        <PaintingHolder
          img={require("./images/Contacts_Linework.jpg")}
          largeImg={require("./images/lrg/Linework.jpg")}
          title={"Linework"}
          dims={"36 x 36cm"}
        />
      </Box>
      <Box width={[1, 1, 7 / 10]} order={1} mb={[5]}>
        <Box mb={[3]}>
          <h2>Contacts</h2>
          <ul>
            Paul Jones
            <StyledLi>
              <a href="mailto:pj@pauljonesartist.co.uk">
                pj@pauljonesartist.co.uk
              </a>
            </StyledLi>
          </ul>
        </Box>
        <Box mb={[3]}>
          <ul>
            Canterton Books
            <StyledLi>
              <a
                href="http://www.cantertonbooks.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.cantertonbooks.co.uk
              </a>
            </StyledLi>
          </ul>
        </Box>
        <Box mb={[3]}>
          <ul>
            Evolver
            <StyledLi>
              <a
                href="http://www.evolver.org.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.evolver.org.uk
              </a>
            </StyledLi>
          </ul>
        </Box>
        <Box mb={[3]}>
          <ul>
            Website Design
            <StyledLi>
              <a
                href="http://www.dreamm.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.dreamm.co.uk
              </a>
            </StyledLi>
          </ul>
        </Box>
      </Box>
    </Flex>
  </Page>
);

export default Contacts;

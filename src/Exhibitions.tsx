import React, { SFC } from "react";
import Page from "./Page";
import PaintingHolder from "./components/PaintingHolder";
import { Flex, Box } from "rebass";

const Exhibitions: SFC = () => (
  <Page>
    <Flex
      flexWrap={["wrap", "wrap", "nowrap"]}
      flexDirection="row-reverse"
      className="exhibitions"
    >
      <Box
        width={[1, 1, 3 / 10]}
        mt={[2, 2, 4]}
        ml={[2, 2, 0]}
        mr={[2, 2, 5]}
        order={2}
      >
        <PaintingHolder
          img={require("./images/Exhibitions_AlteredImage.jpg")}
          largeImg={require("./images/lrg/AlteredImage.jpg")}
          title={"Altered image"}
          dims={"60 x 60cm"}
        />
        <PaintingHolder
          img={require("./images/Exhibitions_ClearlySee.jpg")}
          largeImg={require("./images/lrg/ClearlySee.jpg")}
          title={"Clearly"}
          dims={"60 x 60cm"}
        />
        <PaintingHolder
          img={require("./images/Exhibitions_FieldofVision.jpg")}
          largeImg={require("./images/lrg/FieldOfVision.jpg")}
          title={"Field of vision"}
          dims={"60 x 60cm"}
        />
        <PaintingHolder
          img={require("./images/Exhibitions_Landform3.jpg")}
          largeImg={require("./images/lrg/Landform3.jpg")}
          title={"Landform 3"}
          dims={"36 x 36cm"}
        />
        <PaintingHolder
          img={require("./images/Exhibitions_Landmark2.jpg")}
          largeImg={require("./images/lrg/Landmark2.jpg")}
          title={"Landmark 3"}
          dims={"36 x 36cm"}
        />
      </Box>
      <Box width={[1, 1, 7 / 10]} order={1} mb={[5]}>
        <Box mb={[3]}>
          <h2>Selected Exhibitions</h2>
          <ul className="bold">
            2021
            <li>Firecroft, Guildford</li>
            <li>Bettles Gallery</li>
          </ul>
          <ul className="bold">
            2020
            <li>
              <a
                href="https://sladersyard.wordpress.com/in-the-minds-eye/"
                target="_blank"
                rel="noopener noreferrer"
              >
                In the Mind's Eye
              </a>
              , Sladers Yard Gallery
            </li>
          </ul>
          <ul className="bold">
            2019
            <li>Young Gallery, Salisbury</li>
          </ul>
          <ul className="bold">
            2017
            <li>Bettles Gallery</li>
          </ul>
          <ul className="bold">
            2016
            <li>Bettles Gallery</li>
            <li>Fircroft, Guildford</li>
          </ul>
          <ul className="bold">
            2015
            <li>
              <a
                href="https://sladersyard.wordpress.com/paul-jones-and-akiko-hirai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Time Lines
              </a>
              , Sladers Yard Gallery
            </li>
          </ul>

          <ul className="bold">
            2013
            <li>Sladers Yard Gallery</li>
            <li>Fircroft, Guildford</li>
          </ul>

          <ul className="bold">
            2012
            <li>Salisbury County Museum</li>
            <li>'Circles & Tangents'</li>
            <li>Appledore Arts Festival</li>
            <li>Biscuit Factory, Newcastle</li>
          </ul>
          <ul className="bold">
            2011
            <li>Dorset County Museum</li>
            <li>Dorchester, Dorset</li>
            <li>Sladers Yard Gallery</li>
            <li>Fircroft, Albury Heath</li>
            <li>Guildford, Surrey</li>
            <li>Taunton Hospital</li>
            <li>Bettles Gallery</li>
          </ul>

          <ul className="bold">
            2010
            <li>AAF London - Geoffrey Bertram</li>
            <li>Sladers Yard Gallery</li>
            <li>Bridport, Dorset</li>
          </ul>

          <ul className="bold">
            2009
            <li>The Biscuit Factory, Newcastle</li>
            <li>AAF London - Buscuit Factory</li>
          </ul>

          <ul className="bold">
            2008
            <li>The Biscuit Factory, Newcastle</li>
            <li>Bettles Gallery, Ringwood, Hampshire</li>
          </ul>

          <ul className="bold">
            2007
            <li>Bournemouth University</li>
            <li>Innocent Fine Art, Bristol</li>
            <li>Bettles Gallery, Ringwood, Hampshire</li>
          </ul>

          <ul className="bold">
            2006
            <li>Brewhouse, Taunton</li>
            <li>Maltby Art, Winchester</li>
            <li>Sherborne House, Dorset</li>
            <li>Atrium Gallery, Bournemouth University</li>
          </ul>

          <ul className="bold">
            2005
            <li>Six Chapel Row, Bath</li>
            <li>Bettles Gallery, Ringwood, Hampshire</li>
            <li>London Art Fair, Islington (Edgarmodern)</li>
            <li>Edgarmodern Gallery, Bath</li>
          </ul>

          <ul className="bold">
            2004
            <li>Edgarmodern Gallery, Bath</li>
            <li>Burton Municipal Gallery, Bideford</li>
            <li>Bournemouth University Art Loans</li>
            <li>Sherborne House, Dorset</li>
            <li>AAF London - Edgarmodern Gallery</li>
          </ul>

          <ul className="bold">
            2003
            <li>Maltby Art, Winchester, Hampshire</li>
            <li>Old Warehouse Gallery, Dorchester</li>
            <li>AAF London - Thomas Henry Fine Art</li>
            <li>Bettles Gallery, Ringwood, Hampshire</li>
          </ul>

          <ul className="bold">
            2002
            <li>Maltby Art, Winchester, Hampshire.</li>
            <li>AAF London - Gordon Hepworth and Thomas Henry Fine Art</li>
            <li>RCA 'Works on Paper', Thomas Henry</li>
            <li>Old Warehouse Gallery, Dorchester</li>
            <li>Four Seasons Gallery, Wimborne, Dorset</li>
          </ul>

          <ul className="bold">
            2001
            <li>Bettles Gallery, Ringwood, Hampshire</li>
            <li>Old Warehouse Gallery, Dorchester</li>
            <li>Four Seasons Gallery, Wimborne, Dorset</li>
            <li>AAF London - Thomas Henry Fine Art</li>
          </ul>

          <ul className="bold">
            1978-2001
            <li>Castlegate Gallery, Cockermouth, Cumbria</li>
            <li>Four Seasons Gallery, Wimborne, Dorset</li>
            <li>'Best of Dorset' Upton House, Poole</li>
            <li>The Arts Centre, Poole, Dorset</li>
            <li>Orchard Gallery, Bournemouth</li>
          </ul>
        </Box>
        <Box mb={[3]}>
          <h2>Corporate Collections</h2>

          <ul className="bold">
            <li>Eldridge Pope plc</li>
            <li>Longleat Estate</li>
            <li>Dorset County Council</li>
            <li>Dorset Tourism</li>
            <li>Brooklyn Westbrick</li>
            <li>Beaulieu Estate</li>
            <li>Hall & Woodhouse Ltd</li>
            <li>IPL Limited UK</li>
            <li>UNESCO Paris</li>
            <li>3Ms UK</li>
          </ul>
        </Box>
        <Box mb={[3]}>
          <h2>Publications</h2>

          <ul className="bold">
            <li>'Circles & Tangents'. Canterton Books 2011.</li>
          </ul>

          <ul className="bold">
            <li>'Overview'. Book by Paul Jones, 2010.</li>
          </ul>

          <ul className="bold">
            <li>
              'Overview' Review,
              <br />
              Professor Simon Olding and Feature in
              <br />
              Evolver Arts Magazine, 2010.
            </li>
          </ul>

          <ul className="bold">
            <li>
              'Paintings in Public Ownership'. PCF.
              <br />
              Dorset 2009.
            </li>
          </ul>

          <ul className="bold">
            <li>
              Bournemouth University Art Loans
              <br />
              Catalogues, 2004 & 2007.
            </li>
          </ul>

          <ul className="bold">
            <li>'Signatures'. Book by Paul Jones, 2000.</li>
          </ul>

          <ul className="bold">
            <li>
              Dorset Life, Dorset Magazines & Bournemouth Echo.
              <br />
              Misc. features, reviews etc.
            </li>
          </ul>
        </Box>
      </Box>
    </Flex>
  </Page>
);

export default Exhibitions;

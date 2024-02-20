import React from "react";
import Page from "./Page";
import PaintingHolder from "./components/PaintingHolder";
import { Flex, Box } from "rebass";

const Contacts = () => (
  <Page>
    <Flex flexWrap={["wrap", "wrap", "nowrap"]} flexDirection="row">
      <Box width={[1, 1, 7 / 10]} order={1} mb={[5]}>
        <Box mb={[3]}>
          <h2>OVERVIEW</h2>
          <h5>Paul Jones 2010</h5>
          <p>
            In this, his second book, Paul Jones has brought together a
            selection of his paintings, drawings and poetry into a comprehensive
            'Overview' of the last four decades. His paintings are informed by
            fragments of history and layered in time. He creates terrains strewn
            with uncompromising complex textures alongside contrasting areas of
            calm smoothness. Within these pages are landscapes which evolve from
            within the painter's mind, yet are informed by the spirit and sense
            of place. With 149 full colour images of his paintings, plus
            drawings, poetry and a comprehensive text, this is a record of an
            artist who has committed himself to creating thoughtful,
            contemplative and inspirational paintings founded in his love of the
            English landscape.
          </p>
          <p>
            'Overview' is a 200 page, 25cm x 30cm hardback now available through
            the publisher, Canterton Books or through the author. Please refer
            to the Contacts page for details.
          </p>
        </Box>
        <Box mb={[3]}>
          <h2>Review</h2>
          <h5>
            by Professor Simon Olding, University for the Creative Arts, Surrey
          </h5>
          <p>
            In my book, any contribution to the literature of the contemporary
            visual arts in the South West of England is a good thing. It is a
            fragile and occasionally hostile place for the arts, with galleries
            closing in the public and private sectors and the fate of others
            perhaps in the balance. Dorset is a county with a remarkable recent
            history in painting and very few public places left in which to see
            it. So the place of text and image is ever more vital.
          </p>
          <p>
            With this in mind, a sturdy and weighty work such as Overview: the
            paintings, poetry and drawings of Paul Jones is to be welcomed into
            the still sparse canon. There is a lot to be savoured here. There
            are fine images, an abundance of them in fact. There is the artist's
            own self-penned story (a foundation for any reasonable critical
            analysis). His voice permeates the book: describing the normality
            and the exceptions of the artist's life: the ordinary walks that
            lead to extraordinary paintings. There are short, independent texts
            by respected writers in this field, (Vivienne Light and Fiona
            Robinson) and these are crucial, astute additions to the narrative
            mix.
          </p>
          <p>
            Paul Jones is at his best as an artist when he looks underneath the
            surface of place; or down onto it as if in a kind of static flight.
            In doing so, he relinquishes formulaic descriptions for an earthy
            and sometimes even mystical symbolism: a gathering of magnetic
            shapes and eroded surfaces in a neo-romantic assemblage. These
            places seem to evince the pull of geographic as well as philosophic
            forces, as if a place is compounded of its ancient pasts, stratified
            by deep time. Jones will magnify a gleaming micaceous chip into a
            landscape of its own; or hover alongside a Dorset cliff face and
            find abstract pattern from massive rock formations.
          </p>
          <p>
            This is an art respectful of the geography of remarkable places,
            often at the edge of cliff and sea, windswept in its mood. Its place
            is within a British neo romantic tradition of painting, at its best
            it hovers between representation and abstraction. Paul Jones has
            painted compellingly in this terrain, and the book is a fine
            pictorial account particularly of his mature work of the past ten or
            fifteen years.
          </p>
          <p>
            Paul Jones is a patient and often scrupulous observer of place: a
            lyrical geographer with an eye to the antiquity and markings of
            landscape. He expresses the poetry of the Dorset landscape and the
            unique interplay of light on chalk. Canterton Books under the
            patient and gentle guidance of Vivienne Light has added a notable
            volume to the literature of the contemporary visual arts of the
            South West. It made me feel that the time is right for an extensive
            and independent survey of the field and a major public exhibition.
            The art of Paul Jones would play a part in that commanding story.
          </p>
        </Box>
        <Box mb={[3]}>
          <p className="quote">
            <i>
              Professor Simon Olding
              <br />
              University for the Creative Arts
              <br />
              Farnham, Surrey.
            </i>
          </p>
        </Box>
        <Box mb={[3]}>
          <p>
            "These paintings are born out of time and heat, his extraordinary
            making process replaying the creation through destruction of the
            ancient landscape which is his subject".
          </p>
          <p className="quote">
            <i>Fiona Robinson, 'Fifty Wessex Artists', Evolver Books. 2006</i>
          </p>
        </Box>
      </Box>
      <Box
        width={[1, 1, 3 / 10]}
        mt={[2, 2, 4]}
        mr={[2, 2, 0]}
        ml={[2, 2, 5]}
        order={2}
      >
        <PaintingHolder
          img={require("./images/Overview_bookCover.jpg")}
          largeImg={require("./images/lrg/Overview_bookCover.jpg")}
          title={"OVERVIEW 2010"}
          dims={"Book cover"}
          size={"small"}
        />
        <PaintingHolder
          img={require("./images/Overview_greencliff.jpg")}
          largeImg={require("./images/lrg/Overview_greencliff.jpg")}
          title={"Greencliff"}
          dims={"60 x 60cm"}
          size={"small"}
        />
        <PaintingHolder
          img={require("./images/Overview_revealedLines.jpg")}
          largeImg={require("./images/lrg/Overview_revealedLines.jpg")}
          title={"Revealed lines"}
          dims={"Example page"}
          size={"small"}
        />
        <PaintingHolder
          img={require("./images/Overview_rockfall.jpg")}
          largeImg={require("./images/lrg/Overview_rockfall.jpg")}
          title={"Rockfall"}
          dims={"76 x 100cm"}
          size={"small"}
        />
        <PaintingHolder
          img={require("./images/Overview_Beyondthesurface.jpg")}
          largeImg={require("./images/lrg/Overview_Beyondthesurface.jpg")}
          title={"Beyond the surface"}
          dims={"46 x 46cm"}
          size={"small"}
        />
        <PaintingHolder
          img={require("./images/Overview_Holdthelight.jpg")}
          largeImg={require("./images/lrg/Overview_Holdthelight.jpg")}
          title={"Hold the light"}
          dims={"60 x 60cm"}
          size={"small"}
        />
        <PaintingHolder
          img={require("./images/Overview_EnclosedLandform.jpg")}
          largeImg={require("./images/lrg/Overview_EnclosedLandform.jpg")}
          title={"Enclosed landform"}
          dims={"51 x 36cm"}
          size={"small"}
        />
      </Box>
    </Flex>
  </Page>
);

export default Contacts;

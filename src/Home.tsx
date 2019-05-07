import React, { SFC, useEffect } from 'react'
import Page from './Page'
import { Flex, Box } from 'rebass'
import { imgs2019, Iimg } from './components/ImgLists'
import PaintingList from './components/PaintingList'

const Home: SFC = () => {
  useEffect(() => {
    //load the latest gallery
    imgs2019.forEach(item => {
      const img = new Image()
      img.onload = function() {
        console.log('loaded', img.src)
      }
      img.src = item.img
    })
  }, [])
  return (
    <Page>
      <Flex flexWrap={['wrap', 'wrap', 'nowrap']} flexDirection="row-reverse">
        <Box
          width={[1, 1, 3 / 10]}
          mt={[2, 2, 4]}
          ml={[2, 2, 0]}
          mr={[2, 2, 5]}
          order={2}
        >
          <PaintingList count={4} />
          {/* <PaintingHolder
            img={require('./images/Home_Miles_Ahead.jpg')}
            largeImg={require('./images/lrg/MilesAhead.jpg')}
            title={'Miles Ahead'}
            dims={'50 x 46cm'}
          />
          <PaintingHolder
            img={require('./images/Home_FieldOfVision.jpg')}
            largeImg={require('./images/lrg/FieldOfVision.jpg')}
            title={'Field of Vision'}
            dims={'60 x 60cm'}
          />
          <PaintingHolder
            img={require('./images/Home_Outland.jpg')}
            largeImg={require('./images/lrg/Outland.jpg')}
            title={'Outland'}
            dims={'36 x 36cm'}
          />
          <PaintingHolder
            img={require('./images/Home_BeingThere.jpg')}
            largeImg={require('./images/lrg/BeingThere.jpg')}
            title={'Being There'}
            dims={'36 x 36cm'}
          />
          <PaintingHolder
            img={require('./images/Home_Landmark2.jpg')}
            largeImg={require('./images/lrg/Landmark2.jpg')}
            title={'Landmark 2'}
            dims={'36 x 36cm'}
         />*/}
        </Box>
        <Box width={[1, 1, 7 / 10]} order={1} mb={[5]}>
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
            coastline that continues to inspire much of his work.{' '}
            <b>
              <i>
                'His subtle work seems to get right to the heart of the ancient
                landscape...'
              </i>
            </b>{' '}
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
  )
}

export default Home

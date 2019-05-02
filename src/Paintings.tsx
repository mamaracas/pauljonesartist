import React, { SFC, useState } from 'react'
import Page from './Page'
import { Flex, Box } from 'rebass'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useSpring, animated } from 'react-spring'
import Modal from 'react-modal'

import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import img7 from './images/7.jpg'
import img9 from './images/9.jpg'
import img10 from './images/10.jpg'
import img11 from './images/11.jpg'
import img12 from './images/12.jpg'
import img13 from './images/13.jpg'
import img14 from './images/14.jpg'
import img15 from './images/15.jpg'
import img16 from './images/16.jpg'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    animation: 'fadeIn 1s ease-in-out 1',
    animationFillMode: 'forwards',
    opacity: 0
  },
  overlay: { zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)' }
}

interface Iimg2019 {
  title: string
  dims: string
  img: string
}

const imgs2019: Iimg2019[] = [
  {
    title: 'Darkwater',
    dims: '40x40cms',
    img: require('./images/2019/15.jpg')
  },
  {
    title: 'End Elevation',
    dims: '48x30cm',
    img: require('./images/2019/1.jpg')
  },
  {
    title: 'Small Sanctuary',
    dims: '40x40cms',
    img: require('./images/2019/2.jpg')
  },
  {
    title: 'Coastal Division (Red)',
    dims: '40x50cms',
    img: require('./images/2019/3.jpg')
  },
  {
    title: 'Seacliff Return',
    dims: '76x50cm',
    img: require('./images/2019/4.jpg')
  },
  {
    title: 'Seacliff 2',
    dims: '50x40cm',
    img: require('./images/2019/5.jpg')
  },
  {
    title: 'Rockfall',
    dims: '40x50cm',
    img: require('./images/2019/6.jpg')
  },
  {
    title: 'Winged Wire',
    dims: '50x40cm',
    img: require('./images/2019/7.jpg')
  },
  {
    title: 'West Wing',
    dims: '50x60cms',
    img: require('./images/2019/8.jpg')
  },
  {
    title: 'Beyond the line',
    dims: '40x40cms',
    img: require('./images/2019/9.jpg')
  },
  {
    title: 'Beneath The Surface',
    dims: '50x76cm',
    img: require('./images/2019/10.jpg')
  },
  {
    title: 'Northcott Edge',
    dims: '48x30cm',
    img: require('./images/2019/11.jpg')
  },
  {
    title: 'Clearly See',
    dims: '29x57cm',
    img: require('./images/2019/12.jpg')
  },
  {
    title: 'Stonescape 2',
    dims: '29x57cm',
    img: require('./images/2019/13.jpg')
  },
  {
    title: 'C-Rock',
    dims: '40x40cm',
    img: require('./images/2019/14.jpg')
  },
  {
    title: 'Clearview',
    dims: '50x76cm',
    img: require('./images/2019/16.jpg')
  },
  {
    title: 'Hammer Rock 1',
    dims: '76x38cm',
    img: require('./images/2019/17.jpg')
  },
  {
    title: 'Hammer Rock 2',
    dims: '76x38cm',
    img: require('./images/2019/18.jpg')
  },
  {
    title: 'High Water',
    dims: '76x50cm',
    img: require('./images/2019/19.jpg')
  },
  {
    title: 'Changing Places',
    dims: '76x38cms',
    img: require('./images/2019/20.jpg')
  },
  {
    title: 'Lately Revealed',
    dims: '50x60cm',
    img: require('./images/2019/21.jpg')
  },
  {
    title: 'Wirework',
    dims: '40x40cm',
    img: require('./images/2019/22.jpg')
  },
  {
    title: 'Stone Alone',
    dims: '24x50cm',
    img: require('./images/2019/23.jpg')
  },
  {
    title: 'Up There',
    dims: '50x20cm',
    img: require('./images/2019/24.jpg')
  },
  {
    title: 'Split Elevation',
    dims: '50x60cm',
    img: require('./images/2019/25.jpg')
  },
  {
    title: 'High Light',
    dims: '50x50cm',
    img: require('./images/2019/26.jpg')
  },
  {
    title: 'Around Now',
    dims: '20x50cm',
    img: require('./images/2019/27.jpg')
  },
  {
    title: 'Time To Reflect',
    dims: '50x50cm',
    img: require('./images/2019/28.jpg')
  },
  {
    title: 'Freefall',
    dims: '50x50cm',
    img: require('./images/2019/29.jpg')
  },
  {
    title: 'Edge Return',
    dims: '23x38cm',
    img: require('./images/2019/30.jpg')
  },
  {
    title: 'Fracture Detail',
    dims: '40x40cm',
    img: require('./images/2019/31.jpg')
  },
  {
    title: 'Stonework',
    dims: '30x30cm',
    img: require('./images/2019/32.jpg')
  },
  {
    title: 'Drawing Near',
    dims: '27x38cm',
    img: require('./images/2019/33.jpg')
  },
  {
    title: 'End Fracture',
    dims: '30x30cm',
    img: require('./images/2019/34.jpg')
  },
  {
    title: 'Strata 1',
    dims: '30x30cm',
    img: require('./images/2019/35.jpg')
  },
  {
    title: 'Greenstack',
    dims: '50x35cm',
    img: require('./images/2019/36.jpg')
  },
  {
    title: 'Stone Edge 2',
    dims: '50x29cm',
    img: require('./images/2019/37.jpg')
  },
  {
    title: 'Strata 2',
    dims: '30x30cm',
    img: require('./images/2019/38.jpg')
  },
  {
    title: 'High Stack',
    dims: '30x30cm',
    img: require('./images/2019/39.jpg')
  },
  {
    title: 'mall Divisions',
    dims: '28x40cm',
    img: require('./images/2019/40.jpg')
  },
  {
    title: 'Lightwater',
    dims: '40x32cm',
    img: require('./images/2019/41.jpg')
  },
  {
    title: 'Ebb-Line Detail',
    dims: '32x60cm',
    img: require('./images/2019/42.jpg')
  },
  {
    title: 'Blue Stack',
    dims: '51x32cm',
    img: require('./images/2019/43.jpg')
  },
  {
    title: 'Lately So Near',
    dims: '50x50cm',
    img: require('./images/2019/44.jpg')
  },
  {
    title: 'Greencliff Return',
    dims: '30x30cm',
    img: require('./images/2019/45.jpg')
  },
  {
    title: 'C-Rock-2',
    dims: '80x140cm',
    img: require('./images/2019/46.jpg')
  }
]

const imgs = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16
]

const Paintings: SFC = () => {
  const [isOpen, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const props = useSpring({
    from: { opacity: 0, transform: 'translate(0,-40px)' },
    to: { opacity: 1, transform: 'translate(0,0)' },
    delay: 400,
    config: { mass: 1, tension: 230, friction: 20 }
  })

  return (
    <Page>
      <Flex flexWrap={['wrap', 'wrap', 'nowrap']} flexDirection="row-reverse">
        <Box width={[1]} order={1} mb={[5]}>
          <Box mb={[3]}>
            <h2>More recent Paintings</h2>
            <h5>{imgs2019[index].title}</h5>
            <h6>{imgs2019[index].dims}</h6>
            <Carousel
              dynamicHeight={true}
              showStatus={false}
              showIndicators={false}
              onClickThumb={i => {
                setIndex(i)
              }}
              onChange={i => {
                setIndex(i)
              }}
              selectedItem={index}
            >
              {imgs2019.map((item, i) => {
                const currentImg = imgs2019[index].img
                return (
                  <div key={i}>
                    <img
                      src={item.img}
                      alt="slideshow"
                      style={{ maxHeight: '90vh', width: 'auto' }}
                    />
                    {isOpen && (
                      <Modal
                        appElement={document.body}
                        isOpen={isOpen}
                        onRequestClose={() => {
                          setOpen(!isOpen)
                        }}
                        style={customStyles}
                      >
                        <animated.div style={props}>
                          <img
                            className="image"
                            src={currentImg}
                            onClick={() => {
                              setOpen(!isOpen)
                            }}
                            style={{
                              maxHeight: '90vh',
                              maxWidth: '90vw',
                              cursor: 'pointer'
                            }}
                            alt={'slideshow'}
                          />
                        </animated.div>
                      </Modal>
                    )}
                  </div>
                )
              })}
            </Carousel>
          </Box>
        </Box>
      </Flex>
    </Page>
  )
}

export default Paintings

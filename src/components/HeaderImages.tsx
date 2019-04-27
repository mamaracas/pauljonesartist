import React, { SFC } from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'

const StyledBox = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const imgs = [img1, img2, img3]

const HeaderImages: SFC = () => {
  return (
    <StyledBox>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        showArrows={false}
      >
        {imgs.map(img => (
          <div>
            <img src={img} />
          </div>
        ))}
      </Carousel>
    </StyledBox>
  )
}

export default HeaderImages

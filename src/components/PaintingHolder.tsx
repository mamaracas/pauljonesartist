import React, { SFC, useState } from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import Modal from 'react-modal'
import { useSpring, animated } from 'react-spring'

const StyledUl = styled('ul')`
  padding: 0;
  margin: 5px;
  text-align: center;
  list-style-type: none;
  li {
    font-size: 12px;
    text-align: center;
  }
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    animation: 'fadeIn 1s ease-in-out 1',
    animationFillMode:'forwards',
    opacity:0
  },
  overlay: { zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)' }
}

const PaintingHolder: SFC<{
  img: string
  largeImg: string
  title: string
  dims: string
}> = ({ img, largeImg, title, dims }) => {
  const [isOpen, setOpen] = useState(false)
  const props = useSpring({
    from: { opacity: 0, transform: 'translate(0,-40px)' },
    to: { opacity: 1, transform: 'translate(0,0)' },
    delay: 400,
    config: { mass: 1, tension: 230, friction: 20 }
  })

  return (
    <Box mb={[5]}>
      <img
        src={img}
        onClick={() => {
          setOpen(!isOpen)
        }}
        alt={title}
        style={{ width: '100%', cursor: 'pointer' }}
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
              src={largeImg}
              onClick={() => {
                setOpen(!isOpen)
              }}
              style={{ maxHeight: '90vh', maxWidth: '90vw', cursor: 'pointer' }}
              alt={title}
            />
          </animated.div>
        </Modal>
      )}
      <StyledUl>
        {title}
        <li>{dims}</li>
      </StyledUl>
    </Box>
  )
}

export default PaintingHolder

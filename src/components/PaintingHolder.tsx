import React, { SFC, useState } from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import Modal from 'react-modal'

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
    transform: 'translate(-50%, -50%)'
  },
  overlay: { zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)' }
}

const PaintingHolder: SFC<{ img: string; title: string; dims: string }> = ({
  img,
  title,
  dims
}) => {
  const [isOpen, setOpen] = useState(false)
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
          isOpen={isOpen}
          onRequestClose={() => {
            setOpen(!isOpen)
          }}
          style={customStyles}
        >
          <img
            className="image"
            src={img}
            onClick={() => {
              setOpen(!isOpen)
            }}
            alt={title}
          />
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

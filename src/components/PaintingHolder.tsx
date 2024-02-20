import React, { useState } from "react";
import { Box } from "rebass";
import styled from "styled-components";
import Modal from "react-modal";
import ZoomIn from "@material-ui/icons/ZoomIn";

const StyledUl = styled("ul")`
  padding: 0;
  margin: 5px;
  margin-top: 9px;
  text-align: center;
  list-style-type: none;
  li {
    font-size: 12px;
    text-align: center;
  }
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    animation: "fadeIn 1s ease-in-out 1",
    animationFillMode: "forwards",
    opacity: 0,
  },
  overlay: { zIndex: 10, backgroundColor: "rgba(0, 0, 0, 0.7)" },
};

const PaintingHolder = ({
  img,
  largeImg,
  title,
  dims,
  size = "large",
  showModal = true,
  showZoom = true,
}) => {
  const [isOpen, setOpen] = useState(false);
  const isSmall = size === "small";
  return (
    <Box mb={[isSmall ? 0 : 5]}>
      <div
        style={{
          transform: `scale(${isSmall ? "0.4" : "1"})`,
          outline: "3px solid white",
        }}
        className={"paintingHolderImageHolder"}
      >
        <img
          className={"paintingHolderImage"}
          src={img}
          onClick={() => {
            if (showModal) setOpen(!isOpen);
          }}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
        {showZoom && (
          <ZoomIn
            onClick={() => {
              if (showModal) setOpen(!isOpen);
            }}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "-1px",
              right: "-1px",
              color: "#ccc",
              backgroundColor: "white",
              padding: "5px",
            }}
          />
        )}
      </div>

      {isOpen && showModal && (
        <Modal
          appElement={document.body}
          isOpen={isOpen}
          onRequestClose={() => {
            setOpen(!isOpen);
          }}
          style={customStyles}
        >
          <img
            className="image"
            src={largeImg}
            onClick={() => {
              setOpen(!isOpen);
            }}
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              cursor: "pointer",
              boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.2)",
            }}
            alt={title}
          />
        </Modal>
      )}
      {title && title.length > 1 && (
        <StyledUl>
          {title}
          <li>{dims}</li>
        </StyledUl>
      )}
    </Box>
  );
};

export default PaintingHolder;

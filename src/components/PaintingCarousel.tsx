import React, { useState } from "react";
import { Box } from "rebass";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSpring, animated } from "react-spring";
import Modal from "react-modal";

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

const PaintingCarousel = ({
  imgs,
  pageTitle = "",
  subTitle = "",
  autoPlay = true,
}) => {
  const [isOpen, setOpen] = useState(autoPlay);
  const [index, setIndex] = useState(0);

  const animationProps = useSpring({
    from: { opacity: 0, transform: "translate(0,-40px)" },
    to: { opacity: 1, transform: "translate(0,0)" },
    delay: 400,
    config: { mass: 1, tension: 230, friction: 20 },
  });
  return (
    <>
      <Box mb={[3]}>
        {pageTitle && <h2>{pageTitle}</h2>}
        {subTitle && subTitle.length > 0 && <h3>{subTitle}</h3>}
        <Box p={[3]} bg={"#ccc"} mb={[3]}>
          <h4>{imgs && imgs[index] && imgs[index].title}</h4>
          {imgs && imgs[index] && imgs[index].dims && (
            <h5>{imgs[index].dims}</h5>
          )}
          {imgs && imgs[index] && imgs[index].price && (
            <h5>
              {imgs[index].price}{" "}
              {imgs[index].isSold
                ? "(SOLD)"
                : "(Use link above to reserve or purchase)"}
            </h5>
          )}
          <h5>
            <strong>Click on an image below to view a larger version</strong>
          </h5>
        </Box>
        <Carousel
          autoPlay={autoPlay && !isOpen}
          dynamicHeight={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={true}
          stopOnHover={true}
          infiniteLoop={true}
          selectedItem={index}
          onClickThumb={(i) => {
            setIndex(i);
          }}
          onChange={(i) => {
            setIndex(i);
          }}
          onClickItem={() => {
            setOpen(!isOpen);
          }}
        >
          {imgs.map((item, i) => (
            <div key={i}>
              <img src={item.img} alt="slideshow" />
            </div>
          ))}
        </Carousel>
      </Box>
      {isOpen && (
        <Modal
          closeTimeoutMS={400}
          appElement={document.body}
          isOpen={isOpen}
          onRequestClose={() => {
            setOpen(!isOpen);
          }}
          style={customStyles}
        >
          <animated.div style={animationProps}>
            <h4>{imgs[index].title}</h4>
            {imgs[index].dims && <h5>{imgs[index].dims}</h5>}
            {imgs[index].price && <h5>{imgs[index].price}</h5>}
            <img
              className="image"
              src={imgs[index].largeImg}
              onClick={() => {
                setOpen(!isOpen);
              }}
              style={{
                maxHeight: "90vh",
                maxWidth: "90vw",
                cursor: "pointer",
              }}
              alt={"slideshow"}
            />
          </animated.div>
        </Modal>
      )}
    </>
  );
};

export default PaintingCarousel;

import React from "react";
import { useTrail, animated } from "react-spring";
interface Props {
  items: any[];
  copyPropsToStyle?: string[];
  config?: any;
  transform?: any;
  opacity?: any;
  from?: number;
  to?: number;
  delay?: number;
}

const AnimateArray = ({
  items,
  config = { mass: 5, tension: 2600, friction: 230 },
  transform = (zeroToOne: number) =>
    `translate3d(-${40 - zeroToOne * 40}px, 0, 0)`,
  opacity = (zeroToOne: number) => zeroToOne,
  from = 0,
  to = 1,
  delay = 100,
}) => {
  const trail = useTrail(items ? items.length : 0, {
    config,
    p: to,
    from: { p: from },
    delay: delay,
  });

  return (
    <>
      {trail.map(({ p, ...rest }, index) => {
        const item = items[index];
        if (!item) {
          return <></>;
        }
        return (
          <animated.div
            key={index}
            style={{
              ...rest,
              ...(item.props ? item.props : {}),
              transform: p.interpolate(transform),
              opacity: p.interpolate(opacity),
            }}
          >
            {item}
          </animated.div>
        );
      })}
    </>
  );
};

export default AnimateArray;

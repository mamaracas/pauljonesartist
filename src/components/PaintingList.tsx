import React, { useState, useEffect } from "react";
import { imgs2019, Iimg } from "./ImgLists";
import PaintingHolder from "./PaintingHolder";
import { take, shuffle } from "lodash";
import AnimateArray from "./AnimateArray";

const getItems = (count: number) => {
  const shuffledCopy = shuffle(take(imgs2019, imgs2019.length));
  const _img2019: Iimg[] = [];
  for (let i = 0; i < count; i++) {
    const item = shuffledCopy.pop();
    _img2019.push(item as Iimg);
  }
  return _img2019;
};

const PaintingList = ({ count }) => {
  const [items, setItems] = useState<Iimg[]>([]);
  useEffect(() => {
    setItems(getItems(count)); //get initial images
  }, [count]);
  return (
    <AnimateArray
      items={items.map((item, index) => (
        <PaintingHolder
          key={`${item.title}-${index}`}
          img={item.img}
          largeImg={item.largeImg}
          title={item.title}
          dims={item.dims}
        />
      ))}
    />
  );
};

export default PaintingList;

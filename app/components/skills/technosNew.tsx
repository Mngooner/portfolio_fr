import React from "react";
import Image from "next/image";
import { ImageProps } from "./technos";
import { images } from "../images/images";

// const dataPromise = fetchData()

const TechnosNew = () => {
  // const data = use(dataPromise)

  const hoverIn = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.opacity = "1";
  };

  const hoverOut = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.opacity = ".4";
  };

  const imageList = images.map(
    (image: ImageProps) =>
      !image.learnt && (
        <div key={crypto.randomUUID()} className="p-3 my-5">
          <Image
            src={image.url}
            alt=""
            width={80}
            height={0}
            className="opacity-30 w-[100%] h-auto"
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          />
        </div>
      )
  );

  return (
    <div className="flex flex-wrap items-center justify-center">
      {imageList}
    </div>
  );
};

export default TechnosNew;

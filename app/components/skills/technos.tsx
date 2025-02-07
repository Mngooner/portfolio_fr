import React from "react";
import Image from "next/image";
import { images } from "../images/images";

export interface ImageProps {
  url: string;
  learnt: boolean;
};

// export const fetchData = async () => {
//   const res = await fetch("http://unen-portfolio.cjkkg4wmma2c.eu-west-3.rds.amazonaws.com/api/images");
//   return res.json();
// };
// const dataPromise = fetchData();

const Technos = () => {
  // const data = use(dataPromise);

  const imageList = images.map((image: ImageProps) => (
    <div key={crypto.randomUUID()} className="p-3 my-5">
      {image.learnt && (
        <Image
          src={image.url}
          alt=""
          width={80}
          height={0}
          className="w-[100%] h-auto"
        />
      )}
    </div>
  ));

  return (
    <div className="flex flex-wrap items-center justify-center">
      {imageList}
    </div>
  );
};

export default Technos;

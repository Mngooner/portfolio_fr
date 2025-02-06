import React, { use } from "react";
import Image from "next/image";

export interface ImageProps {
  url: string;
  learnt: boolean;
};

export const fetchData = async () => {
  const res = await fetch("http://localhost:3000/api/images");
  return res.json();
};
const dataPromise = fetchData();
const Technos = () => {
  const data = use(dataPromise);

  const imageList = data.map((image: ImageProps) => (
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

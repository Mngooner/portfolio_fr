"use client";
import React from "react";
import Image from "next/image";
import { DisplayCurrentProps } from "./interface";

const DisplayCurrent = ({
  weatherData,
  temperature,
  location,
}: DisplayCurrentProps) => {
  const { icon, text } = weatherData;
  const { name, region } = location;

  return (
    <>
      {name && (
        <div className={`card w-full shadow-xl`}>
          <figure>
            {icon && (
              <Image
                src={`https:${icon}`}
                alt={`weather-${text}`}
                width={75}
                height={75}
              />
            )}
          </figure>
          <div className="card-body items-center text-center text-white">
            {name && <h2 className="card-title">{`${name}, ${region}`}</h2>}
            {text && <p>{text}</p>}
            {temperature && <p>{`${Math.floor(temperature)} \u00b0C`}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayCurrent;

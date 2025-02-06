import React from "react";
import Image from "next/image";

interface displayForecastProps {
  forecast: [
    day: {
      astro: { moonrise: number };
      day: { avgtemp_c: number; condition: { icon: string; text: string } };
      date_epoch: number;
    }
  ];

  unixConverter: (localTime: number) => string;
}

const DisplayForecast = ({ forecast, unixConverter }: displayForecastProps) => {
  const weekly =
    forecast &&
    forecast.map((day) => (
      <div key={day.astro.moonrise}>
        <p>{`${Math.floor(day.day.avgtemp_c)} \u00b0C`}</p>
        <Image
          src={`https:${day.day.condition.icon}`}
          width="64"
          height="64"
          alt=""
        />
        <p>{day.day.condition.text}</p>

        <p>{unixConverter(day.date_epoch)}</p>
      </div>
    ));

  return <div className="forecastComponents">{weekly}</div>;
};

export default DisplayForecast;

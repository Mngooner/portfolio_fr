"use client";
import React, { useReducer, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Dropdown from "./Dropdown";
import DisplayCurrent from "./DisplayCurrent";
import Form from "./Form";
import TextContent from "./TextContent";
import { ActionProps, StateProps } from "./interface";

const initialState = {
  cityName: "",
  isDropDownVisible: false,
  temperature: null,
  locationData: [],
  weatherData: {
    code: null,
    text: "",
    icon: "",
  },
  location: { region: "", name: "" },
  weatherBgImage: "",
  bgImageData: [],
};

const weatherReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case "getLocData": {
      return {
        ...state,
        locationData: action.payload,
        cityName: "",
        isDropDownVisible: true,
      };
    }
    case "getWeatherData": {
      return {
        ...state,
        weatherData: action.payload.current.condition,
        temperature: action.payload.current.temp_c,
        location: action.payload.location,
        isDropDownVisible: false,
      };
    }

    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }

    case "weatherBgImage": {
      return {
        ...state,
        weatherBgImage: action.payload,
      };
    }
    default:
      break;
  }
  return state;
};

const Weather = () => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const {
    cityName,
    isDropDownVisible,
    temperature,
    locationData,
    weatherData,
    location,
    weatherBgImage,
  } = state;

  const GetLocData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (cityName === "") {
      return;
    } else {
      try {
        const res = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&lat={latitude}&lon={longitude}&key=5979c4c97c354deb83e1b9a479aaa12d`
        );
        const { results } = await res.json();

        dispatch({ type: "getLocData", payload: results });
      } catch (err) {
        alert(err);
      }
    }
  };

  const GetWeatherData = async (lat: number, lng: number) => {
    try {
      const imgRes = await fetch("http://localhost:3000/api/weatherImages");
      const imgData = await imgRes.json();

      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=1b0d67b4f62b4955b32163541241812&q=${lat},${lng}&days=5`
      );
      const data = await res.json();

      const result = imgData.filter(
        (image) => image.code === data.current.condition.code
      );
      dispatch({ type: "weatherBgImage", payload: result[0].url });
      dispatch({ type: "getWeatherData", payload: data });
    } catch (err) {
      alert(err);
    }
  };

  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.25"],
  });

  return (
    <div
      id="scotland"
      className={"flex bg-[#a4cbb4] flex-col items-center min-h-[80vh] py-10"}
    >
      <TextContent />
      <motion.div ref={element} style={{ opacity: scrollYProgress }}>
        <Form getLocData={GetLocData} cityName={cityName} dispatch={dispatch} />
      </motion.div>
      <div>
        <Dropdown
          isDropDownVisible={isDropDownVisible}
          locationData={locationData}
          getWeatherData={GetWeatherData}
          dispatch={dispatch}
        />
      </div>
      <div className={`w-[80%] bg-cover ${weatherBgImage} my-8`}>
        <DisplayCurrent
          weatherData={weatherData}
          temperature={temperature}
          location={location}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default Weather;

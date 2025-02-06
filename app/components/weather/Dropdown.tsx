import React from "react";
import { useLanguage } from "@/app/components/LangaugeContext";
import { DropdownProps } from "./interface";

const Dropdown = ({
  isDropDownVisible,
  locationData,
  getWeatherData,
  dispatch,
}: DropdownProps) => {
  const isEnglish = useLanguage();
  const cityNames = locationData.map((result) => (
    <option
      key={result.annotations.geohash}
      label={result.formatted}
      value={`{"village":"${result.components.village}",
                 "place":"${result.components.place}",
                 "town":"${result.components.town}",
                 "city":"${result.components.city}",
                 "country":"${result.components.country}", 
                 "lat":${result.geometry.lat},
                 "lng":${result.geometry.lng}}`}
    >
      {result.formatted}
    </option>
  ));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lat = JSON.parse(event.target.value).lat;
    const lng = JSON.parse(event.target.value).lng;
    dispatch({ type: "CurrentCityDisplay", payload: event.target.value });
    getWeatherData(lat, lng);
  };

  return (
    <div>
      {isDropDownVisible && (
        <select
          value={"Please select your location"}
          onChange={(e) => handleChange(e)}
          className="select select-primary w-full max-w-xs bg-white my-4"
        >
          <option>
            {isEnglish
              ? "Please select your location"
              : "Veuillez sélectionner votre lieu"}
          </option>
          {cityNames}
        </select>
      )}
    </div>
  );
};

export default Dropdown;

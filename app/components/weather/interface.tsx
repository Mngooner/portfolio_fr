export interface StateProps {
  cityName: string;
  isDropDownVisible: boolean;
  temperature: number;
  locationData: {
    components: {
      village: string;
      place: string;
      town: string;
      city: string;
      country: string;
    };
    geometry: {
      lat: number;
      lng: number;
    };
    formatted: string;
    annotations: {
      geohash: string;
    };
  }[];
  bgImageData: {
    id: number;
    url: string;
    code: number;
    name: string;
  }[];
  weatherData: {
    text: string;
    icon: string;
    code: number;
  };
  location: {
    region: string;
    name: string;
  };
  weatherBgImage: string;
}

export type FormProps = {
  getLocData: (e: React.SyntheticEvent) => object;
  cityName: string;
  dispatch({}): void;
};

export type DropdownProps = {
  isDropDownVisible: boolean;
  getWeatherData(lat: number, lng: number): object;
  locationData: {
    components: {
      village: string;
      place: string;
      town: string;
      city: string;
      country: string;
    };
    geometry: {
      lat: number;
      lng: number;
    };
    formatted: string;
    annotations: {
      geohash: string;
    };
  }[];
  dispatch({}): void;
};

export type DisplayCurrentProps = {
  weatherData: {
    text: string;
    icon: string;
    code: number;
  };
  temperature: number;
  location: {
    region: string;
    name: string;
  };
  dispatch({}): void;
};

type GetLocalDataProps = { type: "getLocData"; payload: object[] };
type GetWeatherDataProps = {
  type: "getWeatherData";
  payload: { current: { condition: string; temp_c: number }; location: object };
};
type WeatherImageProps = { type: "weatherImage"; payload: object[] };
type WeatherBgImageProps = { type: "weatherBgImage"; payload: string };
type RemainingProps = {
  type: "field";
  payload: string;
  field: string;
  value: string;
};

export type ActionProps =
  | GetLocalDataProps
  | GetWeatherDataProps
  | WeatherImageProps
  | WeatherBgImageProps
  | RemainingProps;
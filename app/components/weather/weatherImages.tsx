const weatherImages = [
  {
    name: "cloudy",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_white-cloud-day.jpg)]",
    code: 1009
  },
  {
    name: "cloudy",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_white-cloud-day.jpg)]",
    code: 1030
  },
  {
    name: "lightSnow",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-snow-day.jpg)]",
    code: 1207
  },
  {
    name: "lightSnow",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-snow-day.jpg)]",
    code: 1210
  },
  {
    name: "lightSnow",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-snow-day.jpg)]",
    code: 1213
  },
  {
    name: "lightSnow",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-snow-day.jpg)]",
    code: 1216
  },
  {
    name: "lightSnow",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-snow-day.jpg)]",
    code: 1219
  },
  {
    name: "lightSnow",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-snow-day.jpg)]",
    code: 1249
  },
  {
    name: "lightSnow",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-snow-day.jpg)]",
    code: 1252
  },
  {
    name: "lightSnow",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-snow-day.jpg)]",
    code: 1255
  },
  {
    name: "heavySnow",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_heavy-snow-day.jpg)]",
    code: 1225
  },
  {
    name: "heavySnow",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_heavy-snow-day.jpg)]",
    code: 1237
  },
  {
    name: "heavyRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_heavy-rain-day.jpg)]",
    code: 1189
  },
  {
    name: "heavyRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_heavy-rain-day.jpg)]",
    code: 1192
  },
  {
    name: "heavyRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_heavy-rain-day.jpg)]",
    code: 1195
  },
  {
    name: "heavyRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_heavy-rain-day.jpg)]",
    code: 1198
  },
  {
    name: "heavyRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_heavy-rain-day.jpg)]",
    code: 1201
  },
  {
    name: "heavyRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_heavy-rain-day.jpg)]",
    code: 1243
  },
  {
    name: "heavyRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_heavy-rain-day.jpg)]",
    code: 1246
  },
  {
    name: "lightRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-rain-shower-day.jpg)]",
    code: 1150
  },
  {
    name: "lightRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-rain-shower-day.jpg)]",
    code: 1153
  },
  {
    name: "lightRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-rain-shower-day.jpg)]",
    code: 1168
  },
  {
    name: "lightRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-rain-shower-day.jpg)]",
    code: 1171
  },
  {
    name: "lightRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-rain-shower-day.jpg)]",
    code: 1180
  },
  {
    name: "lightRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-rain-shower-day.jpg)]",
    code: 1183
  },
  {
    name: "lightRain",
    url: "bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_light-rain-shower-day.jpg)]",
    code: 1240
  },
];

export default weatherImages;

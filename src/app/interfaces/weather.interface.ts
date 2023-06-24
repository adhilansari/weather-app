// GEO DB
export interface IGeoCities {
  data: IGeoData[];
  links: Link[];
  metadata: Metadata;
}

export interface Metadata {
  currentOffset: number;
  totalCount: number;
}

export interface Link {
  rel: string;
  href: string;
}

export interface IGeoData {
  id: number;
  wikiDataId: string;
  type: string;
  city: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  regionWdId: string;
  latitude: number;
  longitude: number;
  population: number;
}

// WEATHER DATA
export interface IWeather {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Coord {
  lon: number;
  lat: number;
}


// FORECAST

export interface IForecast {
  cod: string;
  message: number;
  cnt: number;
  list: IForecastList[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  coord: CoordForecast;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface CoordForecast {
  lat: number;
  lon: number;
}

export interface IForecastList {
  dt: number;
  main: MainForecast;
  weather: WeatherForecast[];
  clouds: CloudsForecast;
  wind: WindForecast;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: SysForecast;
  dt_txt: string;
}

export interface SysForecast {
  pod: string;
}

export interface Rain {
  '3h': number;
}

export interface WindForecast {
  speed: number;
  deg: number;
  gust: number;
}

export interface CloudsForecast {
  all: number;
}

export interface WeatherForecast {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainForecast {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

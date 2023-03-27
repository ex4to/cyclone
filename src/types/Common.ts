export type UserLocation = {
  lat: number
  lon: number
  name: string
  region?: string
  country: string
  tz_id?: string
  localtime_epoch?: number
  localtime?: string
}

export type WeatherAlerts = {
  headline: string
  msgType: string
  severity: string
  urgency: string
  areas: string
  category: string
  certainty: string
  event: string
  note: string
  effective: string
  expires: string
  desc: string
  instruction: string
}

export type AirQuality = {
  co: number
  o3: number
  no2: number
  so2: number
  pm2_5: number
  pm10: number
  'us-epa-index': number
  'gb-defra-index': number
}

export type DayCondition = {
  text: string
  icon: string
  code: number
}

export type CurrentWeather = {
  air_quality?: AirQuality
  last_updated: string
  last_updated_epoch: number
  temp_c: number
  temp_f: number
  feelslike_c: number
  feelslike_f: number
  condition: DayCondition
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  is_day: number
  uv: number
  gust_mph: number
  gust_kph: number
}

export type Astronomy = {
  sunrise: string
  sunset: string
  moonrise: string
  moonset: string
  moon_phase: string
  moon_illumination: number
}

export type HourWeather = {
  time_epoch: number
  time: string
  temp_c: string
  temp_f: string
  condition: DayCondition
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  windchill_c: number
  windchill_f: number
  heatindex_c: number
  heatindex_f: number
  dewpoint_c: number
  dewpoint_f: number
  will_it_rain: number
  will_it_snow: number
  is_day: number
  vis_km: number
  vis_miles: number
  chance_of_rain: number
  chance_of_snow: number
  gust_mph: number
  gust_kph: number
}

export type ForecastDay = {
  maxtemp_c: number
  maxtemp_f: number
  mintemp_c: number
  mintemp_f: number
  avgtemp_c: number
  avgtemp_f: number
  maxwind_mph: number
  maxwind_kph: number
  totalprecip_mm: number
  totalprecip_in: number
  avgvis_km: number
  avgvis_miles: number
  avghumidity: number
  condition: DayCondition
  uv: number
}

import axios, { AxiosError } from "axios"

const API_KEY_WEATHER = "c37d5a8e792375836f2aa82ac92089f5"
const API_URL_WEATHER = `https://api.openweathermap.org/data/2.5/weather`

export const getWeatherApi = async (
  lat: number,
  lon: number
): Promise<object[] | any> => {
  try {
    const { data } = await axios.get(API_URL_WEATHER, {
      params: {
        lat: `${lat}`,
        lon: `${lon}`,
        appid: API_KEY_WEATHER,
        lang: "ua",
        units: "metric",
      },
    })
    return [data.main, { sky: data.weather[0].description }, data.wind]
  } catch (e) {
    if (e instanceof AxiosError) {
      return e.response?.data
    }
  }
}

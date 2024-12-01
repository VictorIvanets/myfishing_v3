import { PREFIX } from "@/constants/constants"
import { Coords, MapResponse } from "./api.getAllsets"
//@ts-ignore next line
import axios, { AxiosError } from "react-native-axios"

export const getWeatherApi = async (
  lat: number,
  lon: number
): Promise<object[] | string> => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          lat: `${lat}`,
          lon: `${lon}`,
          appid: "c37d5a8e792375836f2aa82ac92089f5",
          lang: "ua",
          units: "metric",
        },
      }
    )
    return [data.main, { sky: data.weather[0].description }, data.wind]
  } catch (e: any) {
    return `${e.response.data.cod}: ${e.response.data.message}`
  }
}

const setSets = async (params: {
  title: string
  description: string
  score: number
  date: string
  coords: Coords
  setID: number
  login: string
  weather: object[] | string
}): Promise<MapResponse> => {
  const { data } = await axios.post<MapResponse>(`${PREFIX}fishsets/sets`, {
    login: params.login,
    description: params.description,
    title: params.title,
    score: params.score,
    date: params.date,
    coords: params.coords,
    setID: +params.setID,
    weather: params.weather,
  })
  console.log("setSets LOAD")

  return data
}

export default setSets

import { PREFIX } from "@/constants/constants"
import { Coords, MapResponse } from "@/entities/allset/api/api.getAllset"
import axios, { AxiosError } from "axios"

const setSets = async (params: {
  title: string
  description: string
  score: number
  date: string
  coords: Coords
  setID: number
  login: string
  weather: object[] | string
}): Promise<MapResponse | any> => {
  try {
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

    return data
  } catch (e) {
    if (e instanceof AxiosError) {
      return e.response?.data
    }
  }
}

export default setSets

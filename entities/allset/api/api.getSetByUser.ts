import { PREFIX } from "@/constants/constants"
import axios, { AxiosError } from "axios"
//@ts-ignore next line

export type Coords = [number, number]

export interface MapResponse {
  title: string
  description: string
  score: number
  date: number
  coords: Coords
  setID: number
  login: string
  img: string[]
  weather: object[] | string
}

const getOneSetsByUser = async (
  login: string
): Promise<MapResponse[] | any> => {
  try {
    const data = await axios.get<MapResponse[]>(`${PREFIX}fishsets/${login}`)
    return data.data
  } catch (e) {
    if (e instanceof AxiosError) {
      return e.response?.data
    }
  }
}

export default getOneSetsByUser

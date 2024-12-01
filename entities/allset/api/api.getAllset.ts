import { PREFIX } from "@/constants/constants"
//@ts-ignore next line
import axios from "react-native-axios"

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

const allGetSets = async (): Promise<MapResponse[] | string> => {
  try {
    const data = await axios.get<MapResponse[]>(
      `${PREFIX}fishsets/all/database`
    )
    return data.data
  } catch (e) {
    console.log(e)
    // if (e instanceof AxiosError) {
    //   return e.response?.data
    // } else
    return `${e}`
  }
}

export default allGetSets
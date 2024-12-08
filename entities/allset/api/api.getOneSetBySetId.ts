import { PREFIX } from "@/constants/constants"
import { MapResponse } from "./api.getAllset"
import axios, { AxiosError } from "axios"

const getOneSetsBySetId = async (setId: number): Promise<MapResponse | any> => {
  try {
    const { data } = await axios.get<MapResponse>(
      `${PREFIX}fishsets/onesets/${setId}`
    )
    return data
  } catch (e) {
    if (e instanceof AxiosError) {
      return e.response?.data
    }
  }
}

export default getOneSetsBySetId

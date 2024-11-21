import { PREFIX } from "@/constants/constants"
//@ts-ignore next line
import axios from "react-native-axios"
import { MapResponse } from "./getAllset"

const getOneSetsBySetId = async (
  setId: number
): Promise<MapResponse | string> => {
  try {
    const data = await axios.get<MapResponse>(
      `${PREFIX}fishsets/onesets/${setId}`
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

export default getOneSetsBySetId

export async function loadFotoInFolder(
  setId: string | undefined
): Promise<string | string[]> {
  try {
    const { data } = await axios.get<string[]>(`${PREFIX}getfoto/get/${setId}`)

    return data
  } catch (e) {
    // if (e instanceof AxiosError) {
    // 	return e.message
    // }
    return "error"
  }
}

import { PREFIX } from "@/constants/constants"
//@ts-ignore next line
import axios from "react-native-axios"

export async function loadFotoInFolder(
  setId: string | undefined
): Promise<string | string[]> {
  try {
    const { data } = await axios.get<string[]>(`${PREFIX}getfoto/get/${setId}`)
    return data
  } catch (e) {
    // console.log(e)
    // if (e instanceof AxiosError) {
    //   return e.message
    // }
    return "error"
  }
}

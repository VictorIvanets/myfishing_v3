import { PREFIX } from "@/constants/constants"
import axios, { AxiosError } from "axios"

export async function loadFotoInFolder(
  setId: string | undefined
): Promise<any | string[]> {
  try {
    const { data } = await axios.get<string[]>(`${PREFIX}getfoto/get/${setId}`)
    return data
  } catch (e) {
    if (e instanceof AxiosError) {
      return e.response?.data
    }
  }
}

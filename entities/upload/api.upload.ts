import { PREFIX } from "@/constants/constants"
import axios, { AxiosError } from "axios"
import FormData from "form-data"

export const apiUpoloadImg = async (
  uri: string,
  name: string,
  setID: number
): Promise<any | string> => {
  const formData = new FormData()
  formData.append("files", {
    uri,
    name,
    type: "image/jpeg",
  })

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  }
  try {
    const data = await axios.post(
      `${PREFIX}fotoset/upload/${setID}`,
      formData,
      config
    )
    return data
  } catch (e) {
    if (e instanceof AxiosError) {
      return e.response?.data
    }
  }
}

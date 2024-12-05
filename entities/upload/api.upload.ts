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
    console.log(data.data)
    return data
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(e.message)
      return e.message
    }
    return "ERROR API"
  }
}

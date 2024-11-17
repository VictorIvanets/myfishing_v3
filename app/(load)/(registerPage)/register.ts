import { PREFIX } from "@/constants/constants"
//@ts-ignore next line
import axios, { AxiosError } from "react-native-axios"

export interface RegisterResponse {
  message?: string
  login: string
  password: string
  name: string
  subname: string
  country: string
  city: string
}

export const setUser = async (
  login: string,
  password: string,
  name: string,
  subname: string,
  country: string,
  city: string
) => {
  try {
    const data = await axios.post<RegisterResponse>(`${PREFIX}auth/register`, {
      login,
      password,
      name,
      subname,
      country,
      city,
    })
    return data.data
  } catch (e) {
    // if (e instanceof AxiosError) {
    //   return e.response?.data
    // }
    return e
  }
}

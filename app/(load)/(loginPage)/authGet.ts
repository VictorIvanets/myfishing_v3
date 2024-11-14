import { PREFIX } from "@/constants/constants"
import axios, { AxiosError } from "react-native-axios"

export interface LoginResponse {
  access_token: string
  login: string
  message?: string
  userId: string
}

export const getlogin = async (login: string, password: string) => {
  try {
    const data = await axios.post<LoginResponse>(`${PREFIX}auth/login`, {
      login: login,
      password: password,
    })
    return data.data
  } catch (e) {
    if (e instanceof AxiosError) {
      return e.response?.data
    }
  }
}

import { PREFIX } from "@/constants/constants"
//@ts-ignore next line
import axios from "react-native-axios"

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
    console.log(e)
    // if (e instanceof AxiosError) {
    //   return e.response?.data
    // } else

    return e
  }
}

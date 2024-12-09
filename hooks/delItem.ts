import { PREFIX } from "@/constants/constants"
import { Alert } from "react-native"
import axios, { AxiosError } from "axios"

export const delItem = async (
  setId: number,
  title: string,
  sethendDelSet: React.Dispatch<React.SetStateAction<boolean>>,
  hendDelSet: boolean
) => {
  Alert.alert(
    `Запис: ${title}`,
    "Ви дійсно хочете видалити?",
    [
      {
        text: "Ні",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Так",
        onPress: () => {
          sethendDelSet(!hendDelSet)
          fetchDelState(setId)
        },
      },
    ],
    { cancelable: false }
  )
  return true
}

export async function fetchDelState(
  setId: string | number
): Promise<string | any> {
  try {
    const { data } = await axios.delete<string>(`${PREFIX}fishsets/${setId}`)

    return data
  } catch (e) {
    if (e instanceof AxiosError) {
      return e.response?.data.message
    }
  }
}

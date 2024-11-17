import {
  LOCAL_LOGIN,
  LOCAL_JWT,
  LOCAL_USERID,
  LOCAL_INIT_LAT,
  LOCAL_INIT_LON,
  LOCAL_PASSWORD,
} from "@/constants/constants"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert, BackHandler } from "react-native"

export const exitLogin = async () => {
  await AsyncStorage.removeItem(LOCAL_LOGIN)
  await AsyncStorage.removeItem(LOCAL_JWT)
  await AsyncStorage.removeItem(LOCAL_USERID)
  await AsyncStorage.removeItem(LOCAL_INIT_LAT)
  await AsyncStorage.removeItem(LOCAL_INIT_LON)
  await AsyncStorage.removeItem(LOCAL_PASSWORD)

  Alert.alert(
    "ВИХІД З ДОДАТКУ",
    "Ви дійсно хочете закрити?",
    [
      {
        text: "Ні",
        onPress: () => {},
        style: "cancel",
      },
      { text: "Так", onPress: () => BackHandler.exitApp() },
    ],
    { cancelable: false }
  )
  return true
}

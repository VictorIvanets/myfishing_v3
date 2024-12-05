import {
  launchCameraAsync,
  requestCameraPermissionsAsync,
} from "expo-image-picker"
import { Alert } from "react-native"

export interface FileInfo {
  fileName: string
  uri: string
}

export const useCamera = async (): Promise<FileInfo | null | undefined> => {
  const { status } = await requestCameraPermissionsAsync()
  if (status !== "granted") {
    Alert.alert("ERROR")
  } else {
    const result = await launchCameraAsync({
      allowsEditing: true,
      quality: 0.5,
    })
    if (!result.canceled) {
      const fileName = result.assets[0].fileName
      const uri = result.assets[0].uri
      if (fileName && uri) return { fileName, uri }
      else return null
    }
  }
}

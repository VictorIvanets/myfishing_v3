import {
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker"
import { Alert } from "react-native"
import { FileInfo } from "./useCamera"

export const useGalleryImage = async (): Promise<
  FileInfo | null | undefined
> => {
  const { status } = await requestMediaLibraryPermissionsAsync()
  if (status !== "granted") {
    Alert.alert("ERROR")
  } else {
    const result = await launchImageLibraryAsync()
    if (!result.canceled) {
      const fileName = result.assets[0].fileName
      const uri = result.assets[0].uri
      if (fileName && uri) return { fileName, uri }
      else return null
    }
  }
}

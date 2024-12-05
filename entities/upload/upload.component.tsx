import { useState } from "react"
import { View, Image, Pressable } from "react-native"
import { ThemedText } from "../../components/ThemedText"
import { useCamera } from "./useCamera"
import { useGalleryImage } from "./useGallery"
import { apiUpoloadImg } from "./api.upload"
import Preloader from "@/components/preloader/preloader"
import { default as styles } from "./upload.styles"
import Ionicons from "@expo/vector-icons/Ionicons"
import { colors } from "@/constants/Colors"
import Foundation from "@expo/vector-icons/Foundation"

interface UploadPhotoProps {
  setID: number
}

export default function UploadPhoto({ setID }: UploadPhotoProps) {
  const [filePath, setFilePath] = useState<string | null | undefined>(null)
  const [filename, setFilename] = useState<string | null | undefined>(null)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [resultUpload, setResultUpload] = useState<string | null>(null)

  const picCamera = async () => {
    setFilename(null)
    setFilePath(null)
    setError(null)
    setResultUpload(null)
    const res = await useCamera()
    if (!res) {
      // setError("Помилка")
      return
    }
    setFilename(res.fileName)
    setFilePath(res.uri)
  }

  const pickImage = async () => {
    setFilename(null)
    setFilePath(null)
    setError(null)
    setResultUpload(null)
    const res = await useGalleryImage()
    if (!res) {
      // setError("Помилка")
      return
    }
    setFilename(res.fileName)
    setFilePath(res.uri)
  }

  const upoloadImg = async (uri: string, name: string) => {
    setError(null)
    setResultUpload(null)
    setIsLoading(true)
    const data = await apiUpoloadImg(uri, name, setID)
    if (typeof data === "string") {
      setResultUpload("помилка")
      setError(data)
      setIsLoading(false)
    } else {
      setResultUpload("ЗАВАНТАЖЕНО")
      setFilename(null)
      setFilePath(null)
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <View style={styles.buttonbox}>
          <Pressable style={styles.button} onPress={pickImage}>
            <ThemedText type="default">Вибрати фото</ThemedText>
            <Ionicons name="images" size={50} color={colors.light} />
          </Pressable>
          <Pressable style={styles.button} onPress={picCamera}>
            <ThemedText type="default">Зробити фото</ThemedText>
            <Ionicons name="camera" size={50} color={colors.light} />
          </Pressable>
        </View>
      ) : (
        <Preloader />
      )}
      {filePath ? (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: filePath }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      ) : (
        <ThemedText type="default" style={styles.errorText}>
          {error}
        </ThemedText>
      )}
      {filePath && filename && (
        <Pressable
          style={styles.buttonup}
          onPress={() => upoloadImg(filePath, filename)}
        >
          <Foundation name="upload" size={50} color={colors.dark} />
        </Pressable>
      )}
      {resultUpload && <ThemedText type="default">{resultUpload}</ThemedText>}
      {error && (
        <ThemedText type="default" style={styles.errorText}>
          {error}
        </ThemedText>
      )}
    </View>
  )
}

import { useState } from "react"
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native"
import * as ImagePicker from "expo-image-picker"
import { ThemedText } from "../ThemedText"
import { PREFIX } from "@/constants/constants"
//@ts-ignore next line
import axios, { AxiosError } from "react-native-axios"
import { Link } from "expo-router"
import { colors } from "@/constants/Colors"

interface UploadPhotoProps {
  setID: number
}

export default function UploadPhoto({ setID }: UploadPhotoProps) {
  const [file, setFile] = useState<Blob | null>(null)
  const [filePath, setFilePath] = useState<string | null>(null)
  const [filename, setFilename] = useState<string | null | undefined>(null)

  const [error, setError] = useState(null)

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== "granted") {
      Alert.alert("ERROR")
    } else {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.canceled) {
        // console.log(result.assets[0].fileName)
        // console.log(result)
        const response = await fetch(result.assets[0].uri)
        const blob = await response.blob()
        setFile(blob)
        setFilename(result.assets[0].fileName)
        setFilePath(result.assets[0].uri)
        setError(null)
      }
    }
  }

  async function handleMultipleSubmit() {
    console.log("UPLOAD")
    console.log(filename)
    console.log(file?.arrayBuffer.name)

    const formData = new FormData()

    file && filename && formData.append("files", file, filename)
    console.log(formData)
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // }
    // axios
    //   .post(`${PREFIX}fotoset/upload/${setID}`, formData, config)
    //   .then((res: any) => {
    //     console.log(res)
    //     setFilePath(null)
    //   })
    //   .catch((error: any) => {
    //     console.error("Error uploading files: ", error)
    //   })
    setFile(null)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Вибрати фото</Text>
      </TouchableOpacity>

      {filePath ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: filePath }} style={styles.image} />
        </View>
      ) : (
        <Text style={styles.errorText}>{error}</Text>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleMultipleSubmit()}
      >
        <Text style={styles.buttonText}>Додати. Наразі не працює</Text>
      </TouchableOpacity>
      <Text style={styles.buttonText}>Завантажте фото через Веб-додаток</Text>
      <View style={styles.Linkbox}>
        <Link href={`https://victorivanets.github.io/fishapp/`}>
          <ThemedText style={styles.icon} type="default">
            ВЕБ ВЕРСІЯ ДОДАТКУ
          </ThemedText>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  Linkbox: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: 300,
    height: 50,
    gap: 10,
    borderRadius: 7,
    backgroundColor: colors.dark,
    marginBottom: 5,
  },
  colorWhite: {
    color: colors.lightText,
    textAlign: "center",
  },
  icon: {
    justifyContent: "center",
    textAlign: "center",
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
})

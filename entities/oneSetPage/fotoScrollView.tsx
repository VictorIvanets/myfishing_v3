import { useEffect, useState } from "react"
import { PREFIX_STATIC } from "@/constants/constants"
import { Image, ScrollView, View } from "react-native"
import { default as styles } from "./styles.oneSetPage"
import Preloader from "../../components/preloader/preloader"
import { loadFotoInFolder } from "./api/api.loadFotoInFolder"

interface ScrollProps {
  img: string[]
  setId: number
}

export default function FotoScrollView({ img, setId }: ScrollProps) {
  const [fotoInFolder, setFotoInFolder] = useState<string[]>()

  useEffect(() => {
    const foto = loadFotoInFolder(`${setId}`)

    if (foto) {
      foto.then((res) =>
        setTimeout(() => {
          if (Array.isArray(res)) {
            setFotoInFolder(res.reverse())
          }
        }, 2000)
      )
    }
  }, [img, setId])

  return (
    <>
      {fotoInFolder ? (
        <View style={styles.photobox}>
          <ScrollView contentContainerStyle={styles.photoboxContentContainer}>
            {fotoInFolder &&
              fotoInFolder.map((i) => {
                const url = `${PREFIX_STATIC}static/${setId}/${i}`
                return (
                  <Image
                    key={i}
                    source={{
                      uri: url,
                    }}
                    style={{
                      width: "100%",
                      height: 400,
                      marginBottom: 10,
                      resizeMode: "contain",
                    }}
                  />
                )
              })}
          </ScrollView>
        </View>
      ) : (
        <Preloader />
      )}
    </>
  )
}

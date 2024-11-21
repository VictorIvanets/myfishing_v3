import { useEffect, useState } from "react"
import { PREFIX, PREFIX_STATIC } from "@/constants/constants"
//@ts-ignore next line
import axios, { AxiosError } from "react-native-axios"
import { Image, ScrollView } from "react-native"
import { default as styles } from "../oneSetPage/styles.oneSetPage"
import Preloader from "../preloader/preloader"

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
  }, [img, setFotoInFolder, setId])

  return (
    <>
      {fotoInFolder ? (
        <ScrollView
          contentContainerStyle={styles.photoboxContentContainer}
          style={styles.photobox}
        >
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
      ) : (
        <Preloader />
      )}
    </>
  )
}

export async function loadFotoInFolder(
  setId: string | undefined
): Promise<string | string[]> {
  try {
    const { data } = await axios.get<string[]>(`${PREFIX}getfoto/get/${setId}`)
    return data
  } catch (e) {
    // console.log(e)
    // if (e instanceof AxiosError) {
    //   return e.message
    // }
    return "error"
  }
}

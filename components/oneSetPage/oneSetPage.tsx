import { ThemedText } from "@/components/ThemedText"
import { View, Text, Image, Pressable, Button, ScrollView } from "react-native"
import { default as styles } from "./styles.oneSetPage"
import { MapResponse } from "../mapPage/getAllsets"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import getOneSetsBySetId from "../allset/getOneSetBySetId"
import { Link } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/constants/Colors"
import FotoScrollView from "./fotoScrollView"
import Weather from "./weather"

type OneSetPage = {
  setId: number
  setViewOneSetById?: Dispatch<SetStateAction<number | null>>
  setSetIdforOneItem?: React.Dispatch<React.SetStateAction<number | null>>
}

export default function OneSetPage(props: OneSetPage) {
  const { setId, setViewOneSetById, setSetIdforOneItem } = props
  const [oneSet, setOneSet] = useState<MapResponse | null>(null)

  async function GetSet(setId: number) {
    const data = await getOneSetsBySetId(setId)
    if (typeof data !== "string") {
      setOneSet(data)
    }
  }

  useEffect(() => {
    GetSet(setId)
  }, [setId])

  useEffect(() => {
    if (oneSet) {
      oneSet.img.length
    }
  }, [])

  return (
    <View style={styles.containermarker}>
      {oneSet ? (
        <>
          <View style={styles.contentbox}>
            <ThemedText type="subtitle" style={styles.colorWhite}>
              Назва/Локація:
            </ThemedText>
            <ThemedText type="title" style={styles.colorWhite}>
              {oneSet.title}
            </ThemedText>
            <Link
              href={`https://www.google.com/maps?ll=${oneSet.coords[0]},${oneSet.coords[1]}&q=${oneSet.coords[0]},${oneSet.coords[1]}`}
            >
              <View style={styles.widgetbox}>
                <View style={styles.coordslinkbox}>
                  <ThemedText type="default" style={styles.colorWhite}>
                    google map
                  </ThemedText>
                  <MaterialIcons
                    name="location-pin"
                    size={40}
                    color={colors.dark}
                  />
                </View>
                <Weather weather={oneSet.weather} />
              </View>
            </Link>
            <ThemedText type="default" style={styles.colorWhite}>
              Дата: {oneSet.date}
            </ThemedText>
            <ThemedText type="default" style={styles.colorWhite}>
              Опис: {oneSet.description}
            </ThemedText>
            <ThemedText type="default" style={styles.colorWhite}>
              Оцінка: {oneSet.score}
            </ThemedText>

            <View style={styles.inputBottoLine}></View>
          </View>

          <FotoScrollView img={oneSet.img} setId={oneSet.setID} />
          <View style={styles.bootombox}>
            <Pressable
              onPress={() => {
                setViewOneSetById && setViewOneSetById(null)
                setSetIdforOneItem && setSetIdforOneItem(null)
              }}
            >
              <View style={styles.buttonbox}>
                <MaterialIcons
                  style={{ textAlign: "center" }}
                  name="keyboard-backspace"
                  size={30}
                  color={colors.light}
                />
              </View>
            </Pressable>
          </View>
        </>
      ) : (
        <ThemedText type="subtitle" style={styles.colorWhite}>
          ERROR DATA FETCH
        </ThemedText>
      )}
    </View>
  )
}

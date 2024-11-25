import { ThemedText } from "@/components/ThemedText"
import { View, Text, Image, Pressable, Button, ScrollView } from "react-native"
import { default as styles } from "./styles.oneSetPage"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import getOneSetsBySetId from "../allset/getOneSetBySetId"
import { Link } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/constants/Colors"
import FotoScrollView from "./fotoScrollView"
import Weather from "./weather"
import { MapResponse } from "../allset/getAllset"
import CommentScrollView from "./comments/commetsSetPage"

type OneSetPage = {
  login: string | undefined
  setId: number
  setViewOneSetById?: Dispatch<SetStateAction<number | null>>
  setSetIdforOneItem?: React.Dispatch<React.SetStateAction<number | null>>
}

export default function OneSetPage(props: OneSetPage) {
  const { setId, setViewOneSetById, setSetIdforOneItem, login } = props
  const [oneSet, setOneSet] = useState<MapResponse | null>(null)
  const [photoCommSelect, setPhotoCommSelect] = useState<boolean>(true)

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
          <View style={styles.ScrollViewbox}>
            <ScrollView
              contentContainerStyle={{ alignItems: "flex-start" }}
              style={styles.contentbox}
            >
              <ThemedText type="subtitle">Назва/Локація:</ThemedText>
              <ThemedText type="title">{oneSet.title}</ThemedText>
              <View style={styles.widgetbox}>
                <Link
                  href={`https://www.google.com/maps?ll=${oneSet.coords[0]},${oneSet.coords[1]}&q=${oneSet.coords[0]},${oneSet.coords[1]}`}
                >
                  <View style={styles.coordslinkbox}>
                    <ThemedText type="default">Google map</ThemedText>
                    <MaterialIcons
                      name="location-pin"
                      size={40}
                      color={colors.dark}
                    />
                  </View>
                </Link>
                <Weather weather={oneSet.weather} />
              </View>
              <ThemedText type="default" style={styles.colorWhite}>
                Дата: {oneSet.date}
              </ThemedText>
              <ThemedText type="default" style={styles.colorWhite}>
                Опис: {oneSet.description}
              </ThemedText>
              <ThemedText type="default" style={styles.colorWhite}>
                Оцінка: {oneSet.score}
              </ThemedText>
            </ScrollView>
          </View>
          <View style={styles.inputBottoLine}></View>
          {photoCommSelect ? (
            <FotoScrollView img={oneSet.img} setId={oneSet.setID} />
          ) : (
            login && <CommentScrollView login={login} setId={setId} />
          )}
          <View style={styles.inputBottoLine}></View>
          <View style={styles.buttonSelectBox}>
            <View style={styles.bootombox}>
              <Pressable
                style={styles.buttonbox}
                onPress={() => setPhotoCommSelect(true)}
              >
                <MaterialIcons
                  style={{ textAlign: "center", justifyContent: "center" }}
                  name="insert-photo"
                  size={35}
                  color={colors.light}
                />
              </Pressable>
            </View>
            <View style={styles.bootombox}>
              <Pressable
                style={styles.buttonbox}
                onPress={() => setPhotoCommSelect(false)}
              >
                <MaterialIcons
                  style={{ textAlign: "center", justifyContent: "center" }}
                  name="comment"
                  size={35}
                  color={colors.light}
                />
              </Pressable>
            </View>
            <View style={styles.bootombox}>
              <Pressable
                style={styles.buttonbox}
                onPress={() => {
                  setViewOneSetById && setViewOneSetById(null)
                  setSetIdforOneItem && setSetIdforOneItem(null)
                }}
              >
                <MaterialIcons
                  style={{ textAlign: "center", justifyContent: "center" }}
                  name="keyboard-backspace"
                  size={40}
                  color={colors.light}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.inputBottoLine}></View>
        </>
      ) : (
        <ThemedText type="subtitle" style={styles.colorWhite}>
          ERROR DATA FETCH
        </ThemedText>
      )}
    </View>
  )
}

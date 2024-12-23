import { ThemedText } from "@/components/ThemedText"
import { View, Text, Image, Pressable, Button, ScrollView } from "react-native"
import { default as styles } from "./styles.oneSetPage"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import getOneSetsBySetId from "../allset/api/api.getOneSetBySetId"
import { Link } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/constants/Colors"
import FotoScrollView from "./fotoScrollView"
import Weather from "../../widgets/weather/weather"
import { MapResponse } from "../allset/api/api.getAllset"
import CommentScrollView from "./comments/commetsSetPage"
import UploadPhoto from "../upload/upload.component"
import { CommentItem } from "./comments/type.comment"
import { getComments } from "./api/api.comment"
import Preloader from "@/components/preloader/preloader"
import { useAtom } from "jotai"
import { userAtom } from "@/store/store.state"
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context"

type OneSetPage = {
  login: string | undefined
  setId: number
  setViewOneSetById?: Dispatch<SetStateAction<number | null>>
  setSetIdforOneItem?: React.Dispatch<React.SetStateAction<number | null>>
}

export default function OneSetPage(props: OneSetPage) {
  const { setId, setViewOneSetById, setSetIdforOneItem, login } = props
  const [atomUserState] = useAtom(userAtom)
  const [oneSet, setOneSet] = useState<MapResponse | null>(null)
  const [photoSelect, setPhotoSelect] = useState<boolean>(true)
  const [photoUploadSelect, setPhotoUploadSelect] = useState<boolean>(false)
  const [commentSelect, setCommentSelect] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [dataLoadComment, setDataLoadComment] = useState<
    CommentItem[] | string
  >()
  const insets = useSafeAreaInsets()

  useEffect(() => {
    if (setId) {
      const comments = getComments(setId)
      comments.then((comments) => setDataLoadComment(comments))
    }
  }, [isLoading, setId])

  async function GetSet(setId: number) {
    const data = await getOneSetsBySetId(setId)
    if (!data.message) {
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
    <View style={{ ...styles.containeset }}>
      {oneSet ? (
        <SafeAreaProvider>
          <View
            style={{
              height: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: insets.top + 5,
            }}
          >
            <View style={styles.ScrollViewbox}>
              <ScrollView
                contentContainerStyle={{ alignItems: "flex-start" }}
                style={styles.contentbox}
              >
                <ThemedText style={{ color: colors.deepgray }} type="subtitle">
                  Назва/Локація:
                </ThemedText>
                <ThemedText type="title">{oneSet.title}</ThemedText>
                <View style={styles.widgetbox}>
                  <View style={styles.linkGoogle}>
                    <Link
                      href={`https://www.google.com/maps?ll=${oneSet.coords[0]},${oneSet.coords[1]}&q=${oneSet.coords[0]},${oneSet.coords[1]}`}
                    >
                      <View style={styles.coordslinkbox}>
                        <View>
                          <ThemedText
                            style={styles.widgetboxtext}
                            type="default"
                          >
                            Відкрити в
                          </ThemedText>
                          <ThemedText
                            style={styles.widgetboxtext}
                            type="default"
                          >
                            Google map
                          </ThemedText>
                        </View>
                        <MaterialIcons
                          name="location-pin"
                          size={40}
                          color={colors.dark}
                        />
                      </View>
                    </Link>
                  </View>
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
            {photoSelect && (
              <FotoScrollView img={oneSet.img} setId={oneSet.setID} />
            )}
            {login && commentSelect && (
              <CommentScrollView
                login={login}
                setId={setId}
                dataLoad={dataLoadComment}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
              />
            )}
            {login && photoUploadSelect && <UploadPhoto setID={setId} />}

            <View style={styles.inputBottoLine}></View>
            <View style={styles.buttonSelectBox}>
              <View style={styles.bootombox}>
                <Pressable
                  style={styles.buttonbox}
                  onPress={() => {
                    setPhotoSelect(true)
                    setPhotoUploadSelect(false)
                    setCommentSelect(false)
                  }}
                >
                  <MaterialIcons
                    style={{ textAlign: "center", justifyContent: "center" }}
                    name="insert-photo"
                    size={35}
                    color={colors.light}
                  />
                </Pressable>
              </View>
              {oneSet.login === atomUserState.login && (
                <View style={styles.bootombox}>
                  <Pressable
                    style={styles.buttonbox}
                    onPress={() => {
                      {
                        setPhotoSelect(false)
                        setPhotoUploadSelect(true)
                        setCommentSelect(false)
                      }
                    }}
                  >
                    <MaterialIcons
                      style={{
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                      name="add-photo-alternate"
                      size={40}
                      color={colors.light}
                    />
                  </Pressable>
                </View>
              )}
              <View style={styles.bootombox}>
                {dataLoadComment?.length ? (
                  <View style={styles.commLenght}>
                    <ThemedText
                      style={styles.commLenghttext}
                      type="subtitlelite"
                    >
                      {dataLoadComment.length}
                    </ThemedText>
                  </View>
                ) : (
                  <></>
                )}
                <Pressable
                  style={styles.buttonbox}
                  onPress={() => {
                    setPhotoSelect(false)
                    setPhotoUploadSelect(false)
                    setCommentSelect(true)
                  }}
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
          </View>
        </SafeAreaProvider>
      ) : (
        <View style={styles.containeset}>
          <Preloader />
        </View>
      )}
    </View>
  )
}

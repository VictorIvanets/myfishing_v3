import { useEffect, useState } from "react"
import { PREFIX, PREFIX_STATIC } from "@/constants/constants"
//@ts-ignore next line
import axios, { AxiosError } from "react-native-axios"
import { Image, ScrollView, View } from "react-native"
import { default as styles } from "../styles.oneSetPage"
import Preloader from "../../preloader/preloader"
import { ThemedText } from "../../ThemedText"
import { CommentItem } from "./type.comment"
import { getComments } from "./fethComment"
import CommentItemComponent from "./commentItem"
import AddComponentSetPege from "./addcomment"

interface ScrollProps {
  login: string
  setId: number
}

export default function CommentScrollView({ login, setId }: ScrollProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [dataLoad, setDataLoad] = useState<CommentItem[] | string>()

  useEffect(() => {
    if (setId) {
      const comments = getComments(setId)
      comments.then((comments) => setDataLoad(comments))
    }
  }, [isLoading, setId])

  return (
    <>
      {dataLoad ? (
        <View style={styles.photobox}>
          <ScrollView contentContainerStyle={styles.photoboxContentContainer}>
            {Array.isArray(dataLoad)
              ? dataLoad.map((com) => (
                  <CommentItemComponent
                    key={com.commId}
                    data={com}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                    thisLogin={login}
                  />
                ))
              : "ERROR LOADING"}
          </ScrollView>
          <AddComponentSetPege
            login={login}
            setId={setId}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        </View>
      ) : (
        <Preloader />
      )}
    </>
  )
}

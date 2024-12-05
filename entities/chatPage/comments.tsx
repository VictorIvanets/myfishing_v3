import { memo, useEffect } from "react"
import { CommentData, UserData } from "./glq_hooks/chat.types"
import { View, ScrollView, Pressable } from "react-native"
import { ThemedText } from "../../components/ThemedText"
import { stylesChat as styles } from "@/entities/chatPage/styles.chatpage"
import { colors } from "@/constants/Colors"
import AntDesign from "@expo/vector-icons/AntDesign"
import Preloader from "../../components/preloader/preloader"
import { LinearGradient } from "expo-linear-gradient"

interface CommentComponentProps {
  login: string
  allCommentData: CommentData[]
  loading: boolean
  deletedCommentById: (comId: string) => void
}

export const Components = (props: CommentComponentProps) => {
  const { allCommentData, login, deletedCommentById } = props

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[colors.deepdark, colors.dark, colors.deepdark]}
    >
      {login ? (
        <>
          {allCommentData.map((i) => {
            return (
              <View
                key={i.comId}
                style={login === i.user ? styles.commentactive : styles.comment}
              >
                {login === i.user && (
                  <Pressable
                    onPress={() => deletedCommentById(i.comId)}
                    style={styles.btndel}
                  >
                    <AntDesign name="closecircle" size={27} color="black" />
                  </Pressable>
                )}
                <ThemedText style={{ color: colors.light }} type="subtitle">
                  {i.user}
                </ThemedText>
                <ThemedText style={{ color: colors.deepdark }} type="default">
                  {i.comment}
                </ThemedText>
                <View style={styles.textcontainer}>
                  <ThemedText style={styles.commentText}>
                    {new Date(i.createdAt).getDate()}.
                    {new Date(i.createdAt).getMonth() + 1}.
                    {new Date(i.createdAt).getFullYear()}
                  </ThemedText>
                  <ThemedText style={styles.commentText}>
                    {new Date(i.createdAt).getHours()}.
                    {new Date(i.createdAt).getMinutes()}
                  </ThemedText>
                </View>
              </View>
            )
          })}
        </>
      ) : (
        <Preloader />
      )}
    </LinearGradient>
  )
}

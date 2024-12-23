import { View, StatusBar, Pressable, ScrollView } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { stylesChat as styles } from "@/entities/chatPage/styles.chatpage"
import { colors } from "@/constants/Colors"
import {
  useDelComment,
  useQueryAllComment,
  useSubscribeForComment,
} from "./glq_hooks/chatComment.hook"
import {
  useCheckIn,
  useCheckOut,
  useSubscribeForCheck,
} from "./glq_hooks/chatUser.hook"
import { useEffect, useRef, useState } from "react"
import { CommentData } from "./glq_hooks/chat.types"
import { UserComponent } from "./UserComponent"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Components } from "./comments"
import AddCommentComponent from "./addComment"
import { Audio } from "expo-av"
import { router } from "expo-router"

interface ChatpageProps {
  login: string
  userId: string
}

export default function ChatPage({ login, userId }: ChatpageProps) {
  const { deletedCommentById } = useDelComment()
  const { loading, allComm } = useQueryAllComment()
  const { subdata } = useSubscribeForCheck()
  const { subdataComment } = useSubscribeForComment()
  const [allCommentData, setAllCommentData] = useState<CommentData[]>([])
  const { userOutByUserId } = useCheckOut()
  const { userInByUserName } = useCheckIn()
  const scrollViewRef = useRef<ScrollView>(null)

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sound/minimal-pop-click-ui-1-198301.mp3")
    )
    await sound.playAsync()
  }

  const scrollToEnd = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({
        animated: true,
      })
    }
  }

  useEffect(() => {
    scrollToEnd()
    playSound()
  }, [allCommentData])

  const outChat = (userId: string) => {
    userOutByUserId(userId)
  }
  const inChat = (login: string, userId: string) => {
    userInByUserName(login, userId)
  }
  
// Kostyli
  useEffect(() => {
    inChat(login, userId)
    setTimeout(() => {
      if (!subdata) {
        inChat("load...", "00000")
      }
    }, 300)
  }, [login, userId])

  useEffect(() => {
    setTimeout(() => {
      outChat("00000")
      scrollToEnd()
    }, 400)
    return () => outChat(userId)
  }, [])

  useEffect(() => {
    if (subdataComment) setAllCommentData(subdataComment)
    else {
      setAllCommentData(allComm)
    }
  }, [subdataComment, allComm])

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.content}>
        <View style={styles.headercontent}>
          <ThemedText type="subtitle">ЧАТ</ThemedText>
          <Pressable
            style={styles.buttonbox}
            onPress={() => {
              outChat(userId)
              subdata &&
                subdata.forEach((i) => {
                  if (i.userId === userId) {
                    outChat(i.userId)
                  }
                })
              router.replace("/(tabs)")
            }}
          >
            <View style={styles.btnitem}>
              <ThemedText type="default">EXIT</ThemedText>
            </View>

            <View style={styles.btnitem}>
              <Ionicons
                style={styles.icon}
                name="exit-outline"
                size={30}
                color={colors.light}
              />
            </View>
          </Pressable>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.userboxContentContainer}
          style={{ height: 40 }}
        >
          {subdata && (
            <UserComponent userId={userId} login={login} subdata={subdata} />
          )}
        </ScrollView>
        <ScrollView ref={scrollViewRef} style={styles.commentsbox}>
          {allCommentData && (
            <Components
              allCommentData={allCommentData}
              login={login}
              deletedCommentById={deletedCommentById}
              loading={loading}
            />
          )}
        </ScrollView>
      </View>
      <View style={styles.addcommentsbox}>
        <AddCommentComponent login={login} />
      </View>
    </View>
  )
}

import { memo, useEffect } from "react"
import { UserData } from "./glq_hooks/chat.types"
import { View, ScrollView } from "react-native"
import { ThemedText } from "../ThemedText"
import { stylesChat as styles } from "@/components/chatPage/styles.chatpage"

interface userComponentProps {
  login: string
  userId: string
  subdata: UserData[]
  outChat: (userId: string) => void
  inChat: (login: string, userId: string) => void
  setSelectUser: (user: string) => void
}

export const UserComponent = (props: userComponentProps) => {
  const { login, subdata, outChat, setSelectUser, userId, inChat } = props

  useEffect(() => {
    const check = subdata.filter((i) => i.userId == userId)

    if (check.length > 1) {
      subdata.forEach((i) => {
        i.userId === userId
        outChat(userId)
      })
      inChat(login, userId)
    }
  }, [])

  return (
    <View style={styles.userin}>
      {subdata.map((i) => (
        <View
          key={i.userId}
          style={login === i.user ? styles.userinitemactive : styles.userinitem}
        >
          <ThemedText type="default">{i.user}</ThemedText>
        </View>
      ))}
    </View>
  )
}

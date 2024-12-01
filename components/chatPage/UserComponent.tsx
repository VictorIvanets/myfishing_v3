import { memo } from "react"
import { UserData } from "./glq_hooks/chat.types"
import { View, ScrollView } from "react-native"
import { ThemedText } from "../ThemedText"
import { stylesChat as styles } from "@/components/chatPage/styles.chatpage"

interface userComponentProps {
  login: string
  userId: string
  subdata: UserData[]
  outChat: (userId: string) => void
  setSelectUser: (user: string) => void
}

export const UserComponent = (props: userComponentProps) => {
  const { login, subdata, outChat, setSelectUser } = props

  let decrement = 1

  return (
    <View style={styles.userin}>
      {subdata.map((i) => {
        const add = decrement++
        return (
          <View
            key={i.userId + add}
            style={
              login === i.user ? styles.userinitemactive : styles.userinitem
            }
          >
            <ThemedText type="default">{i.user}</ThemedText>
          </View>
        )
      })}
    </View>
  )
}

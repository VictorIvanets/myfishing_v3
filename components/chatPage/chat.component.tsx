import { View, StatusBar } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { stylesChat as styles } from "@/components/chatPage/styles.chatpage"
import { colors } from "@/constants/Colors"

interface ChatpageProps {
  login: string
}

export default function ChatPage({ login }: ChatpageProps) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <ThemedText type="subtitle">MY CHAT PAGE: {login}</ThemedText>
    </View>
  )
}

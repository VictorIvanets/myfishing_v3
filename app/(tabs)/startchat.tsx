import { View, StatusBar } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { default as styles } from "@/components/chatPage/styles.chatpage"
import { Link } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
import { colors } from "@/constants/Colors"
import Entypo from "@expo/vector-icons/Entypo"

export default function StartPage() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Link style={styles.buttonbox} href={"/(load)/(chat)"}>
        <ThemedText style={styles.colorWhite} type="subtitle">
          ENTER CHAT
        </ThemedText>
        <Entypo
          style={styles.icon}
          name="chat"
          size={150}
          color={colors.light}
        />
      </Link>
    </View>
  )
}

import { Image, View, StatusBar, Pressable } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { stylesStartPage as styles } from "@/components/SartPage/styles.startpage"
import { exitLogin } from "@/hooks/exitApp"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <ThemedText style={styles.colorWhite}>StartPage</ThemedText>
      <Pressable onPress={() => exitLogin()}>
        <ThemedText type="subtitle">EXIT</ThemedText>
      </Pressable>
    </View>
  )
}

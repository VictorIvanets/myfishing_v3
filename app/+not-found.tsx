import { Link, Stack } from "expo-router"
import { StyleSheet, View } from "react-native"

import { ThemedText } from "@/components/ThemedText"

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <ThemedText type="title">ERROR</ThemedText>
        <Link href="/(load)" style={styles.link}>
          <ThemedText type="link">RETURN TO START</ThemedText>
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})

import React from "react"
import { ActivityIndicator, StyleSheet } from "react-native"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"

const Preloader = () => (
  <SafeAreaProvider>
    <SafeAreaView style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={200} color="rgba(0, 98, 128, 0.7)" />
    </SafeAreaView>
  </SafeAreaProvider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
})

export default Preloader

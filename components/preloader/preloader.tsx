import React from "react"
import { ActivityIndicator, StyleSheet } from "react-native"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { colors } from "@/constants/Colors"

const Preloader = () => (
  <SafeAreaProvider>
    <SafeAreaView style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={200} color={colors.light} />
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

export const PreloaderMin = () => (
  <SafeAreaProvider>
    <SafeAreaView style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={40} color={colors.light} />
    </SafeAreaView>
  </SafeAreaProvider>
)

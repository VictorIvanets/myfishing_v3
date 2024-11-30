import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import "react-native-reanimated"
import * as NavigationBar from "expo-navigation-bar"
import { useColorScheme } from "@/hooks/useColorScheme"
import { colors } from "@/constants/Colors"

SplashScreen.preventAutoHideAsync()
NavigationBar.setBackgroundColorAsync(colors.deepdark)

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Raleway: require("../assets/fonts/Raleway-VariableFont_wght.ttf"),
    RalewayBold: require("../assets/fonts/Raleway-Bold.ttf"),
    RalewayLight: require("../assets/fonts/Raleway-Light.ttf"),
    RalewayRegular: require("../assets/fonts/Raleway-Regular.ttf"),
    RalewayItalic: require("../assets/fonts/Raleway-Italic.ttf"),
    HelveticaNeue: require("../assets/fonts/HelveticaNeueCyr-Light.ttf"),
    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(load)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  )
}

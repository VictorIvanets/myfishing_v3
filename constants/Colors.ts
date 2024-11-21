import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOCAL_LOGIN, LOCAL_THEME } from "./constants"

export const colors = {
  light: "#00b4ba",
  lightText: "#cecece",
  dark: "#014e63",
  deepdark: "#03171c",
  deepgray: "#4f4f4f",
  gray: "#b8b8b8",
}

const tintColorLight = "#0a7ea4"
const tintColorDark = "#fff"

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
}

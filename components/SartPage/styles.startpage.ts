import { StyleSheet } from "react-native"

import { colors } from "@/constants/Colors"

export const stylesStartPage = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.deepdark,
  },
  maifon: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  colorWhite: {
    color: "white",
    textAlign: "center",
  },
})

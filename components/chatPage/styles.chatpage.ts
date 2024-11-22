import { StyleSheet } from "react-native"

import { colors } from "@/constants/Colors"

export const stylesChat = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.deepdark,
  },
  content: {
    width: "100%",
    height: "100%",
    padding: 20,
  },

  buttonbox: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  colorWhite: {
    color: colors.lightText,
    textAlign: "center",
  },
  icon: {
    justifyContent: "center",
    textAlign: "center",
  },
})

const stylesChatPageStart = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.deepdark,
  },
  content: {
    width: "100%",
    height: "100%",
    padding: 20,
  },

  buttonbox: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  colorWhite: {
    color: colors.lightText,
    textAlign: "center",
  },
  icon: {
    justifyContent: "center",
    textAlign: "center",
  },
})

export default stylesChatPageStart

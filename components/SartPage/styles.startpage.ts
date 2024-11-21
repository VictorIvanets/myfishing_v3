import { StyleSheet } from "react-native"

import { colors } from "@/constants/Colors"

export const stylesStartPage = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.deepdark,
  },
  content: {
    width: "100%",
    padding: 20,
  },
  contentText: {
    textAlign: "left",
    lineHeight: 18,
  },
  contentTextMin: {
    textAlign: "center",
    marginBottom: 2,
  },
  contentTitle: {
    textAlign: "left",
    color: colors.light,
    marginTop: 10,
  },

  buttonbox: {
    flexDirection: "row",
    textAlign: "center",
    width: 300,
    height: 50,

    borderRadius: 7,
    backgroundColor: colors.dark,
    marginBottom: 5,
  },
  btnitem: {
    width: "20%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  Linkbox: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: 300,
    height: 50,
    gap: 10,
    borderRadius: 7,
    backgroundColor: colors.dark,
    marginBottom: 5,
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

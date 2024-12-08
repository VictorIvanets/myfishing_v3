import { StyleSheet } from "react-native"

import { borderRadiusMyf, colors } from "@/constants/Colors"

export const stylesStartPage = StyleSheet.create({
  container: {
    paddingTop: 35,
    width: "100%",
    height: "100%",
    justifyContent: "center",
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
  contentTextTitle: {
    textAlign: "left",
    marginBottom: 7,
    color: colors.light,
  },
  buttonbox: {
    flexDirection: "row",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    width: 300,
    height: 50,
    gap: 5,
    borderRadius: borderRadiusMyf,
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
    borderRadius: borderRadiusMyf,
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
  appLogoBox: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  appLogo: {
    height: 80,
  },
})

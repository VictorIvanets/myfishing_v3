import { StyleSheet } from "react-native"

import { borderRadiusMyf, colors } from "@/constants/Colors"

const stylesMenuStartPage = StyleSheet.create({
  box: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // backgroundColor: colors.gray,
    zIndex: 2,
  },
  container: {
    // flex: 1,
    padding: 20,
    width: 300,
    height: "100%",
    borderBottomRightRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.black,
    position: "absolute",
    zIndex: 5,
    alignSelf: "flex-start",
    marginTop: 30,

    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },

  closemenu: {
    width: 70,
    height: 60,
    position: "absolute",
    backgroundColor: colors.black,
    top: 0,
    right: -50,
    borderRadius: 15,
    justifyContent: "center",
    paddingRight: 5,
    alignItems: "flex-end",
  },

  content: {
    width: "100%",
    padding: 10,
  },
  contentText: {
    textAlign: "left",
    color: colors.lightText,
    marginBottom: 7,
  },
  contentTextTitle: {
    textAlign: "left",
    marginBottom: 7,
    color: colors.light,
    marginTop: 15,
  },
  contentTextMin: {
    textAlign: "center",
    marginBottom: 2,
    color: colors.lightText,
  },
  contentTitle: {
    textAlign: "left",
    color: colors.lightText,
    marginTop: 10,
  },
  btns: {
    width: "100%",
    height: 350,
    padding: 0,
    gap: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  buttonbox: {
    width: "100%",
    height: 50,
    gap: 5,

    // backgroundColor: colors.dark,
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
    width: "100%",
    height: 50,
    gap: 10,
    borderRadius: borderRadiusMyf,
    backgroundColor: colors.dark,
    marginBottom: 5,
  },
  colorWhite: {
    textAlign: "center",
  },
  icon: {
    justifyContent: "center",
    textAlign: "center",
  },
})

export default stylesMenuStartPage

import { colors } from "@/constants/Colors"
import { StyleSheet } from "react-native"

const stylesOneSet = StyleSheet.create({
  containermarker: {
    backgroundColor: colors.deepdark,
    width: "100%",
    height: "100%",
    padding: 7,
    paddingTop: 20,
    paddingBottom: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentbox: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  photobox: {
    width: "100%",
  },
  photoboxContentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  foto: {
    width: "100%",
    backgroundColor: colors.light,
    marginBottom: 10,
  },
  bootombox: {
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  colorWhite: {
    color: colors.lightText,
    textAlign: "center",
  },
  colorLink: {
    color: "rgba(0, 98, 128, 0.9)",
    textAlign: "center",
  },
  coordslinkbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 60,
    gap: 10,
    backgroundColor: colors.light,
    borderRadius: 5,
  },
  buttonbox: {
    textAlign: "center",
    justifyContent: "center",
    width: 300,
    height: 50,
    borderRadius: 7,
    backgroundColor: colors.dark,
    marginBottom: 10,
  },
  inputBottoLine: {
    backgroundColor: "rgba(0, 98, 128, 0.9)",
    width: "100%",
    height: 1,
    marginTop: 10,
  },
  weatherbox: {
    width: 160,
    height: 60,
    padding: 5,
    backgroundColor: colors.light,
    borderRadius: 5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  widgetbox: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignContent: "center",
  },
  widgetText: {
    color: colors.deepdark,
  },
})

export default stylesOneSet

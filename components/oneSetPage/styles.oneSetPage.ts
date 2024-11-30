import { colors } from "@/constants/Colors"
import { StyleSheet } from "react-native"

const stylesOneSet = StyleSheet.create({
  containermarker: {
    backgroundColor: colors.deepdark,
    width: "100%",
    height: "100%",
    paddingTop: 25,
    justifyContent: "space-between",
    alignItems: "center",
  },

  ScrollViewbox: {
    width: "100%",
    height: "27%",
  },

  contentbox: {
    paddingHorizontal: 10,
    width: "100%",
    height: 200,
  },
  photobox: {
    width: "100%",
    height: "60%",
  },
  photoboxContentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bootombox: {
    width: 80,
    height: 40,
    alignItems: "center",
  },

  foto: {
    width: "100%",
    backgroundColor: colors.light,
    marginBottom: 10,
  },
  colorWhite: {
    color: colors.lightText,
    lineHeight: 18,
  },
  colorLink: {
    color: "rgba(0, 98, 128, 0.9)",
    textAlign: "center",
  },
  coordslinkbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    width: 150,
    height: 60,
    gap: 5,
    backgroundColor: colors.light,
    borderRadius: 5,
  },
  buttonSelectBox: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-around",
    gap: 10,
  },
  buttonbox: {
    textAlign: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 7,
    backgroundColor: colors.dark,
  },
  inputBottoLine: {
    backgroundColor: "rgba(0, 98, 128, 0.9)",
    width: "100%",
    height: 1,
    marginVertical: 3,
  },
  weatherbox: {
    width: 160,
    height: 60,
    padding: 5,
    backgroundColor: colors.light,
    borderRadius: 5,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 7,
  },
  widgetbox: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignContent: "center",
  },
  widgetText: {
    color: colors.deepdark,
    fontFamily: "RobotoRegular",
    fontWeight: 400,
  },
  comment: {
    width: "95%",
    borderColor: colors.deepgray,
    borderWidth: 2,
    backgroundColor: colors.gray,
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  commentText: {
    color: colors.deepdark,
    textAlign: "left",
  },
  btndel: {
    width: 27,
    height: 27,
    backgroundColor: colors.light,
    position: "absolute",
    top: -7,
    right: -3,
    borderRadius: 27,
    zIndex: 2,
  },
  addcommentbox: {
    width: "100%",
    height: 70,
    padding: 5,
  },
  addcommentscontetnt: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
  },
  inputBlockText: {
    width: "80%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: colors.gray,
  },
  sendBlockText: {
    width: "15%",
    height: "100%",
    borderRadius: 5,
    justifyContent: "center",
  },
  inputText: {
    color: "rgba(30, 30, 30)",
    paddingVertical: 3,
    paddingHorizontal: 10,
    paddingBottom: 0,
    fontSize: 16,
    zIndex: 2,
  },
  linkUpload: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
})

export default stylesOneSet

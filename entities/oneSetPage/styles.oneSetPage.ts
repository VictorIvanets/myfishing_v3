import { borderRadiusMyf, colors } from "@/constants/Colors"
import { StyleSheet } from "react-native"

const stylesOneSet = StyleSheet.create({
  containeset: {
    backgroundColor: colors.deepdark,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  ScrollViewbox: {
    width: "100%",
    height: "28%",
  },

  contentbox: {
    paddingHorizontal: 10,
    width: "100%",
    height: 200,
  },
  photobox: {
    width: "100%",
    height: "57%",
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

  commLenght: {
    position: "absolute",
    width: 20,
    height: 20,
    // justifyContent: "center",
    alignItems: "center",
    top: -5,
    right: 0,
    borderRadius: 15,
    backgroundColor: colors.light,
    zIndex: 3,
    padding: 0,
    borderWidth: 1,
  },
  commLenghttext: {
    fontSize: 13,
    color: colors.deepdark,
    fontFamily: "RobotoBold",
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
    borderRadius: 10,
    backgroundColor: colors.dark,
  },
  inputBottoLine: {
    backgroundColor: "rgba(0, 98, 128, 0.9)",
    width: "100%",
    height: 1,
    marginVertical: 3,
  },
  linkGoogle: {
    width: "47%",
    height: 65,
  },
  coordslinkbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
    gap: 5,
    backgroundColor: colors.light,
    borderRadius: 10,
  },
  weatherbox: {
    width: "47%",
    height: 65,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: colors.light,
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 7,
  },
  widgetbox: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  widgetboxtext: {
    color: colors.dark,
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
    borderRadius: 10,
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
    borderRadius: 10,
    backgroundColor: colors.gray,
  },
  sendBlockText: {
    width: "15%",
    height: "100%",
    borderRadius: borderRadiusMyf,
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

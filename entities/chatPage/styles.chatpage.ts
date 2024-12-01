import { StyleSheet } from "react-native"

import { colors } from "@/constants/Colors"

export const stylesChat = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.deepdark,
  },
  content: {
    width: "100%",
    height: "85%",
    padding: 20,
    paddingVertical: 5,
    justifyContent: "space-between",
    // alignItems: "center",
  },

  userboxContentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addcommentsbox: {
    width: "100%",
    height: "15%",
    backgroundColor: colors.deepdark,
    padding: 5,
  },
  userin: {
    height: 30,
    flexDirection: "row",
    gap: 10,
  },
  userinitem: {
    height: 30,
    backgroundColor: colors.deepdark,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: colors.dark,
    borderWidth: 2,
  },
  userinitemactive: {
    height: 30,
    backgroundColor: colors.dark,
    paddingHorizontal: 10,
    borderColor: colors.deepdark,
    borderWidth: 2,
    borderRadius: 5,
  },
  commentsbox: {
    width: "100%",
    height: "90%",
    backgroundColor: colors.dark,
  },

  headercontent: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  buttonbox: {
    flexDirection: "row",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    width: 110,
    height: 40,
    borderRadius: 7,
    marginBottom: 5,
    alignSelf: "flex-end",
  },
  btnitem: {
    width: 50,
    height: 50,
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

  comment: {
    width: "80%",
    backgroundColor: colors.lightText,
    borderColor: colors.deepdark,
    borderWidth: 2,
    borderRadius: 12,
    borderTopRightRadius: 0,
    padding: 5,
    marginBottom: 15,
    alignSelf: "flex-end",
  },
  commentactive: {
    width: "80%",
    backgroundColor: colors.lightText,
    borderColor: colors.deepdark,
    borderWidth: 2,
    borderRadius: 12,
    borderBottomLeftRadius: 0,
    padding: 5,
    marginBottom: 15,
  },
  textcontainer: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  commentText: {
    color: colors.deepdark,
    fontFamily: "SpaceMono",
    fontSize: 12,
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
  addcommentscontetnt: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    zIndex: 2,
  },
  inputBlockText: {
    width: "75%",
    height: "100%",
    borderRadius: 7,
    backgroundColor: colors.gray,
  },
  sendBlockText: {
    width: "20%",
    height: "100%",
    borderRadius: 7,
    justifyContent: "center",
    // alignContent: "center",
    // alignItems: "center",
  },
  inputText: {
    color: "rgba(30, 30, 30, 0.8)",
    paddingVertical: 3,
    paddingHorizontal: 10,
    paddingBottom: 0,
    fontSize: 20,
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

import { StyleSheet } from "react-native"

export const stylesregister = StyleSheet.create({
  container: {
    // width: "100%",
    // height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  linkFoLoginText: {
    textAlign: "center",
    color: "#8accdd",
  },
  submitbox: {
    width: "100%",
    flex: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  submitboxInput: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    width: "100%",
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
  },
  backbox: {
    flex: 1,
  },

  colorWhite: {
    color: "white",
    textAlign: "center",
    fontFamily: "RalewayRegular",
  },
  input: {
    color: "rgba(255, 255, 255, 0.8)",
    height: 50,
    backgroundColor: "none",
    padding: 10,
    fontSize: 20,
    width: "100%",
  },
  inputLabel: {
    color: "rgba(255, 255, 255, 0.5)",
    position: "absolute",
    top: 13,
    left: 10,
    fontSize: 17,
    zIndex: -1,
  },
  inputLabelActiv: {
    color: "rgba(255, 255, 255, 0.5)",
    position: "absolute",
    top: -10,
    left: 10,
    fontSize: 12,
    zIndex: -1,
  },
  inputpass: {
    width: "80%",
    height: 40,
    marginBottom: 20,
    borderRadius: 7,
  },
  inputBottoLine: {
    backgroundColor: "rgba(0, 98, 128, 0.9)",
    width: "100%",
    height: 1,
  },
  buttonbox: {
    textAlign: "center",
    justifyContent: "center",
    width: "80%",
    height: 50,
    borderRadius: 7,
    backgroundColor: "#071a22ba",
    marginBottom: 10,
  },

  buttonboxback: {
    textAlign: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    borderRadius: 7,
    backgroundColor: "none",
  },
  maifon: {
    width: "100%",

    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  appLogoBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonboxLogIn: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  appLogo: {
    height: 108,
    width: 200,
  },
  mainscroll: {
    // flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: 30,
    paddingBottom: 30,
  },
})

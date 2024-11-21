import { colors } from "@/constants/Colors"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.deepdark,
  },
  linkFoLoginText: {
    textAlign: "center",
    color: "#8accdd",
  },
  submitbox: {
    width: "100%",
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
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

  titleContainer: {
    backgroundColor: "red",
    flex: 1,
    gap: 8,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: "black",
    flex: 9,
    gap: 8,
    padding: 10,
  },
  colorWhiteMB30: {
    color: "white",
    marginBottom: 5,
    fontFamily: "",
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
    zIndex: 2,
  },
  inputLabel: {
    color: "white",
    position: "absolute",
    top: 13,
    left: 10,
    fontSize: 17,
    zIndex: 1,
  },
  inputLabelActiv: {
    position: "absolute",
    top: -10,
    left: 10,
    fontSize: 12,
    zIndex: 1,
  },
  inputpass: {
    width: "80%",
    height: 40,
    marginBottom: 30,
    borderRadius: 7,
  },
  inputBottoLine: {
    backgroundColor: colors.light,
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
    marginTop: 30,
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
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  appLogo: {
    height: 108,
    width: 200,
  },
  buttonboxres: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 120,
    height: 130,
    borderRadius: 7,
    // backgroundColor: colors.dark,
    marginBottom: 10,
  },
  buttonboxlink: {
    width: 120,
    height: 140,
  },
  icon: {
    width: 70,
    height: 70,
  },
})

export default styles

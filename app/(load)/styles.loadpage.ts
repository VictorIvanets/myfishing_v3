import { borderRadiusMyf, colors } from "@/constants/Colors"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.deepdark,
  },
  colorWhite: {
    color: "white",
    textAlign: "center",
  },
  linkFoLogin: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
    width: "100%",
    // height: 50,
  },
  linkFoLoginText: {
    textAlign: "center",
    color: "#8accdd",
    fontFamily: "Raleway",
  },
  contentbox: {
    flex: 1,
  },
  appLogoBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appLogo: {
    height: 108,
    width: 200,
  },
  maifon: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  buttonbox: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 120,
    height: 130,
    borderRadius: borderRadiusMyf,
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

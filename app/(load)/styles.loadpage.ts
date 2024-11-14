import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  colorWhite: {
    color: "white",
    textAlign: "center",
  },
  linkFoLogin: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
    width: 150,
    height: 50,
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
    bottom: 0,
    position: "absolute",
  },
  maifon: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
})

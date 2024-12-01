import { colors } from "@/constants/Colors"
import { StyleSheet } from "react-native"

export const stylesMapPage = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.deepdark,
  },
  contentbox: {
    width: "100%",
    height: "100%",
    flex: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  buttonbox: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  button: {
    textAlign: "center",
    justifyContent: "center",
    width: "45%",
    height: 40,
    borderRadius: 2,
    backgroundColor: colors.dark,
  },
  buttonactyve: {
    textAlign: "center",
    justifyContent: "center",
    width: "45%",
    height: 40,
    borderRadius: 2,
    backgroundColor: colors.light,
  },
  colorWhite: {
    color: "white",
    textAlign: "center",
  },
})

export const stylesMapMarker = StyleSheet.create({
  containermarker: {
    borderRadius: 5,
    backgroundColor: colors.deepdark,
    width: "100%",
    height: "100%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1000,
  },
  colorWhite: {
    color: "white",
    textAlign: "center",
  },
  colorLink: {
    color: colors.light,
    textAlign: "center",
  },
})

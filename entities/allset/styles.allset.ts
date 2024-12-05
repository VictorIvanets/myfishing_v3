import { borderRadiusMyf, colors } from "@/constants/Colors"
import { StyleSheet } from "react-native"

const stylesAllset = StyleSheet.create({
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

  buttondel: {
    textAlign: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
  },
  buttondelIcon: {
    textAlign: "center",
    justifyContent: "center",
  },
  buttonReload: {
    width: "100%",
    height: 40,
    borderTopColor: colors.deepdark,
    borderTopWidth: 7,
    textAlign: "center",
    justifyContent: "center",
  },

  buttoncoords: {
    textAlign: "left",
    justifyContent: "center",
    width: "80%",
    height: 36,
  },
  buttonactyve: {
    textAlign: "center",
    justifyContent: "center",
    width: "43%",
    height: 40,
    borderRadius: borderRadiusMyf,
    backgroundColor: "#00474f",
  },
  colorWhite: {
    color: colors.lightText,
    textAlign: "center",
  },
  colorLight: {
    color: colors.light,
    textAlign: "left",
  },
  buttonbox: {
    marginTop: 10,
    paddingHorizontal: 5,
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 40,
    alignContent: "center",
    justifyContent: "space-between",
    borderTopWidth: 2,
    borderTopColor: colors.deepgray,
    borderRadius: 15,
  },
  itemText: {
    textAlign: "left",
  },

  itemset: {
    width: "100%",
    height: "auto",
    backgroundColor: colors.dark,
    borderRadius: 10,
    padding: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.black,
  },
})

export default stylesAllset

import { colors } from "@/constants/Colors"
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
    borderRadius: 2,
    backgroundColor: colors.dark,
  },
  buttondelIcon: {
    textAlign: "center",
    justifyContent: "center",
  },
  buttonReload: {
    width: "100%",
    height: 40,
    backgroundColor: colors.dark,
    borderTopColor: colors.deepdark,
    borderTopWidth: 7,
    textAlign: "center",
    justifyContent: "center",
  },

  buttoncoords: {
    textAlign: "center",
    justifyContent: "center",
    width: "75%",
    height: 36,
    borderRadius: 2,
    backgroundColor: colors.dark,
  },
  buttonactyve: {
    textAlign: "center",
    justifyContent: "center",
    width: "43%",
    height: 40,
    borderRadius: 2,
    backgroundColor: "#00474f",
  },
  colorWhite: {
    color: colors.lightText,
    textAlign: "center",
  },
  buttonbox: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 40,
    alignContent: "center",
    justifyContent: "space-between",
  },
  itemText: {
    textAlign: "left",
  },

  itemset: {
    width: "100%",
    height: "auto",
    borderColor: colors.dark,
    borderRadius: 5,
    borderWidth: 2,
    padding: 8,
    marginBottom: 15,
  },
})

export default stylesAllset

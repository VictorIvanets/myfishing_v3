import { StyleSheet } from "react-native"
import { borderRadiusMyf, colors } from "@/constants/Colors"

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "57%",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  Linkbox: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: 300,
    height: 50,
    gap: 10,
    borderRadius: 7,
    backgroundColor: colors.dark,
    marginBottom: 5,
  },
  colorWhite: {
    color: colors.lightText,
    textAlign: "center",
  },
  icon: {
    justifyContent: "center",
    textAlign: "center",
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
  },
  buttonbox: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-around",
    gap: 10,
    marginBottom: 10,
  },
  button: {
    width: "47%",
    height: 70,
    padding: 10,
    borderRadius: borderRadiusMyf,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonup: {
    width: 70,
    height: 50,
    backgroundColor: colors.light,
    borderRadius: borderRadiusMyf,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 260,
    borderRadius: 8,
  },
  errorText: {
    color: "red",
    marginTop: 16,
    textAlign: "center",
  },
})

export default styles

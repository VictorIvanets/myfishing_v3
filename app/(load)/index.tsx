import { ThemedText } from "@/components/ThemedText"
import { useEffect, useState } from "react"
import { View, Image, Alert, StatusBar } from "react-native"
import * as Location from "expo-location"
import { LinearGradient } from "expo-linear-gradient"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOCAL_JWT, LOCAL_LOGIN, LOCAL_USERID } from "@/constants/constants"
import { styles } from "./styles.loadpage"
import { Link } from "expo-router"

export default function LoadPage() {
  const [location, setLocation] = useState<Location.LocationObjectCoords>()
  const [errorMsg, setErrorMsg] = useState("")
  const [locallStoreLogin, setlocallStoreLogin] = useState<string | null>(null)
  const [locallStoreJWT, setlocallStoreJWT] = useState<string | null>(null)

  const locallStoreGetData = async () => {
    try {
      const login = await AsyncStorage.getItem(LOCAL_LOGIN)
      const jwt = await AsyncStorage.getItem(LOCAL_JWT)
      const iserId = await AsyncStorage.getItem(LOCAL_USERID)
      if (login !== null && jwt !== null && iserId !== null) {
        setlocallStoreLogin(JSON.parse(login))
        setlocallStoreJWT(JSON.parse(jwt))

        // dispatch(
        //   userActions.login({
        //     login: JSON.parse(login),
        //     userId: JSON.parse(iserId),
        //     jwt: JSON.parse(jwt),
        //   })
        // )
      } else {
        setlocallStoreLogin(null)
        setlocallStoreJWT(null)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setErrorMsg("Не можу визначити локацію")
        return
      }
      const { coords } = await Location.getCurrentPositionAsync({})
      setLocation(coords)
      // dispatch(
      //   locationActions.setCoords({
      //     latitude: coords?.latitude,
      //     longitude: coords?.longitude,
      //   })
      // )
    } catch {
      Alert.alert("Не можу визначити локацію")
    }
  }

  useEffect(() => {
    locallStoreGetData()
    getLocation()
  }, [])

  let text = "Waiting.."
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = "location ok"
  }

  return (
    <LinearGradient
      colors={["rgba(0, 98, 128, 0.719)", "transparent", "rgba(0,0,0,0.8)"]}
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"} />

      <Image
        source={require("@/assets/images/fonfish.jpg")}
        style={styles.maifon}
      />
      <View style={styles.appLogoBox}>
        <Image
          source={require("@/assets/images/logoMf-01.png")}
          style={styles.appLogo}
        />
      </View>
      <View style={styles.contentbox}>
        {text ? (
          <ThemedText style={styles.colorWhite} type="default">
            {text}
          </ThemedText>
        ) : (
          <ThemedText style={styles.colorWhite} type="default"></ThemedText>
        )}

        <Link href="/(tabs)">
          <ThemedText type="subtitle" style={styles.linkFoLoginText}>
            ВХІД
          </ThemedText>
        </Link>
        <View style={styles.linkFoLogin}>
          {!locallStoreLogin && !locallStoreJWT ? (
            <>
              <Link href="/(load)/(loginPage)">
                <ThemedText type="subtitle" style={styles.linkFoLoginText}>
                  ВХІД
                </ThemedText>
              </Link>
              <Link href="/(load)/(registerPage)">
                <ThemedText type="default" style={styles.linkFoLoginText}>
                  РЕЄСТРАЦІЯ
                </ThemedText>
              </Link>
              <Link href="/(tabs)">
                <ThemedText type="subtitle" style={styles.linkFoLoginText}>
                  MAIN_PAGE
                </ThemedText>
              </Link>
            </>
          ) : (
            <Link href="/(tabs)">
              <ThemedText type="subtitle" style={styles.linkFoLoginText}>
                ВХІД
              </ThemedText>
            </Link>
          )}
        </View>
      </View>
    </LinearGradient>
  )
}

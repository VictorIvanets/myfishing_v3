import { ThemedText } from "@/components/ThemedText"
import { useEffect, useState } from "react"
import { View, Image, Alert, StatusBar } from "react-native"
import * as Location from "expo-location"
import { LinearGradient } from "expo-linear-gradient"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
  LOCAL_INIT_LAT,
  LOCAL_INIT_LON,
  LOCAL_JWT,
  LOCAL_LOGIN,
  LOCAL_USERID,
} from "@/constants/constants"
import styles from "./styles.loadpage"
import { Link } from "expo-router"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { colors } from "@/constants/Colors"
import { useAtom } from "jotai"
import { coordsAtom, userAtom } from "@/store/store.state"

export default function LoadPage() {
  const [location, setLocation] = useState<Location.LocationObjectCoords>()
  const [errorMsg, setErrorMsg] = useState("")
  const [locallStoreLogin, setlocallStoreLogin] = useState<string | null>(null)
  const [locallStoreJWT, setlocallStoreJWT] = useState<string | null>(null)
  const [_atomUserState, setAtomUserState] = useAtom(userAtom)
  const [_atomCoordsState, setAtomCoordsState] = useAtom(coordsAtom)

  const locallStoreGetData = async () => {
    try {
      const login = await AsyncStorage.getItem(LOCAL_LOGIN)
      const jwt = await AsyncStorage.getItem(LOCAL_JWT)
      const iserId = await AsyncStorage.getItem(LOCAL_USERID)
      if (login !== null && jwt !== null && iserId !== null) {
        setAtomUserState({
          login: login,
          access_token: jwt,
          userId: iserId,
        })
        setlocallStoreLogin(login)
        setlocallStoreJWT(jwt)
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
      await AsyncStorage.setItem(LOCAL_INIT_LAT, `${coords?.latitude}`)
      await AsyncStorage.setItem(LOCAL_INIT_LON, `${coords?.longitude}`)
      setAtomCoordsState({
        latitude: coords.latitude,
        longitude: coords.longitude,
      })
    } catch {
      Alert.alert("Не можу визначити локацію")
    }
  }

  useEffect(() => {
    locallStoreGetData()
    getLocation()
  }, [locallStoreLogin])

  let text = "Waiting.."
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = "location ok"
  }

  return (
    <LinearGradient
      colors={[colors.black, colors.deepdark]}
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"} />

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
        <View style={styles.linkFoLogin}>
          {!locallStoreLogin && !locallStoreJWT ? (
            <>
              <Link href="/(load)/(loginPage)">
                <View style={styles.buttonbox}>
                  <ThemedText type="subtitle" style={styles.linkFoLoginText}>
                    ВХІД
                  </ThemedText>
                </View>
              </Link>
              <Link href="/(load)/(registerPage)">
                <ThemedText type="default" style={styles.linkFoLoginText}>
                  РЕЄСТРАЦІЯ
                </ThemedText>
              </Link>
            </>
          ) : (
            <Link style={styles.buttonboxlink} href="/(tabs)">
              <View style={styles.buttonbox}>
                <MaterialIcons
                  style={styles.icon}
                  name="now-widgets"
                  size={70}
                  color={colors.light}
                />
                <ThemedText type="default">ВХІД</ThemedText>
              </View>
            </Link>
          )}
        </View>
      </View>
    </LinearGradient>
  )
}

import { ThemedText } from "@/components/ThemedText"
import React, { useEffect, useState } from "react"
import { TextInput, View, Image, Pressable, StatusBar } from "react-native"
import getlogin from "./authGet"
import styles from "./styles.loginpage"
import Preloader from "@/components/preloader/preloader"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOCAL_JWT, LOCAL_LOGIN, LOCAL_USERID } from "@/constants/constants"
import { Link, useNavigation } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import { colors } from "@/constants/Colors"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

export default function LoginPage() {
  const [loginInput, setLoginInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [validInput, setValidInput] = useState("")
  const [viewLabelLogin, setViewLabelLogin] = useState(true)
  const [viewLabelPass, setViewLabelPass] = useState(true)
  const [errorAuth, setErrorAuth] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [loginOk, setloginOk] = useState(false)

  useEffect(() => {
    if (errorAuth) setErrorAuth("")
    if (loginInput.length > 2 && passwordInput.length > 2) {
      setValidInput("")
    }
  }, [loginInput, passwordInput, setValidInput])

  useEffect(() => {
    if (loginInput.length > 0) setViewLabelLogin(false)
    else setViewLabelLogin(true)

    if (passwordInput.length > 0) setViewLabelPass(false)
    else setViewLabelPass(true)
  }, [loginInput, passwordInput])

  const onSubmit = async () => {
    if (loginInput.length < 2 && passwordInput.length < 2) {
      setValidInput("заповніть всі поля")
    } else if (loginInput.length < 3) {
      setValidInput("логін повинен бути не менше 3х символів")
    } else if (passwordInput.length < 3) {
      setValidInput("пароль повинен бути не менше 3х символів")
    } else {
      setIsLoading(true)
      const data = await getlogin(loginInput, passwordInput)
      if (!data.login) {
        setErrorAuth(`Щось не так. Спробуйте ще раз`)
        setIsLoading(false)
        setloginOk(false)
      } else {
        await AsyncStorage.removeItem(LOCAL_LOGIN)
        await AsyncStorage.removeItem(LOCAL_JWT)
        await AsyncStorage.removeItem(LOCAL_USERID)

        await AsyncStorage.setItem(LOCAL_LOGIN, data.login)
        await AsyncStorage.setItem(LOCAL_JWT, data.access_token)
        await AsyncStorage.setItem(LOCAL_USERID, data.userId)
        setIsLoading(false)
        setLoginInput("")
        setPasswordInput("")
        setErrorAuth("")
        setloginOk(true)
      }
    }
  }

  return (
    <LinearGradient
      colors={[colors.light, "transparent", colors.deepdark]}
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"} />

      <View style={styles.appLogoBox}>
        <Image
          source={require("@/assets/images/logoMf-01.png")}
          style={styles.appLogo}
        />
      </View>
      {!isLoading ? (
        <View style={styles.submitbox}>
          <View style={styles.buttonboxback}></View>
          {validInput ? (
            <ThemedText style={styles.colorWhite} type="default">
              {validInput}
            </ThemedText>
          ) : errorAuth ? (
            <ThemedText style={styles.colorWhite} type="default">
              {errorAuth}
            </ThemedText>
          ) : (
            <ThemedText style={styles.colorWhite} type="default"></ThemedText>
          )}
          {!loginOk ? (
            <>
              <View style={styles.inputpass}>
                <TextInput
                  style={styles.input}
                  onChangeText={(t) => {
                    setLoginInput(t)
                  }}
                  value={loginInput}
                />
                <View style={styles.inputBottoLine}></View>
                <ThemedText
                  style={
                    viewLabelLogin ? styles.inputLabel : styles.inputLabelActiv
                  }
                  type="subtitlelite"
                >
                  login
                </ThemedText>
              </View>

              <View style={styles.inputpass}>
                <TextInput
                  style={styles.input}
                  onChangeText={(t) => setPasswordInput(t)}
                  value={passwordInput}
                />
                <View style={styles.inputBottoLine}></View>

                <ThemedText
                  style={
                    viewLabelPass ? styles.inputLabel : styles.inputLabelActiv
                  }
                  type="subtitlelite"
                >
                  password
                </ThemedText>
              </View>
              <Pressable style={styles.buttonbox} onPress={onSubmit}>
                <ThemedText style={styles.colorWhite}>ВХІД</ThemedText>
              </Pressable>
            </>
          ) : (
            <>
              <Link style={styles.buttonboxlink} href="/(tabs)">
                <View style={styles.buttonboxres}>
                  <MaterialIcons
                    style={styles.icon}
                    name="now-widgets"
                    size={70}
                    color={colors.light}
                  />
                  <ThemedText type="default">ВІТАЮ</ThemedText>
                  <ThemedText style={{ textAlign: "center" }} type="mintext">
                    ТИСНИ ЩОБ ПРОДОВЖИТИ
                  </ThemedText>
                </View>
              </Link>
            </>
          )}
        </View>
      ) : (
        <View style={styles.loading}>
          <Preloader />
        </View>
      )}
    </LinearGradient>
  )
}

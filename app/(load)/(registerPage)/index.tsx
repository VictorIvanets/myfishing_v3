import { ThemedText } from "@/components/ThemedText"
import {
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { default as styles } from "./styles.registerpage"
import { useEffect, useState } from "react"
import setUser from "./register"
import Preloader from "@/components/preloader/preloader"
import { Link } from "expo-router"

export default function RegisterPage() {
  const [loginInput, setLoginInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [userNameInput, setUserNameInput] = useState("")
  const [userSubnameInput, setUserSubnameInput] = useState("")
  const [userCountryInput, setUserCountryInput] = useState("")
  const [userCityInput, setUserCityInput] = useState("")
  const [validInput, setValidInput] = useState("")
  const [errorAuth, setErrorAuth] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [successRegister, setSuccessRegister] = useState(true)
  const [login, setLogin] = useState("")
  const [userName, setUserName] = useState("")
  const [userSubname, setUserSubname] = useState("")

  const [viewLabelLogin, setViewLabelLogin] = useState(true)
  const [viewLabelPass, setViewLabelPass] = useState(true)
  const [viewLabelName, setViewLabelName] = useState(true)
  const [viewLabelSubnme, setViewLabelSubnme] = useState(true)
  const [viewLabelCountry, setViewLabelCountry] = useState(true)
  const [viewLabelCity, setViewLabelCity] = useState(true)

  useEffect(() => {
    if (loginInput.length > 0) setViewLabelLogin(false)
    else setViewLabelLogin(true)
    if (passwordInput.length > 0) setViewLabelPass(false)
    else setViewLabelPass(true)
    if (userNameInput.length > 0) setViewLabelName(false)
    else setViewLabelName(true)
    if (userSubnameInput.length > 0) setViewLabelSubnme(false)
    else setViewLabelSubnme(true)
    if (userCountryInput.length > 0) setViewLabelCountry(false)
    else setViewLabelCountry(true)
    if (userCityInput.length > 0) setViewLabelCity(false)
    else setViewLabelCity(true)
  }, [
    loginInput,
    passwordInput,
    userNameInput,
    userSubnameInput,
    userCountryInput,
    userCityInput,
  ])

  const onSubmit = async () => {
    if (
      loginInput.length < 2 &&
      passwordInput.length < 2 &&
      userNameInput.length < 2
    ) {
      setValidInput("заповніть всі поля")
    } else if (loginInput.length < 3) {
      setValidInput("логін повинен бути не менше 3х символів")
    } else if (passwordInput.length < 3) {
      setValidInput("пароль повинен бути не менше 3х символів")
    } else if (userNameInput.length < 3) {
      setValidInput("ім'я повинно бути не менше 3х символів")
    } else {
      setIsLoading(true)
      setSuccessRegister(true)
      const data = await setUser(
        loginInput,
        passwordInput,
        userNameInput,
        userSubnameInput,
        userCountryInput,
        userCityInput
      )

      if (!data.login) {
        setErrorAuth("ПОМИЛКА!")
        setIsLoading(false)
      } else {
        setLogin(data.login)
        setUserName(data.name)
        setUserSubname(data.subname)
        setSuccessRegister(false)
        setIsLoading(false)
        setLoginInput("")
        setPasswordInput("")
        setUserNameInput("")
        setUserSubnameInput("")
        setUserCountryInput("")
        setUserCityInput("")
      }
    }
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

      <ScrollView style={styles.mainscroll}>
        <View style={styles.appLogoBox}>
          <Image
            source={require("@/assets/images/logoMf-01.png")}
            style={styles.appLogo}
          />
        </View>
        {!isLoading ? (
          <>
            {successRegister ? (
              <View style={styles.submitbox}>
                <ThemedText type="subtitle" style={styles.linkFoLoginText}>
                  REGISTER
                </ThemedText>
                <View style={styles.submitboxInput}>
                  {validInput ? (
                    <ThemedText style={styles.colorWhite} type="default">
                      {validInput}
                    </ThemedText>
                  ) : errorAuth ? (
                    <ThemedText style={styles.colorWhite} type="default">
                      {errorAuth}
                    </ThemedText>
                  ) : (
                    <ThemedText
                      style={styles.colorWhite}
                      type="default"
                    ></ThemedText>
                  )}

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
                        viewLabelLogin
                          ? styles.inputLabel
                          : styles.inputLabelActiv
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
                        viewLabelPass
                          ? styles.inputLabel
                          : styles.inputLabelActiv
                      }
                      type="subtitlelite"
                    >
                      password
                    </ThemedText>
                  </View>
                  <View style={styles.inputpass}>
                    <TextInput
                      style={styles.input}
                      onChangeText={(t) => setUserNameInput(t)}
                      value={userNameInput}
                    />
                    <View style={styles.inputBottoLine}></View>

                    <ThemedText
                      style={
                        viewLabelName
                          ? styles.inputLabel
                          : styles.inputLabelActiv
                      }
                      type="subtitlelite"
                    >
                      name
                    </ThemedText>
                  </View>
                  <View style={styles.inputpass}>
                    <TextInput
                      style={styles.input}
                      onChangeText={(t) => setUserSubnameInput(t)}
                      value={userSubnameInput}
                    />
                    <View style={styles.inputBottoLine}></View>

                    <ThemedText
                      style={
                        viewLabelSubnme
                          ? styles.inputLabel
                          : styles.inputLabelActiv
                      }
                      type="subtitlelite"
                    >
                      subname
                    </ThemedText>
                  </View>
                  <View style={styles.inputpass}>
                    <TextInput
                      style={styles.input}
                      onChangeText={(t) => setUserCountryInput(t)}
                      value={userCountryInput}
                    />
                    <View style={styles.inputBottoLine}></View>

                    <ThemedText
                      style={
                        viewLabelCountry
                          ? styles.inputLabel
                          : styles.inputLabelActiv
                      }
                      type="subtitlelite"
                    >
                      country
                    </ThemedText>
                  </View>
                  <View style={styles.inputpass}>
                    <TextInput
                      style={styles.input}
                      onChangeText={(t) => setUserCityInput(t)}
                      value={userCityInput}
                    />
                    <View style={styles.inputBottoLine}></View>

                    <ThemedText
                      style={
                        viewLabelCity
                          ? styles.inputLabel
                          : styles.inputLabelActiv
                      }
                      type="subtitlelite"
                    >
                      city
                    </ThemedText>
                  </View>
                  <Pressable style={styles.buttonbox} onPress={onSubmit}>
                    <ThemedText style={styles.colorWhite}>SUBMIT</ThemedText>
                  </Pressable>
                </View>
              </View>
            ) : (
              <View style={styles.submitbox}>
                <ThemedText type="subtitle" style={styles.linkFoLoginText}>
                  REGISTER OK. PLEASE LOG IN
                </ThemedText>
                <ThemedText type="subtitle" style={styles.linkFoLoginText}>
                  Name: {userName}
                </ThemedText>
                <ThemedText type="subtitle" style={styles.linkFoLoginText}>
                  Subname: {userSubname}
                </ThemedText>
                <ThemedText type="subtitle" style={styles.linkFoLoginText}>
                  login: {login}
                </ThemedText>
                <View style={styles.buttonboxLogIn}>
                  <Link href="/(load)/(loginPage)">
                    <ThemedText style={styles.colorWhite}>ВХІД</ThemedText>
                  </Link>
                </View>
              </View>
            )}
          </>
        ) : (
          <View style={styles.submitbox}>
            <Preloader />
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  )
}

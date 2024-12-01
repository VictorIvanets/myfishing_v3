import { ThemedText } from "@/components/ThemedText"
import { Pressable, ScrollView, TextInput, View } from "react-native"
import { default as styles } from "./styles.setItem"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { SetCoordsProps } from "@/app/(tabs)/mappage"
import Preloader from "../../components/preloader/preloader"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { colors } from "@/constants/Colors"
import setSets, { getWeatherApi } from "./api/api.getsForMarker"

type NewSetMapMarker = {
  coords: SetCoordsProps
  setViewSetMarker: Dispatch<SetStateAction<SetCoordsProps | null>>
  login: string | undefined
}

export default function NewSetMapMarker(props: NewSetMapMarker) {
  const { coords, setViewSetMarker, login } = props

  const [TitleInput, setTitleInput] = useState("")
  const [descriptInput, setDescriptInput] = useState("")
  const [scoreInput, setScoreInput] = useState("")

  const [viewLabelTitle, setViewLabelTitle] = useState(true)
  const [viewLabelDescript, setViewLabelDescript] = useState(true)
  const [viewLabelScore, setViewLabelScore] = useState(true)

  const [errorData, setErrorData] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [successRegister, setSuccessRegister] = useState(true)
  const [validInput, setValidInput] = useState("")

  useEffect(() => {
    if (TitleInput.length > 0) setViewLabelTitle(false)
    else setViewLabelTitle(true)
    if (descriptInput.length > 0) setViewLabelDescript(false)
    else setViewLabelDescript(true)
    if (scoreInput.length > 0) setViewLabelScore(false)
    else setViewLabelScore(true)
  }, [TitleInput, descriptInput, scoreInput])

  async function onSubmit(login: string) {
    const thisData = new Date()
    const weather = await getWeatherApi(coords.latitude, coords.longitude)
    if (TitleInput.length < 3) {
      setValidInput("Введіть назву")
    } else if (+scoreInput <= 0 || +scoreInput > 10 || isNaN(+scoreInput)) {
      setValidInput("Оцінка від 1 до 10")
    } else if (!weather) {
      setValidInput("Помилка отримання погоди")
    } else {
      setIsLoading(true)
      const data = await setSets({
        title: TitleInput,
        description: descriptInput,
        score: +scoreInput,
        date: thisData.toLocaleDateString("en-CA"),
        coords: [coords.latitude, coords.longitude],
        login: login,
        setID: +(Math.random() * 100000).toFixed(),
        weather: weather,
      })
      if (!data.title) {
        setErrorData("Помилка!")
        setIsLoading(false)
      } else {
        setSuccessRegister(false)
        setIsLoading(false)
        setValidInput("")
        setErrorData("")

        setTitleInput("")
        setDescriptInput("")
        setScoreInput("")

        setTimeout(() => {
          setViewSetMarker(null)
        }, 1500)
      }
    }
  }

  return (
    <View style={styles.containermarker}>
      <ScrollView style={styles.mainscroll}>
        {!isLoading ? (
          <>
            {successRegister ? (
              <View style={styles.submitbox}>
                <View style={styles.submitboxInput}>
                  <View style={styles.inputBlock}>
                    <TextInput
                      style={styles.input}
                      onChangeText={(t) => {
                        setTitleInput(t)
                      }}
                      value={TitleInput}
                    />
                    <View style={styles.inputBottoLine}></View>
                    <ThemedText
                      style={
                        viewLabelTitle
                          ? styles.inputLabel
                          : styles.inputLabelActiv
                      }
                      type="subtitlelite"
                    >
                      Назва/Локація
                    </ThemedText>
                  </View>

                  <View style={styles.inputBlockText}>
                    <TextInput
                      editable
                      multiline
                      numberOfLines={8}
                      style={styles.inputText}
                      onChangeText={(t) => setDescriptInput(t)}
                      value={descriptInput}
                    />

                    <ThemedText
                      style={
                        viewLabelDescript
                          ? styles.inputLabel
                          : styles.inputLabelActiv
                      }
                      type="subtitlelite"
                    >
                      Що ловилось
                    </ThemedText>
                  </View>
                  <View style={styles.inputBottoLine}></View>
                  <View style={styles.inputNumeric}>
                    <TextInput
                      style={styles.input}
                      onChangeText={(t) => setScoreInput(t)}
                      value={scoreInput}
                      keyboardType="numeric"
                      maxLength={2}
                    />
                    <View style={styles.inputBottoLine}></View>

                    <ThemedText
                      style={
                        viewLabelScore
                          ? styles.inputLabel
                          : styles.inputLabelActiv
                      }
                      type="subtitlelite"
                    >
                      Оцінка 1-10
                    </ThemedText>
                  </View>
                  <Pressable
                    style={styles.buttonbox}
                    onPress={() => {
                      console.log(login)
                      login && onSubmit(login)
                    }}
                  >
                    <ThemedText style={styles.colorWhite}>SUBMIT</ThemedText>
                  </Pressable>
                  <View>
                    <ThemedText type="subtitle">Координати:</ThemedText>
                    <ThemedText type="default">
                      lat: {coords.latitude}
                    </ThemedText>
                    <ThemedText type="default">
                      lon: {coords.longitude}
                    </ThemedText>
                  </View>
                  {errorData && (
                    <ThemedText type="subtitle">{errorData}</ThemedText>
                  )}
                  {validInput && (
                    <ThemedText type="subtitle">{validInput}</ThemedText>
                  )}
                </View>
              </View>
            ) : (
              <View style={styles.submitbox}>
                <ThemedText type="subtitle" style={styles.linkFoLoginText}>
                  SUBMIT OK
                </ThemedText>
              </View>
            )}
          </>
        ) : (
          <View style={styles.submitbox}>
            <Preloader />
          </View>
        )}
      </ScrollView>

      <Pressable onPress={() => setViewSetMarker(null)}>
        <View style={styles.buttonbox}>
          <MaterialIcons
            style={{ textAlign: "center" }}
            name="keyboard-backspace"
            size={30}
            color={colors.light}
          />
        </View>
      </Pressable>
    </View>
  )
}

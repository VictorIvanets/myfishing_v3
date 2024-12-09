import { View } from "react-native"
import { ThemedText } from "../../components/ThemedText"

interface Weather {
  weather: object[]
  customStyles?: boolean
}

function Weather({ weather, customStyles = true }: Weather | any) {
  const styles = customStyles ? stylesWeather : stylesWeatherMenu

  let wind
  if (weather) {
    const wd = weather[2].deg

    if ((wd >= 0 && wd <= 45) || (wd >= 320 && wd <= 360)) {
      wind = "Північ."
    }
    if (wd >= 46 && wd <= 130) {
      wind = "Схід."
    }
    if (wd >= 131 && wd <= 230) {
      wind = "Півден."
    }
    if (wd >= 231 && wd <= 319) {
      wind = "Захід."
    }
  }
  return (
    <>
      {weather ? (
        <View style={styles.weatherbox}>
          <ThemedText style={styles.widgetText} type="mintext">
            Tемпература: {weather[0].temp} °C
          </ThemedText>
          <ThemedText style={styles.widgetText} type="mintext">
            Тиск: {weather[0].grnd_level} hPa
          </ThemedText>
          <ThemedText style={styles.widgetText} type="mintext">
            {weather[1].sky}
          </ThemedText>
          <ThemedText style={styles.widgetText} type="mintext">
            Вітер: {wind} {weather[2].speed} м/с
          </ThemedText>
        </View>
      ) : (
        <ThemedText type="default">error</ThemedText>
      )}
    </>
  )
}

export default Weather

import { StyleSheet } from "react-native"

import { colors } from "@/constants/Colors"

const stylesWeather = StyleSheet.create({
  widgetText: {
    color: colors.deepdark,
    fontFamily: "RobotoRegular",
    fontWeight: 400,
  },
  weatherbox: {
    width: "47%",
    height: 65,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: colors.light,
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 7,
  },
})
const stylesWeatherMenu = StyleSheet.create({
  widgetText: {
    color: colors.gray,
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
  },
  weatherbox: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
})

import { View } from "react-native"
import { default as styles } from "./styles.oneSetPage"
import { ThemedText } from "../../components/ThemedText"

interface Weather {
  weather: object[]
}

function Weather({ weather }: Weather | any) {
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

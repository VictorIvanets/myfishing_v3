import { View, StatusBar } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { stylesStartPage as styles } from "@/components/SartPage/styles.startpage"
import { exitLogin } from "@/hooks/exitApp"
import { Link } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
import { colors } from "@/constants/Colors"
import { useState } from "react"

export default function StartPage() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />

      <ThemedText type="subtitle">ПРАВИЛА КОРИСТУВАННЯ:</ThemedText>
      <View style={styles.content}>
        <ThemedText style={styles.contentTitle} type="subtitle">
          Розділ "КАРТА"
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Тут Ви можете скористуватися картою, та позначити місце рибалки.
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Змістіть або збільшьть карту. Коли на карті з'явиться мітка, натисніть
          на неї.
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          У вікні, що з'явилося, заповніть назву та опис рибалки.
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Також Ви можете оцінити її.
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Натисніть "Додати".
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Для того, щоб пидивитися усі мітки що додали усі користувачі,
          натисніть "Показати усі місця".
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Натиснувши на конкретну мітку, можна перейти до детальної інформації
          про це місце.
        </ThemedText>
        <ThemedText style={styles.contentTitle} type="subtitle">
          Розділ "РИБАЛКИ"
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          В цому розділі будуть додаватися усі Ваші рибалки.
        </ThemedText>
        <ThemedText style={styles.contentText} type="default">
          Ви можете переглянути місце рибалки на карті, або видалити запис.
        </ThemedText>
      </View>
      <View>
        <ThemedText style={styles.contentTextMin} type="mintext">
          інформація у загальному користуванні!
        </ThemedText>
        <ThemedText style={styles.contentTextMin} type="mintext">
          Усі користувачі можуть бачити усі місця!
        </ThemedText>
        <View style={styles.Linkbox}>
          <Link href={`https://victorivanets.github.io/fishapp/`}>
            <ThemedText style={styles.icon} type="default">
              ВЕБ ВЕРСІЯ ДОДАТКУ
            </ThemedText>
          </Link>
        </View>
      </View>

      <Link
        style={styles.buttonbox}
        onPress={() => {
          exitLogin()
        }}
        href={"/(load)"}
      >
        <View style={styles.btnitem}>
          <ThemedText style={styles.colorWhite} type="subtitle">
            EXIT
          </ThemedText>
        </View>

        <View style={styles.btnitem}>
          <Ionicons
            style={styles.icon}
            name="exit-outline"
            size={30}
            color={colors.light}
          />
        </View>
      </Link>
    </View>
  )
}

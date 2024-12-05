import { View, Pressable } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { default as styles } from "@/entities/allset/styles.allset"
import { MapResponse } from "@/entities/allset/api/api.getAllset"
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons"
import { delItem } from "@/hooks/delItem"
import { colors } from "@/constants/Colors"
import { LinearGradient } from "expo-linear-gradient"

interface PropsSet {
  data: MapResponse
  setSetIdforOneItem: React.Dispatch<React.SetStateAction<number | null>>
  sethendDelSet: React.Dispatch<React.SetStateAction<boolean>>
  hendDelSet: boolean
}

export default function ItemSet({
  data,
  setSetIdforOneItem,
  sethendDelSet,
  hendDelSet,
}: PropsSet) {
  const { title, description, date, score, coords, setID } = data

  return (
    <LinearGradient
      colors={[
        colors.deepgray,
        colors.dark,
        colors.dark,
        colors.dark,
        colors.black,
      ]}
      style={styles.itemset}
    >
      <Pressable onPress={() => setSetIdforOneItem(setID)}>
        <ThemedText type="subtitle" style={styles.itemText}>
          Місце: {title}
        </ThemedText>
        <ThemedText type="default" style={styles.itemText}>
          Дата: {date}
        </ThemedText>
        <ThemedText type="default" style={styles.itemText}>
          Що ловилося: {description}
        </ThemedText>
        <ThemedText type="default" style={styles.itemText}>
          Оцінка: {score}
        </ThemedText>
      </Pressable>
      <View style={styles.buttonbox}>
        <Pressable
          onPress={() => setSetIdforOneItem(setID)}
          style={styles.buttoncoords}
        >
          <ThemedText type="default" style={styles.colorLight}>
            ПЕРЕГЛЯНУТИ
          </ThemedText>
        </Pressable>
        <Pressable
          onPress={() => {
            delItem(setID, title, sethendDelSet, hendDelSet)
          }}
          style={styles.buttondel}
        >
          <MaterialIcons
            style={styles.buttondelIcon}
            name="delete"
            size={30}
            color={colors.light}
          />
        </Pressable>
      </View>
    </LinearGradient>
  )
}

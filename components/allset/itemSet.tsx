import {
  Image,
  StyleSheet,
  Platform,
  View,
  Button,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native"

import { ThemedText } from "@/components/ThemedText"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOCAL_USERID } from "@/constants/constants"
import { useNavigation } from "expo-router"
import { default as styles } from "@/components/allset/styles.allset"
import allGetSets, { MapResponse } from "@/components/allset/getAllset"
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons"
import { delItem } from "@/hooks/delItem"
import { SetStateAction } from "react"

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
    <View style={styles.itemset}>
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
      <View style={styles.buttonbox}>
        <Pressable style={styles.buttondel}>
          <MaterialIcons
            style={styles.buttondelIcon}
            name="location-on"
            size={30}
            color={"#00acac"}
          />
        </Pressable>
        <Pressable
          onPress={() => setSetIdforOneItem(setID)}
          style={styles.buttoncoords}
        >
          <ThemedText type="default" style={styles.colorWhite}>
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
            color={"#00acac"}
          />
        </Pressable>
      </View>
    </View>
  )
}

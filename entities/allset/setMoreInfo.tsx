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
import { default as styles } from "@/entities/allset/styles.allset"
import { useEffect, useState } from "react"
import allGetSets, { MapResponse } from "@/entities/allset/api/api.getAllset"
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons"

interface SetMoreInfo {
  setIdforOneItem: number
  setID: number
  setSetIdforOneItem: React.Dispatch<React.SetStateAction<number | null>>
}

export default function SetMoreInfo({
  setIdforOneItem,
  setID,
  setSetIdforOneItem,
}: SetMoreInfo) {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.itemText}>
        Місце: {setIdforOneItem}
      </ThemedText>
      <ThemedText type="default" style={styles.itemText}>
        Дата:
      </ThemedText>
      <ThemedText type="default" style={styles.itemText}>
        Що ловилося:
      </ThemedText>
      <ThemedText type="default" style={styles.itemText}>
        Оцінка:
      </ThemedText>
      <Pressable
        onPress={() => setSetIdforOneItem(null)}
        style={styles.buttoncoords}
      >
        <ThemedText style={styles.colorWhite}>НАЗАД</ThemedText>
      </Pressable>
    </View>
  )
}

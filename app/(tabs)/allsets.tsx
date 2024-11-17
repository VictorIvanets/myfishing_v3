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

import { HelloWave } from "@/components/HelloWave"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOCAL_JWT, LOCAL_LOGIN, LOCAL_USERID } from "@/constants/constants"
import { useNavigation } from "expo-router"
import { stylesStartPage as styles } from "@/components/SartPage/styles.startpage"
import { useEffect, useState } from "react"

export default function AllSetPage() {
  const [userId, setUserId] = useState<string>()

  async function localGetUserId() {
    const id = await AsyncStorage.getItem(LOCAL_USERID)
    id && setUserId(JSON.parse(id))
  }
  useEffect(() => {
    localGetUserId()
  })

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <ThemedText style={styles.colorWhite}>AllSetPage {userId} </ThemedText>
    </View>
  )
}

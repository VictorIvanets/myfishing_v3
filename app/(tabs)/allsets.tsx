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
import { LOCAL_LOGIN, LOCAL_USERID } from "@/constants/constants"
import { useNavigation } from "expo-router"
import { default as styles } from "@/components/allset/styles.allset"
import { SetStateAction, useEffect, useState } from "react"
import allGetSets, { MapResponse } from "@/components/allset/getAllset"
import ItemSet from "@/components/allset/itemSet"
import getOneSetsByUser from "@/components/allset/getSetByUser"
import Preloader from "@/components/preloader/preloader"
import SetMoreInfo from "@/components/allset/setMoreInfo"
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons"
import OneSetPage from "@/components/oneSetPage/oneSetPage"

export default function AllSetPage() {
  const [userLogin, setUserLogin] = useState<string>()
  const [allset, setAllset] = useState<MapResponse[]>([])
  const [setIdforOneItem, setSetIdforOneItem] = useState<number | null>(null)
  const [setLoginforOneItem, setSetLoginforOneItem] = useState<number | null>(
    null
  )
  const [hendDelSet, sethendDelSet] = useState<boolean>(false)

  async function localGetUserLogin() {
    try {
      const login = await AsyncStorage.getItem(LOCAL_LOGIN)
      if (login !== null) {
        setUserLogin(login)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function GetAllSets(userLogin: string) {
    const data = await getOneSetsByUser(userLogin)
    if (typeof data !== "string") {
      setAllset(data)
    }
  }

  useEffect(() => {
    localGetUserLogin()
  })

  useEffect(() => {
    userLogin && GetAllSets(userLogin)
  }, [userLogin, hendDelSet])

  return (
    <View style={styles.container}>
      {allset ? (
        <>
          {!setIdforOneItem ? (
            <>
              <ScrollView style={{ width: "100%", marginTop: 50, padding: 5 }}>
                {allset.map((i) => (
                  <ItemSet
                    key={i.setID}
                    setSetIdforOneItem={setSetIdforOneItem}
                    data={i}
                    sethendDelSet={sethendDelSet}
                    hendDelSet={hendDelSet}
                  />
                ))}
              </ScrollView>
              <Pressable
                onPress={() => {
                  setAllset([])
                  userLogin && GetAllSets(userLogin)
                }}
                style={styles.buttonReload}
              >
                <MaterialIcons
                  style={styles.buttondelIcon}
                  name="autorenew"
                  size={30}
                  color={"#00acac"}
                />
              </Pressable>
            </>
          ) : (
            <OneSetPage
              setId={setIdforOneItem}
              setSetIdforOneItem={setSetIdforOneItem}
              login={userLogin}
            />
          )}
        </>
      ) : (
        <Preloader />
      )}
      <StatusBar barStyle={"light-content"} />
    </View>
  )
}

import { View, StatusBar, ScrollView, Pressable } from "react-native"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOCAL_LOGIN } from "@/constants/constants"
import { default as styles } from "@/entities/allset/styles.allset"
import { useEffect, useState } from "react"
import { MapResponse } from "@/entities/allset/api/api.getAllset"
import ItemSet from "@/entities/allset/itemSet"
import getOneSetsByUser from "@/entities/allset/api/api.getSetByUser"
import Preloader from "@/components/preloader/preloader"
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons"
import OneSetPage from "@/entities/oneSetPage/oneSetPage"
import { colors } from "@/constants/Colors"

export default function AllSetPage() {
  const [userLogin, setUserLogin] = useState<string | undefined>()
  const [allset, setAllset] = useState<MapResponse[]>([])
  const [setIdforOneItem, setSetIdforOneItem] = useState<number | null>(null)
  const [hendDelSet, sethendDelSet] = useState<boolean>(false)
  const [activeReload, setActiveReload] = useState<boolean>(false)

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
              <ScrollView
                style={{
                  width: "100%",
                  marginTop: 50,
                  padding: 5,
                  paddingHorizontal: 10,
                }}
              >
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
                onTouchStart={() => setActiveReload(true)}
                onTouchEnd={() => setActiveReload(false)}
                style={{
                  ...styles.buttonReload,
                  backgroundColor: activeReload ? colors.deepdark : colors.dark,
                }}
              >
                <MaterialIcons
                  style={styles.buttondelIcon}
                  name="autorenew"
                  size={30}
                  color={colors.light}
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

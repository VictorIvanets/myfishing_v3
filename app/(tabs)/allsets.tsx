import { View, StatusBar, ScrollView, RefreshControl } from "react-native"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOCAL_LOGIN } from "@/constants/constants"
import { default as styles } from "@/entities/allset/styles.allset"
import { useEffect, useState } from "react"
import { MapResponse } from "@/entities/allset/api/api.getAllset"
import ItemSet from "@/entities/allset/itemSet"
import getOneSetsByUser from "@/entities/allset/api/api.getSetByUser"
import Preloader from "@/components/preloader/preloader"
import OneSetPage from "@/entities/oneSetPage/oneSetPage"
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context"

export default function AllSetPage() {
  const [userLogin, setUserLogin] = useState<string | undefined>()
  const [allset, setAllset] = useState<MapResponse[]>([])
  const [setIdforOneItem, setSetIdforOneItem] = useState<number | null>(null)
  const [hendDelSet, sethendDelSet] = useState<boolean>(false)
  const [isloading, setisloading] = useState<boolean>(false)
  const insets = useSafeAreaInsets()

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
    setisloading(true)
    const data = await getOneSetsByUser(userLogin)
    if (!data.message) {
      setAllset(data.reverse())
      setisloading(false)
    }
  }

  useEffect(() => {
    localGetUserLogin()
  })

  useEffect(() => {
    userLogin && GetAllSets(userLogin)
  }, [userLogin, hendDelSet])

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {allset ? (
          <>
            {!setIdforOneItem && userLogin ? (
              <View
                style={{
                  width: "100%",
                  paddingTop: insets.top + 5,
                }}
              >
                <ScrollView
                  refreshControl={
                    <RefreshControl
                      onRefresh={() => GetAllSets(userLogin)}
                      refreshing={isloading}
                    />
                  }
                  style={{
                    width: "100%",
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
              </View>
            ) : (
              <>
                {setIdforOneItem && (
                  <OneSetPage
                    setId={setIdforOneItem}
                    setSetIdforOneItem={setSetIdforOneItem}
                    login={userLogin}
                  />
                )}
              </>
            )}
          </>
        ) : (
          <Preloader />
        )}
        <StatusBar barStyle={"light-content"} />
      </View>
    </SafeAreaProvider>
  )
}

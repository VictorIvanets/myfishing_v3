import { ApolloProvider } from "@apollo/client"
import { client } from "@/GQL/client/client"
import ChatPage from "@/components/chatPage/chat.component"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOCAL_LOGIN } from "@/constants/constants"
import { useEffect, useState } from "react"
import Preloader from "@/components/preloader/preloader"
import getOneSetsByUser, { MapResponse } from "@/components/allset/getSetByUser"

export default function ChatProvider() {
  const [userLogin, setUserLogin] = useState<string>()
  const [allset, setAllset] = useState<MapResponse[]>([])

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
    userLogin && GetAllSets(userLogin)
  }, [])

  return (
    <>
      {allset ? (
        <ApolloProvider client={client}>
          {userLogin ? <ChatPage login={userLogin} /> : <Preloader />}
        </ApolloProvider>
      ) : (
        <Preloader />
      )}
    </>
  )
}

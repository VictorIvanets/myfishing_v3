import { ApolloProvider } from "@apollo/client"
import { client } from "@/GQL/client/client"
import ChatPage from "@/entities/chatPage/chat.component"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOCAL_LOGIN, LOCAL_USERID } from "@/constants/constants"
import { useEffect, useState } from "react"
import Preloader from "@/components/preloader/preloader"
import getOneSetsByUser, {
  MapResponse,
} from "@/entities/allset/api/api.getSetByUser"

export default function ChatProvider() {
  const [userLogin, setUserLogin] = useState<string>()
  const [userId, setUserId] = useState<string>()
  const [allset, setAllset] = useState<MapResponse[]>([])

  async function localGetUserLogin() {
    try {
      const login = await AsyncStorage.getItem(LOCAL_LOGIN)
      const userId = await AsyncStorage.getItem(LOCAL_USERID)

      login && setUserLogin(login)
      userId && setUserId(userId)
    } catch (error) {
      console.log(error)
    }
  }

  async function GetAllSets(userLogin: string) {
    const data = await getOneSetsByUser(userLogin)
    if (!data.message) {
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
          {userLogin && userId ? (
            <ChatPage userId={userId} login={userLogin} />
          ) : (
            <Preloader />
          )}
        </ApolloProvider>
      ) : (
        <Preloader />
      )}
    </>
  )
}

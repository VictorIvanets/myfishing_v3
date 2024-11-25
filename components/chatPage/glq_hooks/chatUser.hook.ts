import { useMutation, useSubscription } from "@apollo/client"
import gqlfile from "./gql/query"
import { ICheckIn, ICheckOut, UseSubCheck } from "./chat.types"

export const useCheckOut = (): ICheckOut => {
  const [userOut, { data, loading, error }] = useMutation(gqlfile.CheckOut)
  const userOutByUserId = (userId: string) => {
    userOut({
      variables: {
        userId,
      },
    })
  }
  return {
    userOutByUserId,
    loadingCheckOut: loading,
    errorCheckOut: error,
    checkOut: data && data.checkOut,
  }
}
export const useCheckIn = (): ICheckIn => {
  const [userIn, { data, loading, error }] = useMutation(gqlfile.CheckIn)
  const userInByUserName = (newUser: string, userId: string) => {
    userIn({
      variables: {
        newUser,
        userId,
      },
    })
  }
  return {
    userInByUserName,
    loadingChecIn: loading,
    errorCheckIn: error,
    userIn: data && data.userIn,
  }
}

export const useSubscribeForCheck = (): UseSubCheck => {
  const { data, loading } = useSubscription(gqlfile.UserChek)

  return {
    loading,
    subdata: data && data.userChek,
  }
}

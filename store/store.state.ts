import { MapResponse } from "@/entities/allset/api/api.getSetByUser"
import {
  CoordsState,
  LoginRequest,
  UserState,
  UserStateData,
} from "./store.model"
import { atom } from "jotai"
import { PREFIX } from "@/constants/constants"

import axios, { AxiosError } from "axios"

export const userAtom = atom<UserState>({
  login: null,
  access_token: null,
  userId: null,
})
export const coordsAtom = atom<CoordsState>({
  latitude: null,
  longitude: null,
})

export const mapResponseAtom = atom<MapResponse[]>([])

export const mapResByUserAtom = atom<MapResponse[]>([])

export const userAtomData = atom<UserStateData>({
  data: null,
  isLoading: false,
  error: null,
})

export const loginAtom = atom(
  (get) => get(userAtomData),
  async (_get, set, { login, password }: LoginRequest) => {
    set(userAtomData, {
      data: null,
      isLoading: true,
      error: null,
    })
    try {
      const data = await axios.post<UserState>(`${PREFIX}auth/login`, {
        login,
        password,
      })
      set(userAtomData, {
        data: data.data,
        isLoading: false,
        error: null,
      })
      return data && data.data
    } catch (e) {
      if (e instanceof AxiosError) {
        set(userAtomData, {
          data: null,
          isLoading: false,
          error: e.response?.data.message,
        })
      }
    }
  }
)

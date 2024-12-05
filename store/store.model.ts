export interface UserState {
  login: string | null
  access_token: string | null
  userId: string | null
}
export interface UserStateData {
  data: UserState | null
  isLoading: boolean
  error: string | null
}

export interface CoordsState {
  latitude: number | null
  longitude: number | null
}

export interface LoginRequest {
  login: string
  password: string
}

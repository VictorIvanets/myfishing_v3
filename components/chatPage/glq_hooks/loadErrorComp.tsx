import { ApolloError } from "@apollo/client"
import Preloader from "@/components/preloader/preloader"
import { View } from "react-native-reanimated/lib/typescript/Animated"
import { ThemedText } from "@/components/ThemedText"

export function LoadingComponent(loading: boolean) {
  return loading && <Preloader />
}

export function ErrorComponent(error: ApolloError | undefined) {
  return (
    error && (
      <View className="flex">
        <ThemedText>{error.message}</ThemedText>
      </View>
    )
  )
}

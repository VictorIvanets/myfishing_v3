import { ThemedText } from "@/components/ThemedText"
import { Button, View } from "react-native"
import { stylesMapMarker as styles } from "./styles.mappage"
import { Dispatch, SetStateAction } from "react"
import { SetCoordsProps } from "@/app/(tabs)/mappage"

type NewSetMapMarker = {
  coords: SetCoordsProps
  setViewSetMarker: Dispatch<SetStateAction<SetCoordsProps | null>>
}

export default function NewSetMapMarker(props: NewSetMapMarker) {
  const { coords, setViewSetMarker } = props

  return (
    <View style={styles.containermarker}>
      <ThemedText type="subtitle" style={styles.colorWhite}>
        ДОДАТИ МІСЦЕ
      </ThemedText>
      <ThemedText type="subtitle" style={styles.colorWhite}>
        latitude: {coords.latitude}
      </ThemedText>
      <ThemedText type="subtitle" style={styles.colorWhite}>
        longitude: {coords.longitude}
      </ThemedText>
      <Button onPress={() => setViewSetMarker(null)} title="BACK"></Button>
    </View>
  )
}

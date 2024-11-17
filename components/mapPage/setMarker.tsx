import { ThemedText } from "@/components/ThemedText"
import { View, Text, Image, Pressable, Button } from "react-native"
import { stylesMapMarker as styles } from "./styles.mappage"
import { MapResponse } from "./getAllsets"
import { Dispatch, SetStateAction } from "react"

type MapMarkerProps = {
  marker: number
  setViewOneSetById: Dispatch<SetStateAction<number | null>>
}

export default function MapMarker(props: MapMarkerProps) {
  const { marker, setViewOneSetById } = props

  return (
    <View style={styles.containermarker}>
      <ThemedText type="mintext" style={styles.colorWhite}>
        Місце/Назва:
      </ThemedText>
      <ThemedText type="subtitle" style={styles.colorWhite}>
        {marker}
      </ThemedText>
      <ThemedText type="mintext" style={styles.colorWhite}>
        Тисни для прегляду
      </ThemedText>
      <Button onPress={() => setViewOneSetById(null)} title="BACK"></Button>
    </View>
  )
}

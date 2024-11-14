import { ThemedText } from "@/components/ThemedText"
import { View, Text, Image, Pressable, Button } from "react-native"
import { stylesMapMarker as styles } from "./styles.mappage"
import { MapResponse } from "./getAllsets"

type MapMarkerProps = {
  marker: MapResponse
}

export default function MapMarker(props: MapMarkerProps) {
  const { marker } = props

  return (
    <View style={styles.containermarker}>
      <ThemedText type="mintext" style={styles.colorWhite}>
        Місце/Назва:
      </ThemedText>
      <ThemedText type="subtitle" style={styles.colorWhite}>
        {marker.title}
      </ThemedText>
      <ThemedText type="mintext" style={styles.colorWhite}>
        Тисни для прегляду
      </ThemedText>
    </View>
  )
}

import { ThemedText } from "@/components/ThemedText"
import { View } from "react-native"
import { stylesMapMarker as styles } from "./styles.mappage"



export default function NewSetMapMarker() {

  return (
    <View style={styles.containermarker}>
      <ThemedText type="subtitle" style={styles.colorWhite}>
        Натисніть для
      </ThemedText>
      <ThemedText type="subtitle" style={styles.colorWhite}>
       додвання місця
      </ThemedText>
    </View>
  )
}

import { View, Pressable } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { default as styles } from "@/entities/allset/styles.allset"

interface SetMoreInfo {
  setIdforOneItem: number
  setID: number
  setSetIdforOneItem: React.Dispatch<React.SetStateAction<number | null>>
}

export default function SetMoreInfo({
  setIdforOneItem,
  setSetIdforOneItem,
}: SetMoreInfo) {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.itemText}>
        Місце: {setIdforOneItem}
      </ThemedText>
      <ThemedText type="default" style={styles.itemText}>
        Дата:
      </ThemedText>
      <ThemedText type="default" style={styles.itemText}>
        Що ловилося:
      </ThemedText>
      <ThemedText type="default" style={styles.itemText}>
        Оцінка:
      </ThemedText>
      <Pressable
        onPress={() => setSetIdforOneItem(null)}
        style={styles.buttoncoords}
      >
        <ThemedText style={styles.colorWhite}>НАЗАД</ThemedText>
      </Pressable>
    </View>
  )
}

//@ts-ignore next line
import { Pressable, TextInput, View } from "react-native"
import { default as styles } from "../styles.oneSetPage"
import { CommentItem, SetCommentProps } from "./type.comment"
import { useState } from "react"
import { PreloaderMin } from "@/components/preloader/preloader"
import Ionicons from "@expo/vector-icons/Ionicons"
import { colors } from "@/constants/Colors"
import { setComments } from "../api/api.comment"

export default function AddComponentSetPege({
  login,
  setId,
  isLoading,
  setIsLoading,
}: SetCommentProps) {
  const [value, setValue] = useState<string>("")

  async function onSubmit() {
    setIsLoading(false)
    if (value.length) {
      const outcomment: CommentItem = {
        login,
        setId,
        comment: value,
        commId: +(Math.random() * 100000).toFixed() * 2,
      }
      await setComments(outcomment)
      setValue("")
    }
    setIsLoading(true)
  }

  return (
    <View style={styles.addcommentbox}>
      {isLoading ? (
        <View style={styles.addcommentscontetnt}>
          <View style={styles.inputBlockText}>
            <TextInput
              placeholder="КОМЕНТАР"
              placeholderTextColor={colors.lightText}
              editable
              multiline
              numberOfLines={2}
              style={styles.inputText}
              onChangeText={(t: string) => setValue(t)}
              value={value}
            />
          </View>
          <Pressable onPress={() => onSubmit()} style={styles.sendBlockText}>
            <Ionicons name="send" size={50} color={colors.light} />
          </Pressable>
        </View>
      ) : (
        <PreloaderMin />
      )}
    </View>
  )
}

import { useEffect, useRef, useState } from "react"
import { useAddComment } from "./glq_hooks/chatComment.hook"
import { Pressable, TextInput, View } from "react-native"
import { stylesChat as styles } from "@/components/chatPage/styles.chatpage"
import { colors } from "@/constants/Colors"
import Ionicons from "@expo/vector-icons/Ionicons"

interface AddCommentComponentProps {
  login: string
}

export default function AddCommentComponent({
  login,
}: AddCommentComponentProps) {
  const { addedComment, loadingAddComment, errorAddComment } = useAddComment()
  const [value, setValue] = useState<string>("")
  const [viewLabel, setViewLabel] = useState(true)

  useEffect(() => {
    if (value.length > 0) setViewLabel(false)
    else setViewLabel(true)
  }, [value])

  const onSubmit = async () => {
    if (value.length) {
      addedComment(login, value)
      setValue("")
    }
  }

  return (
    <View style={styles.addcommentscontetnt}>
      <View style={styles.inputBlockText}>
        <TextInput
          placeholder="КОМЕНТАР"
          placeholderTextColor={colors.lightText}
          editable
          multiline
          numberOfLines={3}
          style={styles.inputText}
          onChangeText={(t) => setValue(t)}
          value={value}
        />
      </View>
      <Pressable onPress={() => onSubmit()} style={styles.sendBlockText}>
        <Ionicons name="send" size={50} color={colors.light} />
      </Pressable>
    </View>
  )
}

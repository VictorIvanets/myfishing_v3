import { Pressable, View } from "react-native"
import { default as styles } from "../styles.oneSetPage"
import { ThemedText } from "../../../components/ThemedText"
import { CommentItemProps } from "./type.comment"
import AntDesign from "@expo/vector-icons/AntDesign"
import { delComments } from "../api/api.comment"

export default function CommentItemComponent({
  data,
  setIsLoading,
  thisLogin,
}: CommentItemProps) {
  const { login, comment, commId, setId } = data

  async function delComment(commId: number) {
    setIsLoading(false)
    await delComments(commId)
    setIsLoading(true)
  }

  return (
    <View style={styles.comment}>
      <ThemedText style={styles.commentText} type="subtitle">
        {login}
      </ThemedText>
      <ThemedText style={styles.commentText} type="default">
        {comment}
      </ThemedText>

      {login === thisLogin && (
        <Pressable onPress={() => delComment(commId)} style={styles.btndel}>
          <AntDesign name="closecircle" size={27} color="black" />
        </Pressable>
      )}
    </View>
  )
}

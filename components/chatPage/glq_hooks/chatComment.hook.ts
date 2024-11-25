import { useMutation, useQuery, useSubscription } from "@apollo/client"
import gqlfile from "./gql/query"
import {
  IAddComment,
  IAllComment,
  IDelComment,
  UseSubCheckComment,
} from "./chat.types"

export const useAddComment = (): IAddComment => {
  const [newComment, { data, loading, error }] = useMutation(gqlfile.addComment)
  const addedComment = (user: string, comment: string) => {
    newComment({
      variables: {
        newCommentData: {
          user,
          comment,
        },
      },
    })
  }
  return {
    addedComment,
    loadingAddComment: loading,
    errorAddComment: error,
    addComment: data && data.CommentData,
  }
}

export const useQueryAllComment = (): IAllComment => {
  const { loading, error, data } = useQuery(gqlfile.allComment)

  return {
    loading,
    error,
    allComm: data && data.allComments,
  }
}

export const useDelComment = (): IDelComment => {
  const [deleteComment, { data, loading, error }] = useMutation(
    gqlfile.delComment
  )
  const deletedCommentById = (comId: string) => {
    deleteComment({
      variables: {
        comId,
      },
    })
  }
  return {
    deletedCommentById,
    loadingDelComment: loading,
    errorDelComment: error,
    delComment: data && data,
  }
}

export const useSubscribeForComment = (): UseSubCheckComment => {
  const { data, loading } = useSubscription(gqlfile.CommetChek)

  return {
    loadingSub: loading,
    subdataComment: data && data.commentAdded,
  }
}

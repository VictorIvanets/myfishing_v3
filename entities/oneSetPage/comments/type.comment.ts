export interface CommentsProps {
  login: string
  setId: number
}

export interface SetCommentProps extends CommentsProps {
  setIsLoading: (isLoading: boolean) => void
  isLoading: boolean
}

export interface CommentSubmit {
  comment: {
    value: string
  }
}

export interface CommentItem {
  login: string
  setId: number
  comment: string
  commId: number
}

export interface CommentItemProps {
  setIsLoading: (isLoading: boolean) => void
  isLoading: boolean
  thisLogin: string
  data: CommentItem
}

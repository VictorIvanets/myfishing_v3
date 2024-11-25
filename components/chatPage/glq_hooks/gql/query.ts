import { gql } from "@apollo/client"

class GQL {
  CheckIn = gql`
    mutation CheckIn($newUser: String!, $userId: String!) {
      userIn(newUser: $newUser, userId: $userId) {
        userId
        user
      }
    }
  `
  CheckOut = gql`
    mutation CheckOut($userId: String!) {
      userOut(userId: $userId)
    }
  `
  delComment = gql`
    mutation delComment($comId: String!) {
      deleteComment(comId: $comId)
    }
  `
  addComment = gql`
    mutation addComment($newCommentData: NewCommentInput!) {
      addComment(newCommentData: $newCommentData) {
        comId
        title
        comment
        user
        createdAt
      }
    }
  `

  allComment = gql`
    query allComment {
      allComments {
        comId
        comment
        user
        createdAt
      }
    }
  `
  UserChek = gql`
    subscription UserChek {
      userChek {
        userId
        user
      }
    }
  `
  CommetChek = gql`
    subscription CommetChek {
      commentAdded {
        comId
        comment
        user
        createdAt
      }
    }
  `
}

const gqlfile = new GQL()

export default gqlfile

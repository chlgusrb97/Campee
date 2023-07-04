import {gql} from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUserExample($password: String!, $email: String!) {
    loginUserExample(password: $password, email: $email) {
      accessToken
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      email
      name
      picture
    }
  }
`;

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $useditemId: ID!
    $updateUseditemInput: UpdateUseditemInput!
  ) {
    updateUseditem(
      useditemId: $useditemId
      updateUseditemInput: $updateUseditemInput
    ) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation useditemId($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_POINT = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
    }
  }
`;

export const BUYING_PRODUCTS = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $useditemId: ID!
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
  ) {
    createUseditemQuestion(
      useditemId: $useditemId
      createUseditemQuestionInput: $createUseditemQuestionInput
    ) {
      _id
      contents
    }
  }
`;

export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $useditemQuestionId: ID!
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
  ) {
    updateUseditemQuestion(
      useditemQuestionId: $useditemQuestionId
      updateUseditemQuestionInput: $updateUseditemQuestionInput
    ) {
      _id
      contents
    }
  }
`;

export const CREATE_USED_ITEM_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $useditemQuestionId: ID!
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
  ) {
    createUseditemQuestionAnswer(
      useditemQuestionId: $useditemQuestionId
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
    ) {
      _id
      contents
    }
  }
`;

export const DELETE_USED_ITEM_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

export const UPDATE_USED_ITEM_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $useditemQuestionAnswerId: ID!
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
  ) {
    updateUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
    ) {
      _id
      contents
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($boardCommentId: ID!, $password: String) {
    deleteBoardComment(boardCommentId: $boardCommentId, password: $password)
  }
`;

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $boardCommentId: ID!
    $password: String
    $updateBoardCommentInput: UpdateBoardCommentInput!
  ) {
    updateBoardComment(
      boardCommentId: $boardCommentId
      password: $password
      updateBoardCommentInput: $updateBoardCommentInput
    ) {
      _id
      writer
      contents
      createdAt
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $boardId: ID!
    $password: String
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(
      boardId: $boardId
      password: $password
      updateBoardInput: $updateBoardInput
    ) {
      _id
      writer
      title
      contents
      youtubeUrl
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

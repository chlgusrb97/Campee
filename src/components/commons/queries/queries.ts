import {gql} from "@apollo/client";

export const USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;

export const USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      contents
      price
      images
      seller {
        _id
        name
      }
      createdAt
      pickedCount
    }
  }
`;

export const USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
      seller {
        _id
        name
        picture
      }
      pickedCount
    }
  }
`;

export const USED_ITEMS_MY_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      images
      seller {
        _id
        name
      }
      createdAt
      soldAt
    }
  }
`;

export const USED_ITEMS_MY_PICK = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
      images
      createdAt
      soldAt
    }
  }
`;

export const POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($page: Int) {
    fetchPointTransactions(page: $page) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const USED_TRANSACTIONS_BUYING = gql`
  query fetchPointTransactionsOfBuying($page: Int) {
    fetchPointTransactionsOfBuying(page: $page) {
      _id
      amount
      balance
      createdAt
      useditem {
        name
      }
    }
  }
`;

export const USED_TRANSACTIONS_COUNT_BUYING = gql`
  query {
    fetchPointTransactionsCountOfBuying
  }
`;

export const USER_TRANSACTIONS_SELLING = gql`
  query fetchPointTransactionsOfSelling($page: Int) {
    fetchPointTransactionsOfSelling(page: $page) {
      _id
      impUid
      amount
      balance
      createdAt
      useditem {
        name
      }
    }
  }
`;

export const USED_TRANSACTIONS_COUNT_SELLING = gql`
  query {
    fetchPointTransactionsCountOfSelling
  }
`;

export const USER_TRANSACTIONS_LOADING = gql`
  query fetchPointTransactionsOfLoading($page: Int) {
    fetchPointTransactionsOfLoading(page: $page) {
      _id
      impUid
      amount
      balance
      createdAt
      status
      statusDetail
    }
  }
`;

export const USED_TRANSACTIONS_COUNT_LOADING = gql`
  query {
    fetchPointTransactionsCountOfLoading
  }
`;

export const USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      user {
        _id
        name
        picture
      }
      createdAt
    }
  }
`;

export const USED_ITEM_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!, $page: Int) {
    fetchUseditemQuestionAnswers(
      useditemQuestionId: $useditemQuestionId
      page: $page
    ) {
      _id
      contents
      createdAt
      user {
        _id
        name
        picture
      }
    }
  }
`;

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
      likeCount
      createdAt
    }
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      images
      createdAt
      boardAddress {
        zipcode
        address
        addressDetail
      }
      user {
        name
        picture
      }
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export const FETCH_BOARDS_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      likeCount
      createdAt
      images
      user {
        _id
        name
        picture
      }
    }
  }
`;

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      createdAt
    }
  }
`;

export const FETCH_BEST_USED_ITEMS = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      price
      createdAt
      images
    }
  }
`;

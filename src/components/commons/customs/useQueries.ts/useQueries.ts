import {useQuery} from "@apollo/client";
import {
  FETCH_BEST_USED_ITEMS,
  FETCH_BOARD,
  FETCH_BOARDS,
  FETCH_BOARDS_BEST,
  FETCH_BOARDS_COUNT,
  FETCH_BOARD_COMMENTS,
  USED_ITEM,
  USED_ITEMS,
  USED_ITEMS_MY_PICK,
  USED_ITEMS_MY_SOLD,
  USED_ITEM_ANSWERS,
  USED_ITEM_QUESTIONS,
  USED_TRANSACTIONS_BUYING,
  USED_TRANSACTIONS_COUNT_BUYING,
  USED_TRANSACTIONS_COUNT_SELLING,
  USER_LOGGED_IN,
  USER_TRANSACTIONS_SELLING,
} from "../../queries/queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
  IQueryFetchPointTransactionsOfBuyingArgs,
  IQueryFetchPointTransactionsOfSellingArgs,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemQuestionAnswersArgs,
  IQueryFetchUseditemQuestionsArgs,
  IQueryFetchUseditemsArgs,
  IQueryFetchUseditemsIPickedArgs,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";
import {useRouter} from "next/router";

export const useQueryUser = () => {
  const result = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(USER_LOGGED_IN);

  return result;
};

export const useQueryUsedItems = () => {
  const result = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(USED_ITEMS);

  return result;
};

export const useQueryUsedItem = () => {
  const router = useRouter();

  const result = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(USED_ITEM, {variables: {useditemId: String(router.query.productsId)}});

  return result;
};

export const useQueryUsedItemMySold = () => {
  const result = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(USED_ITEMS_MY_SOLD);

  return result;
};

export const useQueryUsedItemMyPick = () => {
  const result = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(USED_ITEMS_MY_PICK, {
    variables: {
      search: "",
    },
  });

  return result;
};

export const useQueryUsedTransActionsBuying = () => {
  const result = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfBuying">,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(USED_TRANSACTIONS_BUYING);

  return result;
};

export const useQueryUsedTransActionsCountBuying = () => {
  const result = useQuery<Pick<IQuery, "fetchPointTransactionsCountOfBuying">>(
    USED_TRANSACTIONS_COUNT_BUYING
  );

  return result;
};

export const useQueryUsedTransActionsSelling = () => {
  const result = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">,
    IQueryFetchPointTransactionsOfSellingArgs
  >(USER_TRANSACTIONS_SELLING);

  return result;
};

export const useQueryUsedTransActionsCountSelling = () => {
  const result = useQuery<Pick<IQuery, "fetchPointTransactionsCountOfSelling">>(
    USED_TRANSACTIONS_COUNT_SELLING
  );

  return result;
};

export const useQueryUsedItemQuestions = () => {
  const router = useRouter();

  const result = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.productsId),
    },
  });

  return result;
};

export const useQueryUsedItemAnswers = (
  useditemQuestionId?: string | undefined
) => {
  const result = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(USED_ITEM_ANSWERS, {
    variables: {
      useditemQuestionId: String(useditemQuestionId),
    },
  });

  return result;
};

export const useQueryBoards = () => {
  const result = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return result;
};

export const useQueryBoard = () => {
  const router = useRouter();

  const result = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {boardId: String(router.query.boardsId)},
    }
  );

  return result;
};

export const useQueryBoardsCount = () => {
  const result = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  return result;
};

export const useQueryBoardsBest = () => {
  const result =
    useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BOARDS_BEST);

  return result;
};

export const useQueryBoardComments = () => {
  const router = useRouter();

  const result = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardsId),
    },
  });

  return result;
};

export const useQueryBestUsedItems = () => {
  const result = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_BEST_USED_ITEMS
  );

  return result;
};

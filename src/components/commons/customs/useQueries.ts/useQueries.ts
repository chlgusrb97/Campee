import {useQuery} from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  USED_ITEM,
  USED_ITEM_ANSWERS,
  USED_ITEM_QUESTIONS,
  USER_LOGGED_IN,
} from "../../queries/queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemQuestionAnswersArgs,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import {useRouter} from "next/router";

export const useQueryUser = () => {
  const result = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(USER_LOGGED_IN);

  return result;
};

export const useQueryUsedItem = () => {
  const router = useRouter();

  const {data: usedItemData} = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(USED_ITEM, {variables: {useditemId: String(router.query.productsId)}});

  return {usedItemData};
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

export const useQueryBoardsCount = () => {
  const result = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  return result;
};

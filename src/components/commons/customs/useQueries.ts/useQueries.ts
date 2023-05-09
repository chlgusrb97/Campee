import {useQuery} from "@apollo/client";
import {USED_ITEM, USED_ITEM_QUESTIONS} from "../../queries/queries";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import {useRouter} from "next/router";

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

  const {data: itemQuestionsData} = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.productsId),
    },
  });

  return {itemQuestionsData};
};

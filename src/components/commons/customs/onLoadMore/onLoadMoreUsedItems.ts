import {useQuery} from "@apollo/client";
import {USED_ITEMS} from "../../queries/queries";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import {useQueryUsedItemQuestions} from "../useQueries.ts/useQueries";

export const onLoadMoreUsedItems = () => {
  const {data, fetchMore} = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(USED_ITEMS);

  const onLoadMore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return {onLoadMore};
};

export const onLoadMoreUsedItemQuestions = () => {
  const {data, fetchMore} = useQueryUsedItemQuestions();

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditemQuestions.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (fetchMoreResult.fetchUseditemQuestions === undefined) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return {data, onLoadMore};
};

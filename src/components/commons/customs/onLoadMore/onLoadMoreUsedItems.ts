import {useQuery} from "@apollo/client";
import {USED_ITEMS} from "../../queries/queries";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import {
  useQueryBoardComments,
  useQueryUsedItemQuestions,
} from "../useQueries.ts/useQueries";

interface IOnLoadMoreProps {
  data: Pick<IQuery, "fetchUseditems"> | undefined;
  fetchMore: any;
}

export const onLoadMoreFunc = (props: IOnLoadMoreProps) => {
  const onLoadMore = () => {
    if (props.data === undefined) return;
    void props.fetchMore({
      variables: {
        page: Math.ceil((props.data.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev: any, {fetchMoreResult}: any) => {
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

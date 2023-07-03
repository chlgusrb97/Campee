import {IQuery, IUseditem} from "../../../../commons/types/generated/types";
import {useQueryUsedItemQuestions} from "../useQueries.ts/useQueries";

interface IOnLoadMoreProps {
  data:
    | Pick<IQuery, "fetchUseditems">
    | Pick<IQuery, "fetchUseditemsISold">
    | Pick<IQuery, "fetchUseditemsIPicked">
    | undefined;
  dataArr: IUseditem[] | undefined;
  fetchMore: any;
}

export const onLoadMoreFunc = (props: IOnLoadMoreProps) => {
  const onLoadMore = () => {
    if (props.data === undefined) return;
    void props.fetchMore({
      variables: {
        page: Math.ceil((props.dataArr?.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev: any, {fetchMoreResult}: any) => {
        if (!fetchMoreResult) return prev;

        const updatedData = {
          ...prev,
          ...fetchMoreResult,
        };

        if (fetchMoreResult.fetchUseditems) {
          updatedData.fetchUseditems = [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ];
        }

        if (fetchMoreResult.fetchUseditemsISold) {
          updatedData.fetchUseditemsISold = [
            ...prev.fetchUseditemsISold,
            ...fetchMoreResult.fetchUseditemsISold,
          ];
        }

        if (fetchMoreResult.fetchUseditemsIPicked) {
          updatedData.fetchUseditemsIPicked = [
            ...prev.fetchUseditemsIPicked,
            ...fetchMoreResult.fetchUseditemsIPicked,
          ];
        }

        return updatedData;
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

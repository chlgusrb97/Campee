import {ChangeEvent} from "react";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import {ApolloQueryResult} from "@apollo/client";
import {useRecoilState} from "recoil";
import {keyWordState} from "../../../commons/stores/stores";

type FetchBoardsArgs = Partial<IQueryFetchBoardsArgs>;
type FetchUseditemsArgs = Partial<IQueryFetchUseditemsArgs>;

type RefetchFunction =
  | ((
      variables?: FetchBoardsArgs
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>)
  | ((
      variables?: FetchUseditemsArgs
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>);

interface IUseSearchProps {
  refetch?: RefetchFunction;
}

export const useSearch = (props: IUseSearchProps) => {
  const [keyWord, setKeyWord] = useRecoilState(keyWordState);

  const getDebounce = _.debounce((value: string) => {
    if (props.refetch) void props.refetch({search: value, page: 1});
    setKeyWord(value);
  }, 500);

  const onChangeSearchEvent = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return {keyWord, onChangeSearchEvent};
};

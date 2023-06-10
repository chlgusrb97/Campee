import {ApolloQueryResult} from "@apollo/client";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import {Search, SearchIcon} from "./search.styles";
import {ChangeEvent, Dispatch, SetStateAction} from "react";

interface ISearchItemProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;

  setKeyWord: Dispatch<SetStateAction<string>>;
}

export default function SearchItem(props: ISearchItemProps) {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({search: value, page: 1});
    props.setKeyWord(value);
  }, 500);

  const onChangeSearchEvent = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <Search>
      <input
        placeholder="검색어를 입력해주세요."
        onChange={onChangeSearchEvent}
      />
      <button>
        <SearchIcon />
      </button>
    </Search>
  );
}

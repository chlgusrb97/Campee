import {ApolloQueryResult} from "@apollo/client";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import {Search, SearchIcon} from "./search.styles";
import {ChangeEvent, Dispatch, SetStateAction} from "react";

type FetchBoardsArgs = Partial<IQueryFetchBoardsArgs>;
type FetchUseditemsArgs = Partial<IQueryFetchUseditemsArgs>;

type RefetchFunction =
  | ((
      variables?: FetchBoardsArgs
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>)
  | ((
      variables?: FetchUseditemsArgs
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>);

interface ISearchItemProps {
  refetch: RefetchFunction;
  setKeyWord?: Dispatch<SetStateAction<string>>;
  placeHolder: string;
}

export default function SearchItem(props: ISearchItemProps) {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({search: value, page: 1});

    if (props.setKeyWord) {
      props.setKeyWord(value);
    }
  }, 500);

  const onChangeSearchEvent = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <Search>
      <input placeholder={props.placeHolder} onChange={onChangeSearchEvent} />
      <button type="button">
        <SearchIcon />
      </button>
    </Search>
  );
}

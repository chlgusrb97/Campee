import {ApolloQueryResult} from "@apollo/client";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import {Search, SearchIcon} from "./search.styles";
import {useSearch} from "../../customs/useSearch";

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
  placeHolder: string;
}

export default function SearchItem(props: ISearchItemProps) {
  const {onChangeSearchEvent} = useSearch({
    refetch: props.refetch,
  });

  return (
    <Search>
      <input placeholder={props.placeHolder} onChange={onChangeSearchEvent} />
      <button type="button">
        <SearchIcon />
      </button>
    </Search>
  );
}

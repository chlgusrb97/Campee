import {ApolloQueryResult} from "@apollo/client";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchUseditemsArgs,
  IQueryFetchUseditemsIPickedArgs,
  IQueryFetchUseditemsISoldArgs,
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
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>)
  | ((
      variables?: Partial<IQueryFetchUseditemsISoldArgs> | undefined
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsISold">>>)
  | ((
      variables?: Partial<IQueryFetchUseditemsIPickedArgs> | undefined
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIPicked">>>);

interface ISearchItemProps {
  refetch: RefetchFunction;
  placeHolder: string;
  tabletWidth?: string;
  tabletMargin?: string;
  mobileWidth?: string;
  mobileMargin?: string;
}

export default function SearchItem(props: ISearchItemProps) {
  const {onChangeSearchEvent} = useSearch({
    refetch: props.refetch,
  });

  return (
    <Search
      tabletWidth={props.tabletWidth}
      tabletMargin={props.tabletMargin}
      mobileWidth={props.mobileWidth}
      mobileMargin={props.mobileMargin}
    >
      <input placeholder={props.placeHolder} onChange={onChangeSearchEvent} />
      <button type="button">
        <SearchIcon />
      </button>
    </Search>
  );
}

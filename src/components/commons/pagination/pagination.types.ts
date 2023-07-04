import {ApolloQueryResult} from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchPointTransactionsOfBuyingArgs,
} from "../../../commons/types/generated/types";

type RefetchFunction =
  | ((
      variables: Partial<IQueryFetchBoardsArgs>
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>)
  | ((
      variables?: Partial<IQueryFetchPointTransactionsOfBuyingArgs> | undefined
    ) => Promise<
      ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfBuying">>
    >);

export interface IPaginationProps {
  count?: number;
  refetch: RefetchFunction;
}

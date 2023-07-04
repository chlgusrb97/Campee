import {ApolloQueryResult} from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchPointTransactionsArgs,
  IQueryFetchPointTransactionsOfBuyingArgs,
  IQueryFetchPointTransactionsOfLoadingArgs,
  IQueryFetchPointTransactionsOfSellingArgs,
} from "../../../commons/types/generated/types";

type RefetchFunction =
  | ((
      variables: Partial<IQueryFetchBoardsArgs>
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>)
  | ((
      variables?: Partial<IQueryFetchPointTransactionsOfBuyingArgs> | undefined
    ) => Promise<
      ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfBuying">>
    >)
  | ((
      variables?: Partial<IQueryFetchPointTransactionsOfSellingArgs> | undefined
    ) => Promise<
      ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfSelling">>
    >)
  | ((
      variables?: Partial<IQueryFetchPointTransactionsOfLoadingArgs> | undefined
    ) => Promise<
      ApolloQueryResult<Pick<IQuery, "fetchPointTransactionsOfLoading">>
    >)
  | ((
      variables?: Partial<IQueryFetchPointTransactionsArgs> | undefined
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchPointTransactions">>>);

export interface IPaginationProps {
  count?: number;
  refetch: RefetchFunction;
}

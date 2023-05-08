import {useQuery} from "@apollo/client";
import {USED_ITEM} from "../../queries/queries";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import {useRouter} from "next/router";

export const useQueryUsedItem = () => {
  const router = useRouter();

  const {data: usedItemData} = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(USED_ITEM, {variables: {useditemId: String(router.query.productsId)}});

  return {usedItemData};
};

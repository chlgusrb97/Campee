import {useRouter} from "next/router";
import {USED_ITEM, USED_ITEMS_MY_PICK} from "../../queries/queries";
import {useMutationUsedItemPick} from "../useMutations/useMutations";
import {Modal} from "antd";
import {
  MYPAGE_WISHLIST_PATH,
  PRODUCTS_DETAIL_PATH,
} from "../../../../commons/paths/paths";

export const useUsedItemPick = () => {
  const router = useRouter();
  const [toggleUseditemPick] = useMutationUsedItemPick();

  let refetchQueries: any[] = [];

  const itemPick = (useditemId: string | undefined) => async () => {
    if (router.asPath.includes(PRODUCTS_DETAIL_PATH)) {
      refetchQueries.push({
        query: USED_ITEM,
        variables: {useditemId},
      });
    } else if (router.asPath.includes(MYPAGE_WISHLIST_PATH)) {
      refetchQueries.push({
        query: USED_ITEMS_MY_PICK,
        variables: {
          search: "",
        },
      });
      console.log("찜상품");
    }

    try {
      await toggleUseditemPick({
        variables: {
          useditemId: String(useditemId),
        },
        refetchQueries: [...refetchQueries],
      });
    } catch (error) {
      Modal.error({content: "다시 시도해주세요."});
    }
  };

  return {itemPick};
};

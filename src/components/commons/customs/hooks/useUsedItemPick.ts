import {useRouter} from "next/router";
import {USED_ITEM} from "../../queries/queries";
import {useMutationUsedItemPick} from "../useMutations/useMutations";
import {Modal} from "antd";

export const useUsedItemPick = () => {
  const router = useRouter();

  const [toggleUseditemPick] = useMutationUsedItemPick();

  const itemPick = (useditemId: string | undefined) => async () => {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId: String(useditemId),
        },
        refetchQueries: [
          {
            query: USED_ITEM,
            variables: {useditemId: String(router.query.productsId)},
          },
        ],
      });
    } catch (error) {
      Modal.error({content: "다시 시도해주세요."});
    }
  };

  return {itemPick};
};

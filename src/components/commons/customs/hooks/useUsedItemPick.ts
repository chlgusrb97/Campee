import {useMutationUsedItemPick} from "../useMutations/useMutations";
import {Modal} from "antd";

export const useUsedItemPick = () => {
  const [toggleUseditemPick] = useMutationUsedItemPick();

  const itemPick = (useditemId: string | undefined) => async () => {
    try {
      const result = await toggleUseditemPick({
        variables: {
          useditemId: String(useditemId),
        },
      });
      console.log(result);
    } catch (error) {
      Modal.error({content: "다시 시도해주세요."});
    }
  };

  return {itemPick};
};

import {useMutationUsedItemPick} from "../useMutations/useMutations";
import {Modal} from "antd";

export const useUsedItemPick = () => {
  const [toggleUseditemPick] = useMutationUsedItemPick();

  const usedItemPick = (useditemId: string) => async () => {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId,
        },
      });
    } catch (error) {
      Modal.error({content: "다시 시도해주세요."});
    }
  };

  return {usedItemPick};
};

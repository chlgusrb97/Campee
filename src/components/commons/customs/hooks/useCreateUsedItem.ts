import {ICreateUseditemInput} from "../../../../commons/types/generated/types";
import {useMutationCreateUsedItem} from "../useMutations/useMutations";

export const useCreateUsedItem = () => {
  const [createUseditem] = useMutationCreateUsedItem();

  const createUsedItemSubmit = async (
    data: ICreateUseditemInput
  ): Promise<void> => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
          },
        },
      });
      console.log(result);
    } catch (error) {}
  };

  return {createUsedItemSubmit};
};

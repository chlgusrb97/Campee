import {Modal} from "antd";
import {ICreateUseditemQuestionInput} from "../../../../commons/types/generated/types";
import {useMutationCreateUsedItemQuestion} from "../useMutations/useMutations";
import {UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";

export const useCreateUsedItemQuestion = () => {
  const router = useRouter();
  const [createUseditemQuestion] = useMutationCreateUsedItemQuestion();

  const createQuestionSubmit =
    (setValue: UseFormSetValue<ICreateUseditemQuestionInput>) =>
    async (data: ICreateUseditemQuestionInput): Promise<void> => {
      try {
        const result = await createUseditemQuestion({
          variables: {
            useditemId: String(router.query.productsId),
            createUseditemQuestionInput: {
              contents: data.contents,
            },
          },
        });
        setValue("contents", "");
        console.log(result, "댓글 등록!");
      } catch (error) {
        Modal.error({
          content: "댓글 등록에 실패하였습니다. 다시 시도해주세요.",
        });
      }
    };

  return {createQuestionSubmit};
};

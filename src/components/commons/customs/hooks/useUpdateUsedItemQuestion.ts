import {Modal} from "antd";
import {
  IUpdateUseditemQuestionInput,
  IUseditemQuestion,
} from "../../../../commons/types/generated/types";
import {useMutationUpdateUsedItemQuestion} from "../useMutations/useMutations";
import {USED_ITEM_QUESTIONS} from "../../queries/queries";
import {useRouter} from "next/router";
import {useState} from "react";

export const useUpdateUsedItemQuestion = () => {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [updateUseditemQuestion] = useMutationUpdateUsedItemQuestion();

  const updateQuestionSubmit =
    (QuestionId: IUseditemQuestion) =>
    async (data: IUpdateUseditemQuestionInput): Promise<void> => {
      try {
        const result = await updateUseditemQuestion({
          variables: {
            useditemQuestionId: QuestionId._id,
            updateUseditemQuestionInput: {
              contents: data.contents,
            },
          },
          refetchQueries: [
            {
              query: USED_ITEM_QUESTIONS,
              variables: {useditemId: String(router.query.productsId)},
            },
          ],
        });
        setIsEdit(false);
      } catch (error) {
        Modal.error({
          content: "댓글 수정에 실패하였습니다. 다시 시도해주세요.",
        });
      }
    };

  return {updateQuestionSubmit, isEdit, setIsEdit};
};

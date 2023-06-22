import {Modal} from "antd";
import {IUpdateUseditemQuestionInput} from "../../../../commons/types/generated/types";
import {useMutationUpdateUsedItemQuestion} from "../useMutations/useMutations";
import {USED_ITEM_QUESTIONS} from "../../queries/queries";
import {useRouter} from "next/router";
import {Dispatch, SetStateAction} from "react";

interface IUpdateQuestionSubmitProps {
  questionId: string | undefined;
  setIsCommentEdit: Dispatch<SetStateAction<boolean>> | undefined;
}

export const useUpdateUsedItemQuestion = () => {
  const router = useRouter();
  const [updateUseditemQuestion] = useMutationUpdateUsedItemQuestion();

  const updateQuestionSubmit =
    (props: IUpdateQuestionSubmitProps) =>
    async (data: IUpdateUseditemQuestionInput): Promise<void> => {
      try {
        await updateUseditemQuestion({
          variables: {
            useditemQuestionId: String(props.questionId),
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
        if (props.setIsCommentEdit) props.setIsCommentEdit(false);
        Modal.success({content: "댓글이 수정되었습니다."});
      } catch (error) {
        Modal.error({
          content: "댓글 수정에 실패하였습니다. 다시 시도해주세요.",
        });
      }
    };

  return {updateQuestionSubmit};
};

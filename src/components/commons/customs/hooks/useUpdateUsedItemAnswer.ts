import {Modal} from "antd";
import {IUpdateUseditemQuestionAnswerInput} from "../../../../commons/types/generated/types";
import {useMutationUpdateUsedItemAnswer} from "../useMutations/useMutations";
import {Dispatch, SetStateAction} from "react";

interface IUpdateAnswerSubmitProps {
  useditemQuestionAnswerId: string | undefined;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
}

export const useUpdateUsedItemAnswer = () => {
  const [updateUseditemQuestionAnswer] = useMutationUpdateUsedItemAnswer();

  const updateAnswerSubmit =
    (props: IUpdateAnswerSubmitProps) =>
    async (data: IUpdateUseditemQuestionAnswerInput) => {
      try {
        await updateUseditemQuestionAnswer({
          variables: {
            useditemQuestionAnswerId: String(props.useditemQuestionAnswerId),
            updateUseditemQuestionAnswerInput: {
              contents: data.contents,
            },
          },
        });
        props.setIsAnswer(false);
        Modal.success({content: "댓글이 수정되었습니다."});
      } catch (error) {
        Modal.error({
          content: "댓글 수정에 실패하였습니다. 다시 시도해주세요.",
        });
      }
    };

  return {updateAnswerSubmit};
};

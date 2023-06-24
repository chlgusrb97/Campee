import {UseFormSetValue} from "react-hook-form";
import {ICreateUseditemQuestionAnswerInput} from "../../../../commons/types/generated/types";
import {useMutationCreateUsedItemAnswer} from "../useMutations/useMutations";
import {Dispatch, SetStateAction} from "react";
import {Modal} from "antd";
import {USED_ITEM_ANSWERS} from "../../queries/queries";

interface ICrateAnswerSubmitProps {
  useditemQuestionId: string;
  setValue: UseFormSetValue<ICreateUseditemQuestionAnswerInput>;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
}

export const useCreateUsedItemAnswer = () => {
  const [createUseditemQuestionAnswer] = useMutationCreateUsedItemAnswer();

  const createAnswerSubmit =
    (props: ICrateAnswerSubmitProps) =>
    async (data: ICreateUseditemQuestionAnswerInput): Promise<void> => {
      try {
        await createUseditemQuestionAnswer({
          variables: {
            useditemQuestionId: props.useditemQuestionId,
            createUseditemQuestionAnswerInput: {
              contents: data.contents,
            },
          },
          refetchQueries: [
            {
              query: USED_ITEM_ANSWERS,
              variables: {
                useditemQuestionId: props.useditemQuestionId,
              },
            },
          ],
        });
        props.setIsAnswer(false);
        props.setValue("contents", "");
      } catch (error) {
        Modal.error({
          content: "댓글 답변 등록에 실패하였습니다. 다시 시도해주세요.",
        });
      }
    };

  return {createAnswerSubmit};
};

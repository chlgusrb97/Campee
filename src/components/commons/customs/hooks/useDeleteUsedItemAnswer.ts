import {useRouter} from "next/router";
import {useMutationDeleteUsedItemAnswer} from "../useMutations/useMutations";
import {USED_ITEM_ANSWERS} from "../../queries/queries";
import {Dispatch, SetStateAction} from "react";
import {Modal} from "antd";

interface IOnClickDeleteAnswerProps {
  questionId: string;
  useditemQuestionAnswerId: string;
  setIsDeleteModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const useDeleteUsedItemAnswer = () => {
  const [deleteUseditemQuestionAnswer] = useMutationDeleteUsedItemAnswer();

  const onClickDeleteAnswer =
    (props: IOnClickDeleteAnswerProps) => async () => {
      try {
        await deleteUseditemQuestionAnswer({
          variables: {
            useditemQuestionAnswerId: props.useditemQuestionAnswerId,
          },
          refetchQueries: [
            {
              query: USED_ITEM_ANSWERS,
              variables: {
                useditemQuestionId: props.questionId,
              },
            },
          ],
        });
        props.setIsDeleteModalOpen(false);
      } catch (error) {
        Modal.error({
          content: "댓글 삭제에 실패하였습니다. 다시 시도해주세요.",
        });
      }
    };

  return {onClickDeleteAnswer};
};

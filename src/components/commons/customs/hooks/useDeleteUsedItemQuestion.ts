import {Modal} from "antd";
import {useMutationDeleteUsedItemQuestion} from "../useMutations/useMutations";
import {useRouter} from "next/router";
import {USED_ITEM_QUESTIONS} from "../../queries/queries";

export const useDeleteUsedItemQuestion = () => {
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutationDeleteUsedItemQuestion();

  const onClickDeleteQuestion =
    (useditemQuestionId: string) => async (): Promise<void> => {
      try {
        await deleteUseditemQuestion({
          variables: {
            useditemQuestionId,
          },
          refetchQueries: [
            {
              query: USED_ITEM_QUESTIONS,
              variables: {
                useditemId: String(router.query.productsId),
              },
            },
          ],
        });
      } catch (error) {
        Modal.error({
          content: "댓글 삭제에 실패하였습니다. 다시 시도해주세요.",
        });
      }
    };

  return {onClickDeleteQuestion};
};

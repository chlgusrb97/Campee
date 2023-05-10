import {UseFormSetValue} from "react-hook-form";
import {ICreateUseditemQuestionAnswerInput} from "../../../../commons/types/generated/types";
import {useMutationCreateUsedItemAnswer} from "../useMutations/useMutations";
import {Dispatch, SetStateAction} from "react";

export const useCreateUsedItemAnswer = () => {
  const [createUseditemQuestionAnswer] = useMutationCreateUsedItemAnswer();

  const createAnswerSubmit =
    (
      useditemQuestionId: string,
      setValue: UseFormSetValue<ICreateUseditemQuestionAnswerInput>,
      setIsAnswer: Dispatch<SetStateAction<boolean>>
    ) =>
    async (data: ICreateUseditemQuestionAnswerInput): Promise<void> => {
      const result = await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId,
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
        },
      });
      setIsAnswer(false);
      setValue("contents", "");
      console.log(result, "답글 작성!");
    };

  return {createAnswerSubmit};
};

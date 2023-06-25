import {Dispatch, SetStateAction} from "react";
import {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../../../../commons/types/generated/types";
import {useCreateUsedItemAnswer} from "../../../../../commons/customs/hooks/useCreateUsedItemAnswer";
import CommentWrite from "../../../../../commons/items/comment/write/comment.write.index";
import {useFormProductsCommentAnswer} from "../../../../../commons/useForm/useForm";
import * as S from "./comment.answer.write.styles";
import {useUpdateUsedItemAnswer} from "../../../../../commons/customs/hooks/useUpdateUsedItemAnswer";

interface ICommentAnswerWriteUIProps {
  question: IUseditemQuestion;
  answer?: IUseditemQuestionAnswer;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  isAnwerEdit?: boolean;
}

export default function CommentAnswerWriteUI(
  props: ICommentAnswerWriteUIProps
) {
  const {register, setValue, handleSubmit} = useFormProductsCommentAnswer();
  const {createAnswerSubmit} = useCreateUsedItemAnswer();
  const {updateAnswerSubmit} = useUpdateUsedItemAnswer();

  return (
    <S.CommentAnswerWriteWrapper
      onSubmit={handleSubmit(
        props.isAnwerEdit
          ? updateAnswerSubmit({
              useditemQuestionAnswerId: props.answer?._id,
              setIsAnswer: props.setIsAnswer,
            })
          : createAnswerSubmit({
              useditemQuestionId: props.question._id,
              setValue,
              setIsAnswer: props.setIsAnswer,
            })
      )}
    >
      <S.UserIconBox>
        <S.UserIcon />
      </S.UserIconBox>
      <CommentWrite
        defaultValue={props.answer ? props.answer.contents : ""}
        placeHolder="댓글을 입력해주세요."
        isCommentEdit={props.isAnwerEdit}
        register={register("contents")}
      />
    </S.CommentAnswerWriteWrapper>
  );
}

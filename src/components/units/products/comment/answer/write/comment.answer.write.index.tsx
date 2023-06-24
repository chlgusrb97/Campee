import {Dispatch, SetStateAction} from "react";
import {IUseditemQuestion} from "../../../../../../commons/types/generated/types";
import {useCreateUsedItemAnswer} from "../../../../../commons/customs/hooks/useCreateUsedItemAnswer";
import CommentWrite from "../../../../../commons/items/comment/write/comment.write.index";
import {useFormProductsCommentAnswer} from "../../../../../commons/useForm/useForm";
import * as S from "./comment.answer.write.styles";

interface ICommentAnswerWriteUIProps {
  question: IUseditemQuestion;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
}

export default function CommentAnswerWriteUI(
  props: ICommentAnswerWriteUIProps
) {
  const {register, setValue, handleSubmit} = useFormProductsCommentAnswer();
  const {createAnswerSubmit} = useCreateUsedItemAnswer();

  return (
    <S.CommentAnswerWriteWrapper
      onSubmit={handleSubmit(
        createAnswerSubmit({
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
        defaultValue=""
        placeHolder="댓글을 입력해주세요."
        register={register("contents")}
      />
    </S.CommentAnswerWriteWrapper>
  );
}

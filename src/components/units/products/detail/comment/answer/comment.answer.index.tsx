import {useCreateUsedItemAnswer} from "../../../../../commons/customs/hooks/useCreateUsedItemAnswer";
import {useQueryUsedItemAnswers} from "../../../../../commons/customs/useQueries.ts/useQueries";
import ButtonItem from "../../../../../commons/items/button/button.index";
import {useFormProductsCommentAnswer} from "../../../../../commons/useForm/useForm";
import * as S from "./comment.answer.styles";
import {ICommentAnswerUIProps} from "./comment.answer.types";

export default function CommentAnswerUI(props: ICommentAnswerUIProps) {
  const {register, setValue, handleSubmit} = useFormProductsCommentAnswer();
  const {data} = useQueryUsedItemAnswers(props.Question._id);
  const {createAnswerSubmit} = useCreateUsedItemAnswer();

  return (
    <>
      {data?.fetchUseditemQuestionAnswers.map((Answer) => (
        <S.Answer key={Answer._id}>
          <span>답변</span>
          <S.Date>{Answer.createdAt}</S.Date>
          <S.AnswerContents>{Answer.contents}</S.AnswerContents>
        </S.Answer>
      ))}
      {props.isAnswer && (
        <S.AnswerSubmit
          onSubmit={handleSubmit(
            createAnswerSubmit(props.Question._id, setValue, props.setIsAnswer)
          )}
        >
          <textarea
            maxLength={500}
            placeholder="내용을 입력해주세요."
            {...register("contents")}
          ></textarea>
          <ul>
            <li>
              <ButtonItem
                title="취소하기"
                width="195px"
                height="77px"
                border="1px solid #000"
                color="#000"
                backgroundColor="#fff"
                fontSize="20px"
                fontFamilly="NanumBold"
                type="button"
                onClick={props.onClickAnswerCancel}
              />
            </li>
            <li>
              <ButtonItem
                title="답변하기"
                width="195px"
                height="77px"
                color="#fff"
                backgroundColor="#000"
                fontSize="20px"
                fontFamilly="NanumBold"
              />
            </li>
          </ul>
        </S.AnswerSubmit>
      )}
    </>
  );
}

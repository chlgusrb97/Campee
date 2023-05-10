import ButtonItem from "../../../../../commons/items/button/button.index";
import {useFormProductsCommentAnswer} from "../../../../../commons/useForm/useForm";
import * as S from "./comment.answer.styles";
import {ICommentAnswerUIProps} from "./comment.answer.types";

export default function CommentAnswerUI(props: ICommentAnswerUIProps) {
  const {register, setValue, handleSubmit} = useFormProductsCommentAnswer();

  return (
    <>
      <S.Answer>
        <span>답변</span>
        <S.Date>2023. 5. 10</S.Date>
        <S.AnswerContents>
          안녕하세요, 고객님! 저희 제품에 관심 가져주셔서 감사드립니다.
          <br /> 현재 더 큰 사이즈 상품은 없습니다. <br />
          궁금하신 사항은 언제든지 문의 부탁드립니다. 감사합니다.
        </S.AnswerContents>
      </S.Answer>
      {props.isAnswer && (
        <S.AnswerSubmit>
          <textarea
            maxLength={500}
            placeholder="내용을 입력해주세요."
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

import {useState} from "react";
import {getDate} from "../../../../../../commons/libraries/utils";
import {IUseditemQuestion} from "../../../../../../commons/types/generated/types";
import {useDeleteUsedItemQuestion} from "../../../../../commons/customs/hooks/useDeleteUsedItemQuestion";
import ButtonItem from "../../../../../commons/items/button/button.index";
import * as S from "./comment.list.styles";
import {useFormProductsCommentWrite} from "../../../../../commons/useForm/useForm";
import {useUpdateUsedItemQuestion} from "../../../../../commons/customs/hooks/useUpdateUsedItemQuestion";

interface ICommentListItemUIProps {
  Question: IUseditemQuestion;
}

export default function CommentListItemUI(props: ICommentListItemUIProps) {
  const {register, handleSubmit} = useFormProductsCommentWrite();

  const {onClickDeleteQuestion} = useDeleteUsedItemQuestion();
  const {updateQuestionSubmit, isEdit, setIsEdit} = useUpdateUsedItemQuestion();

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickCancel = () => {
    setIsEdit(false);
  };

  return (
    <>
      <div>
        <S.Name>{props.Question.user.name}</S.Name>
        <S.Contents>
          {isEdit ? (
            <S.EditBox
              onSubmit={handleSubmit(updateQuestionSubmit(props.Question))}
            >
              <textarea
                maxLength={500}
                defaultValue={props.Question.contents}
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
                    onClick={onClickCancel}
                  />
                </li>
                <li>
                  <ButtonItem
                    title="수정하기"
                    width="195px"
                    height="77px"
                    color="#fff"
                    backgroundColor="#000"
                    fontSize="20px"
                    fontFamilly="NanumBold"
                  />
                </li>
              </ul>
            </S.EditBox>
          ) : (
            <S.Question>
              <p>{props.Question.contents}</p>
              <div>
                <S.Date>{getDate(props.Question.createdAt)}</S.Date>
                <S.Edit onClick={onClickEdit} />
                <S.Delete onClick={onClickDeleteQuestion(props.Question._id)} />
              </div>
            </S.Question>
          )}
          <S.Answer>
            <span>답변</span>
            <S.Date>2023. 5. 10</S.Date>
            <S.AnswerContents>
              안녕하세요, 고객님! 저희 제품에 관심 가져주셔서 감사드립니다.
              <br /> 현재 더 큰 사이즈 상품은 없습니다. <br />
              궁금하신 사항은 언제든지 문의 부탁드립니다. 감사합니다.
            </S.AnswerContents>
          </S.Answer>
        </S.Contents>
      </div>
    </>
  );
}

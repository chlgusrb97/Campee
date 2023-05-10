import {useState} from "react";
import {getDate} from "../../../../../../commons/libraries/utils";
import {IUseditemQuestion} from "../../../../../../commons/types/generated/types";
import {useDeleteUsedItemQuestion} from "../../../../../commons/customs/hooks/useDeleteUsedItemQuestion";
import ButtonItem from "../../../../../commons/items/button/button.index";
import * as S from "./comment.list.styles";
import {useFormProductsCommentWrite} from "../../../../../commons/useForm/useForm";
import {useUpdateUsedItemQuestion} from "../../../../../commons/customs/hooks/useUpdateUsedItemQuestion";
import {useQueryUser} from "../../../../../commons/customs/useQueries.ts/useQueries";
import CommentAnswerUI from "../answer/comment.answer.index";

interface ICommentListItemUIProps {
  Question: IUseditemQuestion;
}

export default function CommentListItemUI(props: ICommentListItemUIProps) {
  const [isAnswer, setIsAnswer] = useState(false);

  const {register, handleSubmit} = useFormProductsCommentWrite();
  const {data} = useQueryUser();

  const {onClickDeleteQuestion} = useDeleteUsedItemQuestion();
  const {updateQuestionSubmit, isEdit, setIsEdit} = useUpdateUsedItemQuestion();

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickCancel = () => {
    setIsEdit(false);
  };

  const onClickAnswer = () => {
    setIsAnswer(true);
  };

  const onClickAnswerCancel = () => {
    setIsAnswer(false);
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
                placeholder="내용을 입력해주세요."
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
                {props.Question.user._id === data?.fetchUserLoggedIn._id ? (
                  <>
                    <S.EditIcon onClick={onClickEdit} />
                    <S.DeleteIcon
                      onClick={onClickDeleteQuestion(props.Question._id)}
                    />
                  </>
                ) : (
                  <S.AnswerIcon onClick={onClickAnswer} />
                )}
              </div>
            </S.Question>
          )}
          <CommentAnswerUI
            isAnswer={isAnswer}
            setIsAnswer={setIsAnswer}
            onClickAnswerCancel={onClickAnswerCancel}
          />
        </S.Contents>
      </div>
    </>
  );
}

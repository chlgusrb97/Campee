import {useState} from "react";
import {useDeleteUsedItemAnswer} from "../../../../../commons/customs/hooks/useDeleteUsedItemAnswer";
import {useQueryUser} from "../../../../../commons/customs/useQueries.ts/useQueries";
import CommentButtonItem from "../../../../../commons/items/comment/button/comment.button.index";
import {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../../../../commons/types/generated/types";
import * as S from "./comment.answer.list.styles";
import {getDate} from "../../../../../../commons/libraries/utils";
import CommentAnswerWriteUI from "../write/comment.answer.write.index";

interface ICommentAnswerListUIProps {
  question: IUseditemQuestion;
  answer: IUseditemQuestionAnswer;
}

export default function CommentAnswerListUI(props: ICommentAnswerListUIProps) {
  const [isAnwerEdit, setIsAnswerEdit] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const {data: loginUserData} = useQueryUser();
  const {onClickDeleteAnswer} = useDeleteUsedItemAnswer();

  const showModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const onClickEdit = () => {
    setIsAnswerEdit(true);
  };

  const onClickAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  return (
    <>
      {isDeleteModalOpen && (
        <S.CommentDeleteModal
          title="댓글을 삭제하시겠습니까?"
          open={true}
          onOk={onClickDeleteAnswer({
            questionId: props.question._id,
            useditemQuestionAnswerId: props.answer._id,
            setIsDeleteModalOpen,
          })}
          onCancel={handleCancel}
        ></S.CommentDeleteModal>
      )}
      <S.AnswerBox>
        <S.UserIconBox>
          <S.UserIcon />
        </S.UserIconBox>
        <S.CommentInfo>
          <h1>{props.answer.user.name}</h1>
          <p>{props.answer.contents}</p>
          <ul>
            <li>
              <S.CreationDate>{getDate(props.answer.createdAt)}</S.CreationDate>
              <S.Dotted />
            </li>
            <li>
              <CommentButtonItem
                name={isAnswer ? "답글 취소" : "답글 달기"}
                id={props.answer._id}
                onClick={onClickAnswer}
              />
              <S.Dotted />
            </li>
            {props.answer.user._id === loginUserData?.fetchUserLoggedIn._id && (
              <>
                <li>
                  <CommentButtonItem
                    name="수정"
                    id={props.answer._id}
                    onClick={onClickEdit}
                  />
                  <S.Dotted />
                </li>
                <li>
                  <CommentButtonItem
                    name="삭제"
                    id={props.answer._id}
                    onClick={showModal}
                  />
                </li>
              </>
            )}
          </ul>
        </S.CommentInfo>
      </S.AnswerBox>
      {isAnswer && (
        <CommentAnswerWriteUI
          question={props.question}
          setIsAnswer={setIsAnswer}
        />
      )}
    </>
  );
}

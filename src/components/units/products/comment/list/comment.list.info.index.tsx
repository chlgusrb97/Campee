import {useState} from "react";
import {getDate} from "../../../../../commons/libraries/utils";
import {IUseditemQuestion} from "../../../../../commons/types/generated/types";
import {useDeleteUsedItemQuestion} from "../../../../commons/customs/hooks/useDeleteUsedItemQuestion";
import * as S from "./comment.list.styles";
import {useQueryUser} from "../../../../commons/customs/useQueries.ts/useQueries";
import CommentButtonItem from "../../../../commons/items/comment/button/comment.button.index";
import ProductsCommentWriteUI from "../write/comment.write.index";
import CommentAnswerUI from "../answer/comment.answer.index";

interface ICommentListInfoUIProps {
  question: IUseditemQuestion;
}

export default function CommentListInfoUI(props: ICommentListInfoUIProps) {
  const [isCommentEdit, setIsCommentEdit] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const {data} = useQueryUser();
  const {onClickDeleteQuestion} = useDeleteUsedItemQuestion();

  const showModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const onClickEdit = () => {
    setIsCommentEdit(true);
  };

  const onClickAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  const onClickAnswerCancel = () => {
    setIsAnswer(false);
  };

  return (
    <>
      {isDeleteModalOpen && (
        <S.CommentDeleteModal
          title="댓글을 삭제하시겠습니까?"
          open={true}
          onOk={onClickDeleteQuestion(props.question._id)}
          onCancel={handleCancel}
        ></S.CommentDeleteModal>
      )}
      {isCommentEdit ? (
        <ProductsCommentWriteUI
          isCommentEdit={isCommentEdit}
          setIsCommentEdit={setIsCommentEdit}
          question={props.question}
        />
      ) : (
        <S.CommentListWrapper>
          <div>
            <S.UserIconBox>
              <S.UserIcon />
            </S.UserIconBox>
            <S.CommentInfo>
              <h1>{props.question.user.name}</h1>
              <p>{props.question.contents}</p>
              <ul>
                <li>
                  <S.CreationDate>
                    {getDate(props.question.createdAt)}
                  </S.CreationDate>
                  <S.Dotted />
                </li>
                {props.question.user._id === data?.fetchUserLoggedIn._id ? (
                  <>
                    <li>
                      <CommentButtonItem
                        name="수정"
                        id={props.question._id}
                        onClick={onClickEdit}
                      />
                      <S.Dotted />
                    </li>
                    <li>
                      <CommentButtonItem
                        name="삭제"
                        id={props.question._id}
                        onClick={showModal}
                      />
                    </li>
                  </>
                ) : (
                  <li>
                    <CommentButtonItem
                      name={isAnswer ? "답글취소" : "답글달기"}
                      id={props.question._id}
                      onClick={onClickAnswer}
                    />
                  </li>
                )}
              </ul>
            </S.CommentInfo>
          </div>
          <CommentAnswerUI
            question={props.question}
            loginUserData={data}
            isAnswer={isAnswer}
            setIsAnswer={setIsAnswer}
            onClickAnswerCancel={onClickAnswerCancel}
          />
        </S.CommentListWrapper>
      )}
    </>
  );
}

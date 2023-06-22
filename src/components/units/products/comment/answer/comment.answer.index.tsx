import {Dispatch, SetStateAction, useState} from "react";
import {
  IQuery,
  IUseditemQuestion,
} from "../../../../../commons/types/generated/types";
import {useCreateUsedItemAnswer} from "../../../../commons/customs/hooks/useCreateUsedItemAnswer";
import {useQueryUsedItemAnswers} from "../../../../commons/customs/useQueries.ts/useQueries";
import ButtonItem from "../../../../commons/items/button/button.index";
import {useFormProductsCommentAnswer} from "../../../../commons/useForm/useForm";
import * as S from "./comment.answer.styles";
import {getDate} from "../../../../../commons/libraries/utils";
import CommentButtonItem from "../../../../commons/items/comment/button/comment.button.index";
import CommentWrite from "../../../../commons/items/comment/write/comment.write.index";

export interface ICommentAnswerUIProps {
  question: IUseditemQuestion;
  loginUserData: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  isAnswer: boolean;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  onClickAnswerCancel: () => void;
}

export default function CommentAnswerUI(props: ICommentAnswerUIProps) {
  const [isCommentEdit, setIsCommentEdit] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const {register, setValue, handleSubmit} = useFormProductsCommentAnswer();
  const {data} = useQueryUsedItemAnswers(props.question._id);
  const {createAnswerSubmit} = useCreateUsedItemAnswer();

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

  return (
    <>
      {isDeleteModalOpen && (
        <S.CommentDeleteModal
          title="댓글을 삭제하시겠습니까?"
          open={true}
          // onOk={onClickDeleteQuestion(props.Question._id)}
          onCancel={handleCancel}
        ></S.CommentDeleteModal>
      )}
      <S.AnswerWrapper>
        <S.AnswerList>
          <li>
            <S.UserIconBox>
              <S.UserIcon />
            </S.UserIconBox>
            <S.CommentInfo>
              <h1>홍길동</h1>
              <p>너무 이뻐요~!!</p>
              <ul>
                <li>
                  <S.CreationDate>{getDate("2023. 6. 23")}</S.CreationDate>
                  <S.Dotted />
                </li>
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
                <li>
                  <CommentButtonItem
                    name={isAnswer ? "답글취소" : "답글달기"}
                    id={props.question._id}
                    onClick={onClickAnswer}
                  />
                </li>
              </ul>
            </S.CommentInfo>
          </li>
        </S.AnswerList>
        {/* {props.isAnswer && (
          <S.AnswerSubmit
            onSubmit={handleSubmit(
              createAnswerSubmit(
                props.question._id,
                setValue,
                props.setIsAnswer
              )
            )}
          >
            <textarea
              maxLength={500}
              placeholder="내용을 입력해주세요."
              {...register("contents")}
            ></textarea>
          </S.AnswerSubmit>
        )} */}
        <S.CommentAnswerWrite
          onSubmit={handleSubmit(
            createAnswerSubmit(props.question._id, setValue, props.setIsAnswer)
          )}
        >
          <S.AnswerUserIconBox>
            <S.AnswerUserIcon />
          </S.AnswerUserIconBox>
          <CommentWrite
            defaultValue={""}
            placeHolder="댓글을 입력해주세요."
            isCommentEdit={props.isCommentEdit ?? false}
            register={register("contents")}
          />
        </S.CommentAnswerWrite>
      </S.AnswerWrapper>
    </>
  );
}

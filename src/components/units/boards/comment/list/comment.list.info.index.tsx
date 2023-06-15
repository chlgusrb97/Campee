import {getDate} from "../../../../../commons/libraries/utils";
import {IBoardComment} from "../../../../../commons/types/generated/types";
import CommentButtonItem from "../../../../commons/items/comment/button/comment.button.index";
import * as S from "./comment.list.styles";
import {ChangeEvent, MouseEvent, useState} from "react";
import {useDeleteBoardComment} from "../../../../commons/customs/hooks/useDeleteBoardComment";
import BoardsCommentWriteUI from "../write/boards.comment.write.index";

interface ICommentListInfoUIProps {
  CommentList: IBoardComment;
}

export default function CommentListInfoUI(props: ICommentListInfoUIProps) {
  const [isCommentEdit, setIsCommentEdit] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const {handleOkDeleteComment, setBoardCommentId, setDeletePassword} =
    useDeleteBoardComment();

  const showModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsDeleteModalOpen(true);
    setBoardCommentId(event.currentTarget.id);
    setDeletePassword("");
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setDeletePassword(event.target.value);
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const onClickUpdate = (): void => {
    setIsCommentEdit(true);
  };

  return (
    <>
      {isDeleteModalOpen && (
        <S.CommentDeleteModal
          title="댓글 비밀번호 확인"
          open={true}
          onOk={handleOkDeleteComment(setIsDeleteModalOpen)}
          onCancel={handleCancel}
        >
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangePassword}
          />
        </S.CommentDeleteModal>
      )}
      {isCommentEdit ? (
        <BoardsCommentWriteUI
          isCommentEdit={isCommentEdit}
          setIsCommentEdit={setIsCommentEdit}
          CommentList={props.CommentList}
        />
      ) : (
        <S.CommentListWrapper>
          <S.UserIconBox>
            <S.UserIcon />
          </S.UserIconBox>
          <S.CommentInfo>
            <h1>{props.CommentList.writer}</h1>
            <p>{props.CommentList.contents}</p>
            <ul>
              <li>
                <S.CreationDate>
                  {getDate(props.CommentList.createdAt)}
                </S.CreationDate>
                <S.Dotted />
              </li>
              <li>
                <CommentButtonItem
                  name="수정"
                  id={props.CommentList._id}
                  onClick={onClickUpdate}
                />
                <S.Dotted></S.Dotted>
              </li>
              <li>
                <CommentButtonItem
                  name="삭제"
                  id={props.CommentList._id}
                  onClick={showModal}
                />
              </li>
            </ul>
          </S.CommentInfo>
        </S.CommentListWrapper>
      )}
    </>
  );
}

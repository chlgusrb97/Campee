import {getDate} from "../../../../../../commons/libraries/utils";
import {IUseditemQuestion} from "../../../../../../commons/types/generated/types";
import {useDeleteUsedItemQuestion} from "../../../../../commons/customs/hooks/useDeleteUsedItemQuestion";
import * as S from "./comment.list.styles";

interface ICommentListItemUIProps {
  Question: IUseditemQuestion;
}

export default function CommentListItemUI(props: ICommentListItemUIProps) {
  const {onClickDeleteQuestion} = useDeleteUsedItemQuestion();
  return (
    <>
      <li key={props.Question._id}>
        <S.Name>{props.Question.user.name}</S.Name>
        <S.Contents>
          <p>{props.Question.contents}</p>
          <div>
            <p>{getDate(props.Question.createdAt)}</p>
            <S.Edit />
            <S.Delete onClick={onClickDeleteQuestion(props.Question._id)} />
          </div>
        </S.Contents>
      </li>
    </>
  );
}

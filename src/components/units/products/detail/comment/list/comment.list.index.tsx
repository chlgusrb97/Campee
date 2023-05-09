import {getDate} from "../../../../../../commons/libraries/utils";
import {useDeleteUsedItemQuestion} from "../../../../../commons/customs/hooks/useDeleteUsedItemQuestion";
import {useQueryUsedItemQuestions} from "../../../../../commons/customs/useQueries.ts/useQueries";
import * as S from "./comment.list.styles";

export default function ProductsDeTailCommentListUI() {
  const {itemQuestionsData} = useQueryUsedItemQuestions();
  const {onClickDeleteQuestion} = useDeleteUsedItemQuestion();

  return (
    <>
      <S.Wrapper>
        {itemQuestionsData?.fetchUseditemQuestions.map((Question) => (
          <li key={Question._id}>
            <S.Name>{Question.user.name}</S.Name>
            <S.Contents>
              <p>{Question.contents}</p>
              <div>
                <p>{getDate(Question.createdAt)}</p>
                <S.Edit />
                <S.Delete onClick={onClickDeleteQuestion(Question._id)} />
              </div>
            </S.Contents>
          </li>
        ))}
      </S.Wrapper>
    </>
  );
}

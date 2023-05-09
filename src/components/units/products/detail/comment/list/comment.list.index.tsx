import {getDate} from "../../../../../../commons/libraries/utils";
import {useQueryUsedItemQuestions} from "../../../../../commons/customs/useQueries.ts/useQueries";
import * as S from "./comment.list.styles";

export default function ProductsDeTailCommentListUI() {
  const {itemQuestionsData} = useQueryUsedItemQuestions();

  return (
    <>
      <S.Wrapper>
        {itemQuestionsData?.fetchUseditemQuestions.map((el) => (
          <li>
            <S.Name>{el.user.name}</S.Name>
            <S.Contents>
              <p>{el.contents}</p>
              <div>
                <p>{getDate(el.createdAt)}</p>
                <S.Edit />
                <S.Delete />
              </div>
            </S.Contents>
          </li>
        ))}
      </S.Wrapper>
    </>
  );
}

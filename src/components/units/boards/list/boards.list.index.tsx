import {getDate} from "../../../../commons/libraries/utils";
import {
  useQueryBoards,
  useQueryBoardsCount,
} from "../../../commons/customs/useQueries.ts/useQueries";
import ButtonItem from "../../../commons/items/button/button.index";
import TitleItem from "../../../commons/items/title/title.index";
import Pagination from "../../../commons/pagination/pagination.index";
import * as S from "./boards.list.styles";

export default function BoardsListUI() {
  const {data, refetch} = useQueryBoards();

  const {data: countData, refetch: countRefetch} = useQueryBoardsCount();

  return (
    <S.Wrapper>
      <span>
        <TitleItem title="SHOW YOUR LIFE" fontSize="24px" />
      </span>
      <S.BoardsList>
        <S.BoardListTitle>
          <span>제목</span>
          <span>내용</span>
          <span>작성자</span>
          <span>등록일</span>
          <span>추천수</span>
        </S.BoardListTitle>
        <S.BoardListContents>
          {data?.fetchBoards.map((board) => (
            <li key={board._id}>
              <p>{board.title}</p>
              <p>{board.contents}</p>
              <p>{board.writer}</p>
              <p>{getDate(board.createdAt)}</p>
              <p>{board.likeCount}</p>
            </li>
          ))}
        </S.BoardListContents>
      </S.BoardsList>
      <S.FooterContents>
        <div>
          <Pagination count={countData?.fetchBoardsCount} refetch={refetch} />
        </div>
        <div>
          <ButtonItem
            title="등록"
            width="140px"
            height="50px"
            border="1px solid #000"
            color="#000"
            backgroundColor="#fff"
            fontSize="18px"
          />
        </div>
      </S.FooterContents>
    </S.Wrapper>
  );
}

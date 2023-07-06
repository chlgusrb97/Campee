import {v4 as uuidv4} from "uuid";
import {getDate} from "../../../../commons/libraries/utils";
import {
  BOARDS_DETAIL_PATH,
  BOARDS_REGISTRATION_PATH,
} from "../../../../commons/paths/paths";
import {routes} from "../../../../commons/routes/routes";
import {
  useQueryBoards,
  useQueryBoardsBest,
  useQueryBoardsCount,
} from "../../../commons/customs/useQueries.ts/useQueries";
import ButtonItem from "../../../commons/items/button/button.index";
import SearchItem from "../../../commons/items/search/search.index";
import TitleItem from "../../../commons/items/title/title.index";
import Pagination from "../../../commons/pagination/pagination.index";
import * as S from "./boards.list.styles";
import {keyWordState} from "../../../../commons/stores/stores";
import {useRecoilState} from "recoil";

const SECRETCODE = "!*(^&";

export default function BoardsListUI() {
  const {data, refetch} = useQueryBoards();
  const {data: countData} = useQueryBoardsCount();
  const {data: bestData} = useQueryBoardsBest();
  const [keyWord] = useRecoilState(keyWordState);
  const {pageRouting} = routes();

  const formattedBoardsCount = countData?.fetchBoardsCount.toLocaleString();

  return (
    <S.Wrapper>
      <S.SearchBox>
        <SearchItem refetch={refetch} placeHolder="게시글을 검색하세요." />
        <S.ButtonBox>
          <ButtonItem
            title="등록"
            width="90px"
            height="44px"
            color="#fff"
            borderRadius="2px"
            backgroundColor="#e76161"
            fontSize="18px"
            fontFamilly="NanumBold"
            transition="all 0.3s ease-in-out"
            hoverBackgroundColor="#c64343"
            onClick={() => pageRouting(BOARDS_REGISTRATION_PATH)}
          />
        </S.ButtonBox>
      </S.SearchBox>
      <span>
        <TitleItem title="BEST LIFE" fontSize="20px" />
      </span>
      <S.BestBoards>
        {bestData?.fetchBoardsOfTheBest.map((bestBoard) => (
          <li
            key={bestBoard._id}
            onClick={() =>
              pageRouting(`${BOARDS_DETAIL_PATH}/${bestBoard._id}`)
            }
          >
            <S.BestBoardImgBox>
              {bestBoard.images && (
                <img
                  src={`https://storage.googleapis.com/${bestBoard.images[0]}`}
                />
              )}
            </S.BestBoardImgBox>
            <S.BestBoardFooterBox>
              <h1>{bestBoard.title}</h1>
              <S.FooterUser>
                <S.FooterUserImgBox>
                  <S.UserIcon />
                </S.FooterUserImgBox>
                <S.FooterUserName>홍길동</S.FooterUserName>
              </S.FooterUser>
              <S.FooterEntry>
                <p>{getDate(bestBoard.createdAt)}</p>
                <p>추천 {bestBoard.likeCount.toLocaleString()}</p>
              </S.FooterEntry>
            </S.BestBoardFooterBox>
          </li>
        ))}
      </S.BestBoards>
      <S.BoardsCount>총 {formattedBoardsCount}건</S.BoardsCount>
      <S.BoardsList>
        <S.BoardListTitle>
          <li>작성자</li>
          <li>제목</li>
          <li>등록일</li>
          <li>추천</li>
        </S.BoardListTitle>
        <S.BoardListContents>
          {data?.fetchBoards.map((board) => (
            <li
              key={board._id}
              onClick={() => pageRouting(`${BOARDS_DETAIL_PATH}/${board._id}`)}
            >
              <S.Writer>{board.writer}</S.Writer>
              <S.Title>
                {board.title
                  .replaceAll(keyWord, `${SECRETCODE}${keyWord}${SECRETCODE}`)
                  .split(`${SECRETCODE}`)
                  .map((searchBoard) => (
                    <span
                      key={uuidv4()}
                      style={{
                        color: searchBoard === keyWord ? "#e76161" : "black",
                      }}
                    >
                      {searchBoard}
                    </span>
                  ))}
              </S.Title>
              <S.Creation>{getDate(board.createdAt)}</S.Creation>
              <S.Like>{board.likeCount}</S.Like>
            </li>
          ))}
        </S.BoardListContents>
      </S.BoardsList>
      <S.FooterContents>
        <Pagination count={countData?.fetchBoardsCount} refetch={refetch} />
      </S.FooterContents>
    </S.Wrapper>
  );
}

import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {getDate} from "../../../../commons/libraries/utils";
import {
  BOARDS_DETAIL_PATH,
  BOARDS_REGISTRATION_PATH,
} from "../../../../commons/paths/paths";
import {routes} from "../../../../commons/routes/routes";
import {useMovedDetail} from "../../../commons/customs/hooks/useMovedDetail";
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

const SECRETCODE = "!*(^&";

export default function BoardsListUI() {
  const [keyWord, setKeyWord] = useState("");

  const {data, refetch} = useQueryBoards();
  const {data: countData} = useQueryBoardsCount();
  const {data: BestData} = useQueryBoardsBest();

  const {movedDetail} = useMovedDetail();
  const {pageRouting} = routes();

  const formattedBoardsCount = countData?.fetchBoardsCount.toLocaleString();

  return (
    <S.Wrapper>
      <span>
        <TitleItem title="BEST LIFE" fontSize="24px" />
      </span>
      <S.BestBoards>
        {BestData?.fetchBoardsOfTheBest.map((BestBoard) => (
          <li
            key={BestBoard._id}
            onClick={movedDetail(`${BOARDS_DETAIL_PATH}/${BestBoard._id}`)}
          >
            <S.BestBoardImgBox>
              {BestBoard.images && (
                <img
                  src={`https://storage.googleapis.com/${BestBoard.images[0]}`}
                />
              )}
            </S.BestBoardImgBox>
            <S.BestBoardFooterBox>
              <h1>{BestBoard.title}</h1>
              <S.FooterUser>
                <S.FooterUserImgBox>
                  <img />
                </S.FooterUserImgBox>
                <S.FooterUserName>홍길동</S.FooterUserName>
              </S.FooterUser>
              <S.FooterEntry>
                <p>{getDate(BestBoard.createdAt)}</p>
                <p>추천 {BestBoard.likeCount.toLocaleString()}</p>
              </S.FooterEntry>
            </S.BestBoardFooterBox>
          </li>
        ))}
      </S.BestBoards>
      <S.SearchBox>
        <SearchItem
          refetch={refetch}
          setKeyWord={setKeyWord}
          placeHolder="게시글을 검색하세요."
        />
      </S.SearchBox>
      <S.BoardsCount>총 {formattedBoardsCount}건</S.BoardsCount>
      <S.BoardsList>
        <S.BoardListTitle>
          <span>작성자</span>
          <span>제목</span>
          <span>등록일</span>
          <span>추천수</span>
        </S.BoardListTitle>
        <S.BoardListContents>
          {data?.fetchBoards.map((board) => (
            <li
              key={board._id}
              onClick={movedDetail(`${BOARDS_DETAIL_PATH}/${board._id}`)}
            >
              <p>{board.writer}</p>
              <p>
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
              </p>
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
            color="#fff"
            borderRadius="2px"
            backgroundColor="#e76161"
            fontSize="18px"
            fontFamilly="NanumBold"
            transition="all 0.3s ease-in-out"
            hoverBackgroundColor="#c64343"
            onClick={() => pageRouting(BOARDS_REGISTRATION_PATH)}
          />
        </div>
      </S.FooterContents>
    </S.Wrapper>
  );
}

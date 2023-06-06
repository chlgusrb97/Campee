import {getDate} from "../../../../commons/libraries/utils";
import {
  useQueryBoards,
  useQueryBoardsCount,
} from "../../../commons/customs/useQueries.ts/useQueries";
import ButtonItem from "../../../commons/items/button/button.index";
import InputItem from "../../../commons/items/input/input.index";
import TitleItem from "../../../commons/items/title/title.index";
import Pagination from "../../../commons/pagination/pagination.index";
import * as S from "./boards.list.styles";

export default function BoardsListUI() {
  const {data, refetch} = useQueryBoards();

  const {data: countData, refetch: countRefetch} = useQueryBoardsCount();

  return (
    <S.Wrapper>
      <span>
        <TitleItem title="BEST LIFE" fontSize="24px" />
      </span>
      <S.BestBoards>
        <li>
          <S.BestBoardImgBox>
            <img />
          </S.BestBoardImgBox>
          <S.BestBoardFooterBox>
            <h1>여러분께 제 캠핑정보를 공유합니다~!</h1>
            <S.FooterUser>
              <S.FooterUserImgBox>
                <img />
              </S.FooterUserImgBox>
              <S.FooterUserName>홍길동</S.FooterUserName>
            </S.FooterUser>
            <S.FooterEntry>
              <p>2023. 6. 5</p>
              <p>추천 1,234</p>
            </S.FooterEntry>
          </S.BestBoardFooterBox>
        </li>
        <li>
          <S.BestBoardImgBox>
            <img />
          </S.BestBoardImgBox>
          <S.BestBoardFooterBox>
            <h1>여러분께 제 캠핑정보를 공유합니다~!</h1>
            <S.FooterUser>
              <S.FooterUserImgBox>
                <img />
              </S.FooterUserImgBox>
              <S.FooterUserName>홍길동</S.FooterUserName>
            </S.FooterUser>
            <S.FooterEntry>
              <p>2023. 6. 5</p>
              <p>추천 1,234</p>
            </S.FooterEntry>
          </S.BestBoardFooterBox>
        </li>
        <li>
          <S.BestBoardImgBox>
            <img />
          </S.BestBoardImgBox>
          <S.BestBoardFooterBox>
            <h1>여러분께 제 캠핑정보를 공유합니다~!</h1>
            <S.FooterUser>
              <S.FooterUserImgBox>
                <img />
              </S.FooterUserImgBox>
              <S.FooterUserName>홍길동</S.FooterUserName>
            </S.FooterUser>
            <S.FooterEntry>
              <p>2023. 6. 5</p>
              <p>추천 1,234</p>
            </S.FooterEntry>
          </S.BestBoardFooterBox>
        </li>
        <li>
          <S.BestBoardImgBox>
            <img />
          </S.BestBoardImgBox>
          <S.BestBoardFooterBox>
            <h1>여러분께 제 캠핑정보를 공유합니다~!</h1>
            <S.FooterUser>
              <S.FooterUserImgBox>
                <img />
              </S.FooterUserImgBox>
              <S.FooterUserName>홍길동</S.FooterUserName>
            </S.FooterUser>
            <S.FooterEntry>
              <p>2023. 6. 5</p>
              <p>추천 1,234</p>
            </S.FooterEntry>
          </S.BestBoardFooterBox>
        </li>
      </S.BestBoards>
      <S.Search>
        <InputItem
          width="calc(100% - 40px)"
          padding="10px 16px"
          placeHolder="검색어를 입력해주세요."
        />
        <button>
          <S.SearchIcon />
        </button>
      </S.Search>
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

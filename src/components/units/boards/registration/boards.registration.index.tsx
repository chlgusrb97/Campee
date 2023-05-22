import ButtonItem from "../../../commons/items/button/button.index";
import TitleItem from "../../../commons/items/title/title.index";
import * as S from "./boards.registration.styles";

export default function BoardsListUI() {
  return (
    <S.Wrapper>
      <span>
        <TitleItem title="SHOW YOUR LIFE" fontSize="24px" />
      </span>
      <S.BestBoards></S.BestBoards>
      <S.BoardsCount>총 28,311건</S.BoardsCount>
      <S.BoardsList>
        <S.BoardListTitle>
          <span>번호</span>
          <span>제목</span>
          <span>작성자</span>
          <span>등록일</span>
          <span>추천수</span>
        </S.BoardListTitle>
        <S.BoardListContents>
          <li>
            <p>1</p>
            <p>컨텐츠</p>
            <p>홍길동</p>
            <p>2023. 5. 21</p>
            <p>1123</p>
          </li>
          <li>
            <p>1</p>
            <p>컨텐츠</p>
            <p>홍길동</p>
            <p>2023. 5. 21</p>
            <p>1123</p>
          </li>
          <li>
            <p>1</p>
            <p>컨텐츠</p>
            <p>홍길동</p>
            <p>2023. 5. 21</p>
            <p>1123</p>
          </li>
          <li>
            <p>1</p>
            <p>컨텐츠</p>
            <p>홍길동</p>
            <p>2023. 5. 21</p>
            <p>1123</p>
          </li>
          <li>
            <p>1</p>
            <p>컨텐츠</p>
            <p>홍길동</p>
            <p>2023. 5. 21</p>
            <p>1123</p>
          </li>
        </S.BoardListContents>
      </S.BoardsList>
      <S.FooterContents>
        <S.PageNavigation>
          <S.LeftArrow>
            <button>
              <S.LeftIcon />
            </button>
            <button>
              <S.DoubleLeftIcon />
            </button>
          </S.LeftArrow>
          <S.PageNumber>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </S.PageNumber>
          <S.RightArrow>
            <button>
              <S.RightIcon />
            </button>
            <button>
              <S.DoubleRightIcon />
            </button>
          </S.RightArrow>
        </S.PageNavigation>
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

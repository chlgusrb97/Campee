import CarouselItem from "../../../commons/items/carousel/carousel.index";
import * as S from "./boards.detail.styles";

export default function BoardsDetailUI() {
  return (
    <S.Wrapper>
      <CarouselItem />
      <S.User>
        <div>
          <S.UserIcon />
        </div>
        <S.Info>
          <p>홍길동</p>
          <p>2023. 5. 26</p>
        </S.Info>
        <S.LikeButton type="button">
          <S.LikeIcon />
          <p>추천</p>
        </S.LikeButton>
      </S.User>
    </S.Wrapper>
  );
}

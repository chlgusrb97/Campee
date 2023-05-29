import CarouselItem from "../../../commons/items/carousel/carousel.index";
import CommentItem from "../../../commons/items/comment/comment.index";
import KakaoMap from "../../../commons/items/kakaoMap/kakaoMap.index";
import TitleItem from "../../../commons/items/title/title.index";
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
          <S.Name>홍길동</S.Name>
          <ul>
            <li>
              <S.CreationDate>2023. 5. 27</S.CreationDate>
            </li>
            <li>
              <S.Like>추천 12</S.Like>
            </li>
          </ul>
        </S.Info>
        <S.LikeButton type="button">
          <S.LikeIcon />
          <p>추천</p>
        </S.LikeButton>
      </S.User>
      <S.Contents>
        <S.Title>감성횟집에서 홀구인합니다!(풀옵션숙소,교통비제공)</S.Title>
        <S.Text>
          안녕하세요. 제주 NO.1 횟집 [횟집학개론]입니다. 저희 매장은 2021년
          7월에 오픈 후 꾸준한 손님들의 사랑으로 안정적으로 운영되는 매장입니다.
          기존에 알고 계셨던 횟집과 다르게 저희 매장은 카페같은 인테리어에서
          레스토랑에서 나올법한 요리들을 판매하고 있습니다. 앞으로 외식업 관련
          종사 예정이신 분들은 분명 저희 가게에서 함께 성장하실 수 있다고
          생각됩니다. 저희 매장은 100프로 성과제 매장입니다. 최선을 다해주시면
          그에 합당한 보상을 약속합니다. 늘 저는 직원들의 성공을 바라며 최선을
          다해 지원하겠습니다. 또한, 제주도에 3개의 매장을 운영중으로 본인이
          다양한 경험을 희망한다면 본점에서 실력 향상 후 타 매장으로 이동
          가능합니다.(타 매장 이동시 관리자 직급 및 급여 인상 100프로 가능)
        </S.Text>
        <S.Address>
          <TitleItem title="주소" fontSize="20px" />
          <S.MapBox>
            <KakaoMap address="" />
          </S.MapBox>
          <p>제주특별자치도 서귀포시 대정읍 영어도시로 26</p>
        </S.Address>
      </S.Contents>
      <CommentItem />
    </S.Wrapper>
  );
}

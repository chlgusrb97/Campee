import {useRouter} from "next/router";
import {MYPAGE_PATH, MYPAGE_SHOP_PATH} from "../../../../commons/paths/paths";
import {useQueryUser} from "../../../commons/customs/useQueries.ts/useQueries";
import LinkItem from "../../../commons/items/link/link.index";
import * as S from "./user.common.styles";

export default function UserCommonUI() {
  const router = useRouter();
  const {data} = useQueryUser();

  return (
    <S.Wrapper>
      <S.MyPageHeader>
        <li>
          <LinkItem
            path={`${MYPAGE_PATH}/${data?.fetchUserLoggedIn._id}${MYPAGE_SHOP_PATH}`}
            name="나의 상점"
            color={
              router.asPath.includes(MYPAGE_SHOP_PATH) ? "#e76161" : "#a9a9a9"
            }
            fontFamily="NanumBold"
            hoverColor="#e76161"
          />
        </li>
        <li>
          <LinkItem
            path=""
            name="위시리스트"
            color="#a9a9a9"
            fontFamily="NanumBold"
            hoverColor="#e76161"
          />
        </li>
        <li>
          <LinkItem
            path=""
            name="거래내역"
            color="#a9a9a9"
            fontFamily="NanumBold"
            hoverColor="#e76161"
          />
        </li>
        <li>
          <LinkItem
            path=""
            name="설정"
            color="#a9a9a9"
            fontFamily="NanumBold"
            hoverColor="#e76161"
          />
        </li>
      </S.MyPageHeader>
      <S.Profile>
        <S.ProfileLeftContents>
          <S.UserImgBox>
            {/* <img /> */}
            <S.UserIcon />
          </S.UserImgBox>
          <S.UserInfo>
            <S.UserName>홍길동</S.UserName>
            <S.UserEmail>gmail@gmail.com</S.UserEmail>
            <S.ProfileButton>
              <button type="button">프로필 관리</button>
              <button type="button">비밀번호 변경</button>
            </S.ProfileButton>
          </S.UserInfo>
        </S.ProfileLeftContents>
        <S.ProfileRightContents>
          <S.PointTitle>보유 금액</S.PointTitle>
          <S.Point>123,123 원</S.Point>
        </S.ProfileRightContents>
      </S.Profile>
    </S.Wrapper>
  );
}
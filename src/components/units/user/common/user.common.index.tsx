import {useRouter} from "next/router";
import {
  MYPAGE_PATH,
  MYPAGE_SETTING_PATH,
  MYPAGE_SHOP_PATH,
  MYPAGE_TRANSACTION_PATH,
  MYPAGE_WISHLIST_PATH,
} from "../../../../commons/paths/paths";
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
            path={`${MYPAGE_PATH}/${data?.fetchUserLoggedIn._id}${MYPAGE_WISHLIST_PATH}`}
            name="위시리스트"
            color={
              router.asPath.includes(MYPAGE_WISHLIST_PATH)
                ? "#e76161"
                : "#a9a9a9"
            }
            fontFamily="NanumBold"
            hoverColor="#e76161"
          />
        </li>
        <li>
          <LinkItem
            path={`${MYPAGE_PATH}/${data?.fetchUserLoggedIn._id}${MYPAGE_TRANSACTION_PATH}`}
            name="거래내역"
            color={
              router.asPath.includes(MYPAGE_TRANSACTION_PATH)
                ? "#e76161"
                : "#a9a9a9"
            }
            fontFamily="NanumBold"
            hoverColor="#e76161"
          />
        </li>
        <li>
          <LinkItem
            path={`${MYPAGE_PATH}/${data?.fetchUserLoggedIn._id}${MYPAGE_SETTING_PATH}`}
            name="설정"
            color={
              router.asPath.includes(MYPAGE_SETTING_PATH)
                ? "#e76161"
                : "#a9a9a9"
            }
            fontFamily="NanumBold"
            hoverColor="#e76161"
          />
        </li>
      </S.MyPageHeader>
      {!router.asPath.includes(MYPAGE_SETTING_PATH) && (
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
      )}
    </S.Wrapper>
  );
}

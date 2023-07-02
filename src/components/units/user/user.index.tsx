import * as S from "./user.styles";

export default function UserUI() {
  return (
    <S.Wrapper>
      <S.MyPageHeader>
        <li>
          <S.MyPageHeaderButton type="button">나의 상점</S.MyPageHeaderButton>
        </li>
        <li>
          <S.MyPageHeaderButton type="button">위시리스트</S.MyPageHeaderButton>
        </li>
        <li>
          <S.MyPageHeaderButton type="button">거래 내역</S.MyPageHeaderButton>
        </li>
        <li>
          <S.MyPageHeaderButton type="button">설정</S.MyPageHeaderButton>
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

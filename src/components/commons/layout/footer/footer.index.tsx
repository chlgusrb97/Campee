import Link from "next/link";
import * as S from "./footer.styles";

export default function LayoutFooter() {
  return (
    <>
      <S.Wrapper>
        <S.Logo>
          <Link href="#">
            <a>DINCO</a>
          </Link>
        </S.Logo>
        <S.FooterInfo>
          <li>
            <p>(주) 딩코</p>
            <p>대표: 안우엽</p>
          </li>
          <li>
            <p>사업자등록번호 717-87-02373</p>
          </li>
          <li>
            <p>주소: 서울특별시 구로구 디지털로 300, 패스트파이브</p>
          </li>
          <li>
            <p>학원 등록 번호: 제 5845호</p>
          </li>
          <li>
            <p>개인정보 처리방침</p>
            <p>서비스 이용 약관</p>
          </li>
          <li>
            <p>Copyright © 2022. Dingco Corp., Ltd.</p>
          </li>
        </S.FooterInfo>
      </S.Wrapper>
    </>
  );
}

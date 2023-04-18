import Link from "next/link";
import * as S from "./header.styles";

export default function LayoutHeader() {
  return (
    <>
      <S.Wrapper>
        <div>
          <S.Logo>
            <Link href="#">
              <a>DINCO</a>
            </Link>
          </S.Logo>
          <S.Tnb>
            <li>
              <Link href="#">
                <a>로그인</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>회원가입</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>장바구니</a>
              </Link>
              <S.BasketCount>
                <span>0</span>
              </S.BasketCount>
            </li>
          </S.Tnb>
        </div>
        <div>
          <S.Gnb>
            <ul>
              <li>
                <Link href="#">
                  <a>BRAND</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>CATEGORY</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>LIFE</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>BEAUTY</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">
                  <a>#STYLE</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>EVENT</a>
                </Link>
              </li>
            </ul>
          </S.Gnb>
        </div>
      </S.Wrapper>
    </>
  );
}

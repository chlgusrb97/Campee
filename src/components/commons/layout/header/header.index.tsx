import * as S from "./header.styles";
import LinkItem from "../../items/link/link.index";
import {
  JOIN_PATH,
  LOGIN_PATH,
  MAIN_PATH,
  PRODUCTS_LIST_PATH,
} from "../../../../commons/paths/paths";

export default function LayoutHeader() {
  return (
    <>
      <S.Wrapper>
        <div>
          <S.Logo>
            <LinkItem
              path={MAIN_PATH}
              name="DINCO"
              fontFamily="NanumExtraBold"
            />
          </S.Logo>
          <S.Tnb>
            <li>
              <LinkItem path={LOGIN_PATH} name="로그인" />
            </li>
            <li>
              <LinkItem path={JOIN_PATH} name="회원가입" />
            </li>
            <li>
              <LinkItem path="#" name="장바구니" />
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
                <LinkItem
                  path={PRODUCTS_LIST_PATH}
                  name="BRAND"
                  fontFamily="NanumExtraBold"
                  color="#fff"
                />
              </li>
              <li>
                <LinkItem
                  path="#"
                  name="CATEGORY"
                  fontFamily="NanumExtraBold"
                  color="#fff"
                />
              </li>
              <li>
                <LinkItem
                  path="#"
                  name="LIFE"
                  fontFamily="NanumExtraBold"
                  color="#fff"
                />
              </li>
              <li>
                <LinkItem
                  path="#"
                  name="BEAUTY"
                  fontFamily="NanumExtraBold"
                  color="#fff"
                />
              </li>
            </ul>
            <ul>
              <li>
                <LinkItem
                  path="#"
                  name="#STYLE"
                  fontFamily="NanumExtraBold"
                  color="#fff"
                />
              </li>
              <li>
                <LinkItem
                  path="#"
                  name="EVENT"
                  fontFamily="NanumExtraBold"
                  color="#fff"
                />
              </li>
            </ul>
          </S.Gnb>
        </div>
      </S.Wrapper>
    </>
  );
}

import * as S from "./header.styles";
import LinkItem from "../../items/link/link.index";
import {
  JOIN_PATH,
  LOGIN_PATH,
  MAIN_PATH,
  PRODUCTS_LIST_PATH,
} from "../../../../commons/paths/paths";
import {useQuery} from "@apollo/client";
import {USER_LOGGED_IN} from "../../queries/queries";
import {IQuery} from "../../../../commons/types/generated/types";
import {useLogoutUser} from "../../customs/hooks/useLogoutUser";
import PaymentItem from "../../items/payment/payment.index";
import {usePayment} from "../../customs/hooks/usePayment";

export default function LayoutHeader() {
  const {data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(USER_LOGGED_IN);
  const {logoutUserSubmit} = useLogoutUser();
  const {showPaymentModal, isPaymentModal} = usePayment();

  return (
    <>
      <S.Wrapper>
        <div>
          <S.Logo>
            <LinkItem
              path={MAIN_PATH}
              name="DINCO"
              fontSize="40px"
              fontFamily="NanumExtraBold"
            />
          </S.Logo>
          <S.Tnb>
            {data?.fetchUserLoggedIn ? (
              <>
                {isPaymentModal && <PaymentItem />}
                <li>
                  <S.User>
                    <p>{data.fetchUserLoggedIn.name}</p>님
                  </S.User>
                  <S.Point>
                    포인트 <p>{data.fetchUserLoggedIn.userPoint?.amount}</p>P
                  </S.Point>
                  <S.TopUp onClick={showPaymentModal}>충전</S.TopUp>
                </li>
                <li>
                  <S.Logout onClick={logoutUserSubmit}>로그아웃</S.Logout>
                </li>
              </>
            ) : (
              <>
                <li>
                  <LinkItem path={LOGIN_PATH} name="로그인" />
                </li>
                <li>
                  <LinkItem path={JOIN_PATH} name="회원가입" />
                </li>
              </>
            )}
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

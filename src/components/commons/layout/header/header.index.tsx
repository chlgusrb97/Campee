import * as S from "./header.styles";
import LinkItem from "../../items/link/link.index";
import {
  BOARDS_LIST_PATH,
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
        <S.HeaderSection01>
          <S.Section01Contents>
            <li>
              <LinkItem
                path={LOGIN_PATH}
                name="로그인"
                color="#666"
                fontSize="12px"
              />
            </li>
            <li>
              <LinkItem
                path={JOIN_PATH}
                name="회원가입"
                color="#666"
                fontSize="12px"
              />
            </li>
          </S.Section01Contents>
        </S.HeaderSection01>
        <S.HeaderSection02>
          <S.Section02Contents>
            <div>
              <LinkItem
                path={MAIN_PATH}
                name="CAMPEE"
                fontSize="36px"
                fontFamily="KanitBold"
                color="#e76161"
              />
              <S.Gnb>
                <li>
                  <LinkItem
                    path={PRODUCTS_LIST_PATH}
                    name="PRODUCT"
                    color="#666"
                    fontSize="18px"
                    fontFamily="NanumBold"
                    hoverColor="#e76161"
                  />
                </li>
                <li>
                  <LinkItem
                    path={BOARDS_LIST_PATH}
                    name="LIFE"
                    color="#666"
                    fontSize="18px"
                    fontFamily="NanumBold"
                    hoverColor="#e76161"
                  />
                </li>
              </S.Gnb>
            </div>
            <S.User>
              <S.UserIcon />
            </S.User>
          </S.Section02Contents>
        </S.HeaderSection02>
        {/* <S.Tnb>
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
          </S.Tnb> */}
      </S.Wrapper>
    </>
  );
}

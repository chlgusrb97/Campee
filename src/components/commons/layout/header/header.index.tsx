import * as S from "./header.styles";
import LinkItem from "../../items/link/link.index";
import {
  BOARDS_LIST_PATH,
  JOIN_PATH,
  LOGIN_PATH,
  MAIN_PATH,
  MYPAGE_PATH,
  PRODUCTS_LIST_PATH,
} from "../../../../commons/paths/paths";
import {useQuery} from "@apollo/client";
import {USER_LOGGED_IN} from "../../queries/queries";
import {IQuery} from "../../../../commons/types/generated/types";
import {useLogoutUser} from "../../customs/hooks/useLogoutUser";
import PaymentItem from "../../items/payment/payment.index";
import {usePayment} from "../../customs/hooks/usePayment";
import LayoutAside from "../aside/aside.index";

export default function LayoutHeader() {
  const {data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(USER_LOGGED_IN);
  const {logoutUserSubmit} = useLogoutUser();
  const {showPaymentModal, isPaymentModal} = usePayment();

  return (
    <>
      {isPaymentModal && <PaymentItem />}
      <S.Wrapper>
        <S.HeaderSection01>
          <S.Section01Contents>
            {data?.fetchUserLoggedIn._id ? (
              <>
                <li>
                  <S.TopUp onClick={showPaymentModal}>충전하기</S.TopUp>
                </li>
                <li>
                  <LinkItem
                    path={`${MYPAGE_PATH}/${data.fetchUserLoggedIn._id}`}
                    name="마이페이지"
                    color="#666"
                    fontSize="12px"
                    hoverColor="#222"
                  />
                </li>
                <li>
                  <S.Logout onClick={logoutUserSubmit}>로그아웃</S.Logout>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
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
                    name="CAMPEE SHOP"
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
            <S.Tnb>
              <li>
                <S.MoneyIcon />
                <S.MoneyNumber>
                  {data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString()}{" "}
                  원
                </S.MoneyNumber>
              </li>
              <li>
                <S.User>
                  {data?.fetchUserLoggedIn._id ? (
                    <>
                      {data.fetchUserLoggedIn.picture ? (
                        <S.UserImg />
                      ) : (
                        <S.UserIcon />
                      )}
                      <S.UserName>{data.fetchUserLoggedIn.name} 님</S.UserName>
                    </>
                  ) : (
                    <>
                      <S.UserIcon />
                      <S.UserName>비회원</S.UserName>
                    </>
                  )}
                </S.User>
              </li>
            </S.Tnb>
          </S.Section02Contents>
        </S.HeaderSection02>
        <LayoutAside />
      </S.Wrapper>
    </>
  );
}

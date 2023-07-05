import * as S from "./header.styles";
import LinkItem from "../../items/link/link.index";
import {
  BOARDS_LIST_PATH,
  MAIN_PATH,
  MYPAGE_PATH,
  MYPAGE_SHOP_PATH,
  PRODUCTS_LIST_PATH,
} from "../../../../commons/paths/paths";
import {useLogoutUser} from "../../customs/hooks/useLogoutUser";
import PaymentItem from "../../items/payment/payment.index";
import {usePayment} from "../../customs/hooks/usePayment";
import LayoutAside from "../aside/aside.index";
import {useQueryUser} from "../../customs/useQueries.ts/useQueries";
import LoginUI from "../../../units/auth/login/auth.login.index";
import {useState} from "react";
import JoinUI from "../../../units/auth/join/auth.join.index";
import {useRouter} from "next/router";

export default function LayoutHeader() {
  const router = useRouter();
  const {data} = useQueryUser();
  const {logoutUserSubmit} = useLogoutUser();
  const {showPaymentModal, isPaymentModal} = usePayment();
  const [isAuthModal, setIsAuthModal] = useState(0);

  const onClickAuthModalOpen = (number: number) => {
    setIsAuthModal(number);
  };

  const onClickAuthModalCancel = (number: number) => {
    setIsAuthModal(number);
  };

  return (
    <>
      {isPaymentModal && <PaymentItem />}
      {isAuthModal === 1 && (
        <LoginUI onClickAuthModalCancel={onClickAuthModalCancel} />
      )}
      {isAuthModal === 2 && (
        <JoinUI onClickAuthModalCancel={onClickAuthModalCancel} />
      )}
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
                    path={`${MYPAGE_PATH}/${data.fetchUserLoggedIn._id}${MYPAGE_SHOP_PATH}`}
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
                  <S.Login onClick={() => onClickAuthModalOpen(1)}>
                    로그인
                  </S.Login>
                </li>
                <li>
                  <S.Login onClick={() => onClickAuthModalOpen(2)}>
                    회원가입
                  </S.Login>
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
                    color={
                      router.asPath.includes(PRODUCTS_LIST_PATH)
                        ? "#e76161"
                        : "#666"
                    }
                    fontSize="18px"
                    fontFamily="NanumBold"
                    hoverColor="#e76161"
                  />
                </li>
                <li>
                  <LinkItem
                    path={BOARDS_LIST_PATH}
                    name="LIFE"
                    color={
                      router.asPath.includes(BOARDS_LIST_PATH)
                        ? "#e76161"
                        : "#666"
                    }
                    fontSize="18px"
                    fontFamily="NanumBold"
                    hoverColor="#e76161"
                  />
                </li>
              </S.Gnb>
            </div>
            <S.Tnb>
              {data?.fetchUserLoggedIn && (
                <li>
                  <S.MoneyIcon />
                  <S.MoneyNumber>
                    {data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString()}{" "}
                    원
                  </S.MoneyNumber>
                </li>
              )}
              <li>
                <S.User>
                  {data?.fetchUserLoggedIn._id ? (
                    <>
                      {data.fetchUserLoggedIn.picture ? (
                        <S.UserImg
                          src={`https://storage.googleapis.com/${data.fetchUserLoggedIn.picture}`}
                        />
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

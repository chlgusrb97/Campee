import * as S from "./payment.styles";
import {useState} from "react";
import {usePayment} from "../../customs/hooks/usePayment";
import Script from "next/script";
import {CaretDownOutlined} from "@ant-design/icons";

const priceList = [
  {
    title: "5,000 원",
    price: 5000,
  },
  {
    title: "10,000 원",
    price: 10000,
  },
  {
    title: "50,000 원",
    price: 50000,
  },
  {
    title: "100,000 원",
    price: 100000,
  },
];

export default function PaymentItem() {
  const [isShowPrice, setIsShowPrice] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const {onClickPayment, coin, setCoin, isPaymentModal, setIsPaymentModal} =
    usePayment();

  const handleOk = () => {
    setIsPaymentModal(false);
  };

  const handleCancel = () => {
    setIsPaymentModal(false);
    setCoin(0);
    setIsShowPrice(false);
    setIsActive(false);
  };

  const onClickShowPrice = () => {
    setIsShowPrice((prev) => !prev);
  };

  const onClickPriceValue = (money: number) => () => {
    setCoin(money);
    setIsShowPrice(false);
    setIsActive(true);
  };

  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script src="https://cdn.iamport.kr/v1/iamport.js"></Script>

      <S.NewModal
        title="충전하실 금액을 선택해주세요."
        open={isPaymentModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[null]}
      >
        <S.PaymentContents>
          <S.InputBox>
            <input
              value={coin === 0 ? "" : coin}
              placeholder="포인트 선택"
              disabled
            />
            <S.ArrowIconWrapper isShowPrice={isShowPrice}>
              <CaretDownOutlined onClick={onClickShowPrice} />
            </S.ArrowIconWrapper>
          </S.InputBox>
          {isShowPrice && (
            <S.PriceList isShowPrice={isShowPrice}>
              {priceList.map((list, index) => (
                <li key={index} onClick={onClickPriceValue(list.price)}>
                  {list.title}
                </li>
              ))}
            </S.PriceList>
          )}
          <S.Button onClick={onClickPayment} disabled={isActive ? false : true}>
            충전하기
          </S.Button>
        </S.PaymentContents>
      </S.NewModal>
    </>
  );
}

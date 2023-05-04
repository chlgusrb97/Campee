import {Button} from "antd";
import * as S from "./payment.styles";
import {useState} from "react";

const priceList = [
  {
    title: "100",
    price: 100,
  },
  {
    title: "500",
    price: 500,
  },
  {
    title: "2,000",
    price: 2000,
  },
  {
    title: "5,000",
    price: 5000,
  },
];

export default function PaymentItem() {
  const [coin, setCoin] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowPrice, setIsShowPrice] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCoin(0);
    setIsShowPrice(true);
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
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <S.NewModal
        title="충전하실 금액을 선택해주세요."
        open={isModalOpen}
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
            <S.ArrowIcon onClick={onClickShowPrice} isShowPrice={isShowPrice} />
          </S.InputBox>
          {isShowPrice && (
            <S.PriceList>
              {priceList.map((list) => (
                <li onClick={onClickPriceValue(list.price)}>{list.title}</li>
              ))}
            </S.PriceList>
          )}
          <S.Button disabled={isActive ? false : true}>충전하기</S.Button>
        </S.PaymentContents>
      </S.NewModal>
    </>
  );
}

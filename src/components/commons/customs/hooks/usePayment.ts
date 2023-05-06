import {useQuery} from "@apollo/client";
import {useMutationCreatePoint} from "../useMutations/useMutations";
import {USER_LOGGED_IN} from "../../queries/queries";
import {IQuery} from "../../../../commons/types/generated/types";
import {useState} from "react";
import {Modal} from "antd";
import {MAIN_PATH} from "../../../../commons/paths/paths";
import {useRecoilState} from "recoil";
import {paymentModalState} from "../../../../commons/stores/stores";

declare const window: typeof globalThis & {
  IMP: any;
};

export const usePayment = () => {
  const [coin, setCoin] = useState(0);
  const [isPaymentModal, setIsPaymentModal] = useRecoilState(paymentModalState);

  const [createPointTransactionOfLoading] = useMutationCreatePoint();
  const {data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(USER_LOGGED_IN);

  const showPaymentModal = () => {
    setIsPaymentModal(true);
  };

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: "포인트 충전",
        amount: coin,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        m_redirect_url: MAIN_PATH,
      },
      async (rsp: any) => {
        if (rsp.success === true) {
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [
              {
                query: USER_LOGGED_IN,
              },
            ],
          });
          setIsPaymentModal(false);
          Modal.success({content: "결제가 완료되었습니다."});
        } else {
          setIsPaymentModal(false);
          Modal.error({content: "결제에 실패하였습니다. 다시 시도해주세요."});
        }
      }
    );
  };

  return {
    coin,
    setCoin,
    isPaymentModal,
    setIsPaymentModal,
    showPaymentModal,
    onClickPayment,
  };
};

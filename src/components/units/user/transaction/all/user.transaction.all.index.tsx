import {useEffect, useState} from "react";
import {getDate} from "../../../../../commons/libraries/utils";
import {
  useQueryPointTransactions,
  useQueryUsedTransActionsCountBuying,
  useQueryUsedTransActionsCountLoading,
  useQueryUsedTransActionsCountSelling,
} from "../../../../commons/customs/useQueries.ts/useQueries";
import Pagination from "../../../../commons/pagination/pagination.index";
import * as S from "./user.transaction.all.styles";

export default function UserTransactionAllUI() {
  const [countData, setCountData] = useState(0);

  const {data, refetch} = useQueryPointTransactions();
  const {data: countBuyData} = useQueryUsedTransActionsCountBuying();
  const {data: countSellData} = useQueryUsedTransActionsCountSelling();
  const {data: countLoadData} = useQueryUsedTransActionsCountLoading();

  useEffect(() => {
    if (countBuyData && countSellData && countLoadData) {
      const totalCount =
        countBuyData?.fetchPointTransactionsCountOfBuying +
        countSellData?.fetchPointTransactionsCountOfSelling +
        countLoadData?.fetchPointTransactionsCountOfLoading;
      setCountData(totalCount);
    }
  }, [countBuyData, countSellData, countLoadData]);

  return (
    <S.Wrapper>
      <S.HeaderContents>
        <div>날짜</div>
        <div>유형</div>
        <div>거래 및 충전 금액</div>
        <div>잔액</div>
      </S.HeaderContents>
      <S.ListContents>
        {data?.fetchPointTransactions.map((transaction) => (
          <li key={transaction._id}>
            <div>
              <S.Creation>{getDate(transaction.createdAt)}</S.Creation>
            </div>
            <div>
              <S.Status>{transaction.status}</S.Status>
            </div>
            <div>
              <S.Point>{transaction.amount.toLocaleString()}원</S.Point>
            </div>
            <div>
              <S.MyPoint>{transaction.balance.toLocaleString()}원</S.MyPoint>
            </div>
          </li>
        ))}
      </S.ListContents>
      <S.PageBox>
        <Pagination refetch={refetch} count={countData} />
      </S.PageBox>
    </S.Wrapper>
  );
}

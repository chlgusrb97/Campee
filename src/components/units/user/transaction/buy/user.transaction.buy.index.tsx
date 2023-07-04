import {getDate} from "../../../../../commons/libraries/utils";
import {
  useQueryUsedTransActionsBuying,
  useQueryUsedTransActionsCountBuying,
} from "../../../../commons/customs/useQueries.ts/useQueries";
import Pagination from "../../../../commons/pagination/pagination.index";
import * as S from "./user.transaction.buy.styles";

export default function UserTransactionBuyUI() {
  const {data, refetch} = useQueryUsedTransActionsBuying();
  const {data: countData} = useQueryUsedTransActionsCountBuying();

  return (
    <S.Wrapper>
      <S.HeaderContents>
        <div>거래일자</div>
        <div>상품명</div>
        <div>거래금액</div>
        <div>잔액</div>
      </S.HeaderContents>
      <S.ListContents>
        {data?.fetchPointTransactionsOfBuying.map((buy) => (
          <li key={buy._id}>
            <div>
              <S.Creation>{getDate(buy.createdAt)}</S.Creation>
            </div>
            <div>
              <S.ProductName>{buy.useditem?.name}</S.ProductName>
            </div>
            <div>
              <S.MinusPoint>{buy.amount.toLocaleString()}원</S.MinusPoint>
            </div>
            <div>
              <S.MyPoint>{buy.balance.toLocaleString()}원</S.MyPoint>
            </div>
          </li>
        ))}
      </S.ListContents>
      <S.PageBox>
        <Pagination
          refetch={refetch}
          count={countData?.fetchPointTransactionsCountOfBuying}
        />
      </S.PageBox>
    </S.Wrapper>
  );
}

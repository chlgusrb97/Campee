import {getDate} from "../../../../../commons/libraries/utils";
import {
  useQueryUsedTransActionsCountSelling,
  useQueryUsedTransActionsSelling,
} from "../../../../commons/customs/useQueries.ts/useQueries";
import Pagination from "../../../../commons/pagination/pagination.index";
import * as S from "./user.transaction.sell.styles";

export default function UserTransactionSellUI() {
  const {data, refetch} = useQueryUsedTransActionsSelling();
  const {data: countData} = useQueryUsedTransActionsCountSelling();

  return (
    <S.Wrapper>
      <S.HeaderContents>
        <div>거래일자</div>
        <div>상품명</div>
        <div>거래금액</div>
        <div>잔액</div>
      </S.HeaderContents>
      {data?.fetchPointTransactionsOfSelling.length !== 0 ? (
        <S.ListContents>
          {data?.fetchPointTransactionsOfSelling.map((sell) => (
            <li key={sell._id}>
              <div>
                <S.Creation>{getDate(sell.createdAt)}</S.Creation>
              </div>
              <div>
                <S.ProductName>{sell.useditem?.name}</S.ProductName>
              </div>
              <div>
                <S.PlusPoint>{sell.amount.toLocaleString()}원</S.PlusPoint>
              </div>
              <div>
                <S.MyPoint>{sell.balance.toLocaleString()}원</S.MyPoint>
              </div>
            </li>
          ))}
        </S.ListContents>
      ) : (
        <S.ProductNoneBox>거래한 내역이 없습니다.</S.ProductNoneBox>
      )}
      <S.PageBox>
        <Pagination
          refetch={refetch}
          count={countData?.fetchPointTransactionsCountOfSelling}
        />
      </S.PageBox>
    </S.Wrapper>
  );
}

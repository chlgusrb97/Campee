import {getDate} from "../../../../../commons/libraries/utils";
import {
  useQueryUsedTransActionsCountLoading,
  useQueryUsedTransActionsLoading,
} from "../../../../commons/customs/useQueries.ts/useQueries";
import Pagination from "../../../../commons/pagination/pagination.index";
import * as S from "./user.transaction.topup.styles";

export default function UserTransactionTopupUI() {
  const {data, refetch} = useQueryUsedTransActionsLoading();
  const {data: countData} = useQueryUsedTransActionsCountLoading();

  return (
    <S.Wrapper>
      <S.HeaderContents>
        <div>결제 ID</div>
        <div>충전금액</div>
        <div>잔액</div>
      </S.HeaderContents>
      {data?.fetchPointTransactionsOfLoading.length !== 0 ? (
        <S.ListContents>
          {data?.fetchPointTransactionsOfLoading.map((topup) => (
            <li key={topup._id}>
              <div>
                <S.TopupId>{topup.impUid}</S.TopupId>
              </div>
              <div>
                <S.PlusPoint>{topup.amount.toLocaleString()}원</S.PlusPoint>
              </div>
              <div>
                <S.MyPoint>{topup.balance.toLocaleString()}원</S.MyPoint>
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
          count={countData?.fetchPointTransactionsCountOfLoading}
        />
      </S.PageBox>
    </S.Wrapper>
  );
}

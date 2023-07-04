import {useAuth} from "../../../../src/components/commons/customs/useAuth";
import UserTransactionUI from "../../../../src/components/units/user/transaction/user.transaction.index";

export default function UserTransactionPage() {
  useAuth();

  return <UserTransactionUI />;
}

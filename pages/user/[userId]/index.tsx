import {useAuth} from "../../../src/components/commons/customs/useAuth";
import UserUI from "../../../src/components/units/user/user.index";

export default function userPage() {
  useAuth();

  return <UserUI />;
}

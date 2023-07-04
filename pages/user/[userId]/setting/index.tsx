import {useAuth} from "../../../../src/components/commons/customs/useAuth";
import UserSettingUI from "../../../../src/components/units/user/setting/user.setting.index";

export default function UserSettingPage() {
  useAuth();

  return <UserSettingUI />;
}

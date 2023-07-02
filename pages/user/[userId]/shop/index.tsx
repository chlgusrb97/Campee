import {useAuth} from "../../../../src/components/commons/customs/useAuth";
import UserShopUI from "../../../../src/components/units/user/shop/user.shop.index";

export default function userShopPage() {
  useAuth();

  return <UserShopUI />;
}

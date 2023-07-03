import {useAuth} from "../../../../src/components/commons/customs/useAuth";
import UserWishListUI from "../../../../src/components/units/user/wishList/user.wishList.index";

export default function UserWishListPage() {
  useAuth();

  return <UserWishListUI />;
}

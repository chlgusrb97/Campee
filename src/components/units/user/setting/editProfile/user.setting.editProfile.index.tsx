import UserImageUpload from "../../../../commons/items/user/imageUpload/user.imageUpload.index";
import * as S from "./user.setting.editProfile.styles";

export default function UserEditProfileUI() {
  return (
    <S.Wrapper>
      <li>
        <UserImageUpload />
      </li>
    </S.Wrapper>
  );
}

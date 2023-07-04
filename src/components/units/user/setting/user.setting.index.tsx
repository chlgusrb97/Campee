import {useState} from "react";
import UserCommonUI from "../common/user.common.index";
import * as S from "./user.setting.styles";
import UserEditProfileUI from "./editProfile/user.setting.editProfile.index";

export default function UserSettingUI() {
  const [activeButton, setActiveButton] = useState(1);

  const onClickActive = (buttonId: number) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <UserCommonUI />
      <S.Wrapper>
        <S.TitleButtonBox>
          <li>
            <S.TitleButton
              active={activeButton === 1}
              type="button"
              onClick={() => onClickActive(1)}
            >
              프로필 관리
            </S.TitleButton>
          </li>
          <li>
            <S.TitleButton
              active={activeButton === 2}
              type="button"
              onClick={() => onClickActive(2)}
            >
              비밀번호 변경
            </S.TitleButton>
          </li>
        </S.TitleButtonBox>
        {activeButton === 1 && <UserEditProfileUI />}
      </S.Wrapper>
    </>
  );
}

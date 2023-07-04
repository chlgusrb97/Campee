import {useEffect, useState} from "react";
import {useQueryUser} from "../../../../commons/customs/useQueries.ts/useQueries";
import InputItem from "../../../../commons/items/input/input.index";
import LabelItem from "../../../../commons/items/label/label.index";
import UserImageUpload from "../../../../commons/items/user/imageUpload/user.imageUpload.index";
import ValidationItem from "../../../../commons/items/validation/validation.index";
import {useFormMypageProfileEdit} from "../../../../commons/useForm/useForm";
import * as S from "./user.setting.editProfile.styles";
import {useUpdateUser} from "../../../../commons/customs/hooks/useUpdateUser";
import {useRecoilState} from "recoil";
import {userPicture} from "../../../../../commons/stores/stores";

export default function UserEditProfileUI() {
  const [imageUrl, setImageUrl] = useRecoilState(userPicture);

  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useFormMypageProfileEdit();
  const {data} = useQueryUser();
  const {updateUserSubmit} = useUpdateUser();

  const emailParts = data?.fetchUserLoggedIn.email.split("@");

  useEffect(() => {
    setValue("name", data?.fetchUserLoggedIn.name);
  }, [data, setValue]);

  useEffect(() => {
    setImageUrl(String(data?.fetchUserLoggedIn.picture));
  }, [data?.fetchUserLoggedIn.picture]);

  return (
    <S.Wrapper onSubmit={handleSubmit(updateUserSubmit({imageUrl}))}>
      <S.ContentsList>
        <li>
          <UserImageUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </li>
        <li>
          <S.WriteContent>
            <S.LabelBox>
              <LabelItem
                label="이메일"
                fontSize="14px"
                fontFamily="NanumRegular"
              />
            </S.LabelBox>
            <S.InputBox>
              <input
                defaultValue={emailParts && emailParts[0]}
                readOnly={true}
              />
              <span>@</span>
              <input
                defaultValue={emailParts && emailParts[1]}
                readOnly={true}
              />
            </S.InputBox>
          </S.WriteContent>
        </li>
        <li>
          <S.WriteContent>
            <S.LabelBox>
              <LabelItem
                label="이름"
                fontSize="14px"
                fontFamily="NanumRegular"
              />
            </S.LabelBox>
            <S.InputBox>
              <InputItem
                height="48px"
                border="1px solid #ddd"
                padding="16px"
                placeHolder="이름을 입력해주세요."
                register={register("name")}
                defaultValue={data?.fetchUserLoggedIn.name}
              />
            </S.InputBox>
          </S.WriteContent>
          <ValidationItem
            error={errors.name?.message}
            marginTop="8px"
            marginLeft="116px"
          />
        </li>
      </S.ContentsList>
      <S.SubmitButton>프로필 수정</S.SubmitButton>
    </S.Wrapper>
  );
}

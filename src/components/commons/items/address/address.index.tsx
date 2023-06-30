import {useState} from "react";
import ButtonItem from "../button/button.index";
import InputItem from "../input/input.index";
import * as S from "./address.styles";
import {useModalOpen} from "../../customs/hooks/useModalOpen";
import ModalItem from "../modal/modal.index";
import DaumPostcodeEmbed from "react-daum-postcode";
import {useAddressHandleComplete} from "../../customs/hooks/useAddressHandleComplete";
import {UseFormRegisterReturn, UseFormSetValue} from "react-hook-form";
import {Maybe} from "yup";
import {
  IBoardAddress,
  IUseditemAddress,
} from "../../../../commons/types/generated/types";
import KakaoMapRegistration from "../kakaoMap/registration/kakaoMap.registration.index";
import KakaoMapEdit from "../kakaoMap/edit/kakaoMap.edit.index";

interface IAddressItemProps<T> {
  setValue: UseFormSetValue<any>;
  zipcode: UseFormRegisterReturn;
  address: UseFormRegisterReturn;
  addressDetail: UseFormRegisterReturn;
  dataAddress: Maybe<T> | undefined;
  isEdit: boolean;
}

export default function AddressItem<T extends IBoardAddress | IUseditemAddress>(
  props: IAddressItemProps<T>
) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {showModal, handleOk, handleCancel} = useModalOpen(setIsModalOpen);
  const {dataAddress, handleComplete} = useAddressHandleComplete(
    setIsModalOpen,
    props.setValue,
    props.zipcode,
    props.address
  );

  return (
    <>
      <S.MapBox>
        {props.isEdit ? (
          <KakaoMapEdit
            address={props.dataAddress?.address}
            searchAddress={dataAddress}
          />
        ) : (
          <KakaoMapRegistration address={dataAddress} />
        )}
      </S.MapBox>
      <S.AddressContents>
        <li>
          <InputItem
            width="80px"
            height="48px"
            border="1px solid #ddd"
            textAlign="center"
            placeHolder="우편번호"
            disabled={true}
            register={props.zipcode}
            defaultValue={props.dataAddress?.zipcode}
          />
          <ButtonItem
            title="우편번호 검색"
            width="120px"
            height="48px"
            backgroundColor="#e76161"
            margin="0 0 0 24px"
            color="#fff"
            hoverBackgroundColor="#c64343"
            transition="all 0.3s ease-in-out"
            type="button"
            onClick={showModal}
          />
          <ModalItem
            title="주소 검색"
            contents={<DaumPostcodeEmbed onComplete={handleComplete} />}
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        </li>
        <li>
          <InputItem
            width="100%"
            height="48px"
            border="1px solid #ddd"
            padding="0 14px"
            placeHolder="도로명 주소 또는 지번 주소"
            disabled={true}
            register={props.address}
            defaultValue={props.dataAddress?.address}
          />
        </li>
        <li>
          <InputItem
            width="100%"
            height="48px"
            border="1px solid #ddd"
            padding="0 14px"
            placeHolder="상세 주소를 입력해주세요."
            register={props.addressDetail}
            defaultValue={props.dataAddress?.addressDetail}
          />
        </li>
      </S.AddressContents>
    </>
  );
}

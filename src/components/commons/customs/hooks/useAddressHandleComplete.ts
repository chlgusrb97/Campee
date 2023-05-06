import {Dispatch, SetStateAction, useState} from "react";
import type {Address} from "react-daum-postcode";
import {UseFormSetValue} from "react-hook-form";
import {ICreateUseditemInput} from "../../../../commons/types/generated/types";

export const useAddressHandleComplete = (
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
  setValue: UseFormSetValue<ICreateUseditemInput>
) => {
  const [address, setAddress] = useState("");
  const [zoneCode, setZoneCode] = useState("");

  const handleComplete = (data: Address) => {
    setIsModalOpen(false);
    setZoneCode(data.zonecode);

    if (data.userSelectedType === "R") {
      setAddress(data.roadAddress);
      setValue("useditemAddress.address", data.roadAddress);
    } else {
      setAddress(data.jibunAddress);
      setValue("useditemAddress.address", data.jibunAddress);
    }
    setValue("useditemAddress.zipcode", data.zonecode);
  };

  return {address, zoneCode, handleComplete};
};

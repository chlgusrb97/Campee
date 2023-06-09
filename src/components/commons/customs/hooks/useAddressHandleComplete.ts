import {Dispatch, SetStateAction, useState} from "react";
import type {Address} from "react-daum-postcode";
import {UseFormRegisterReturn, UseFormSetValue} from "react-hook-form";

export const useAddressHandleComplete = (
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
  setValue: UseFormSetValue<any>,
  zipcode: UseFormRegisterReturn,
  address: UseFormRegisterReturn
) => {
  const [dataAddress, setDataAddress] = useState("");
  const [dataZipCode, setDataZipCode] = useState("");

  const handleComplete = (data: Address) => {
    setIsModalOpen(false);
    setDataZipCode(data.zonecode);

    if (data.userSelectedType === "R") {
      setDataAddress(data.roadAddress);
      setValue(address.name, data.roadAddress);
    } else {
      setDataAddress(data.jibunAddress);
      setValue(address.name, data.jibunAddress);
    }
    setValue(zipcode.name, data.zonecode);
  };

  return {dataAddress, dataZipCode, handleComplete};
};

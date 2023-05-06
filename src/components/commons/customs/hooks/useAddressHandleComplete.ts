import {Dispatch, SetStateAction, useState} from "react";
import type {Address} from "react-daum-postcode";

export const useAddressHandleComplete = (
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
) => {
  const [address, setAddress] = useState("");
  const [zoneCode, setZoneCode] = useState("");

  const handleComplete = (data: Address) => {
    setIsModalOpen(false);
    setZoneCode(data.zonecode);

    if (data.userSelectedType === "R") {
      setAddress(data.roadAddress);
    } else {
      setAddress(data.jibunAddress);
    }
  };

  return {address, zoneCode, handleComplete};
};

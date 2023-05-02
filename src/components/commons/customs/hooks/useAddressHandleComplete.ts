import {Dispatch, SetStateAction, useState} from "react";
import type {Address} from "react-daum-postcode";
import {addressState} from "../../../../commons/stores/stores";
import {useRecoilState} from "recoil";

export const useAddressHandleComplete = (
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
) => {
  const [address, setAddress] = useRecoilState(addressState);
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

import {Dispatch, SetStateAction} from "react";

export const useModalOpen = (
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
) => {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return {showModal, handleOk, handleCancel};
};

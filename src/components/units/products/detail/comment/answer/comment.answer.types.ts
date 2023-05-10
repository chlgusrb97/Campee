import {Dispatch, SetStateAction} from "react";

export interface ICommentAnswerUIProps {
  isAnswer: boolean;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  onClickAnswerCancel: () => void;
}

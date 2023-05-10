import {Dispatch, SetStateAction} from "react";
import {IUseditemQuestion} from "../../../../../../commons/types/generated/types";

export interface ICommentAnswerUIProps {
  Question: IUseditemQuestion;
  isAnswer: boolean;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  onClickAnswerCancel: () => void;
}

import {Dispatch, SetStateAction} from "react";
import {
  IQuery,
  IUseditemQuestion,
} from "../../../../../commons/types/generated/types";
import CommentAnswerListUI from "./list/comment.answer.list.index";
import {AnswerWrapper} from "./comment.answer.styles";
import CommentAnswerWriteUI from "./write/comment.answer.write.index";

interface ICommentAnswerUIProps {
  question: IUseditemQuestion;
  answerData?: Pick<IQuery, "fetchUseditemQuestionAnswers">;
  isAnswer: boolean;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  onClickAnswerCancel: () => void;
}

export default function CommentAnswerUI(props: ICommentAnswerUIProps) {
  return (
    <AnswerWrapper>
      {props.isAnswer && (
        <CommentAnswerWriteUI
          question={props.question}
          setIsAnswer={props.setIsAnswer}
        />
      )}
      {props.answerData?.fetchUseditemQuestionAnswers.length !== 0 &&
        props.answerData?.fetchUseditemQuestionAnswers.map((answer) => (
          <CommentAnswerListUI
            question={props.question}
            answer={answer}
            key={answer._id}
          />
        ))}
    </AnswerWrapper>
  );
}

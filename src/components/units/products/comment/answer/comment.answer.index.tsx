import {Dispatch, SetStateAction} from "react";
import {
  IQuery,
  IUseditemQuestion,
} from "../../../../../commons/types/generated/types";

import CommentAnswerListUI from "./list/comment.answer.list.index";
import {useQueryUsedItemAnswers} from "../../../../commons/customs/useQueries.ts/useQueries";
import {AnswerWrapper} from "./comment.answer.styles";
import CommentAnswerWriteUI from "./write/comment.answer.write.index";

interface ICommentAnswerUIProps {
  question: IUseditemQuestion;
  isAnswer: boolean;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  onClickAnswerCancel: () => void;
}

export default function CommentAnswerUI(props: ICommentAnswerUIProps) {
  const {data} = useQueryUsedItemAnswers(props.question._id);

  return (
    <AnswerWrapper>
      {props.isAnswer && (
        <CommentAnswerWriteUI
          question={props.question}
          setIsAnswer={props.setIsAnswer}
        />
      )}
      {data?.fetchUseditemQuestionAnswers.length !== 0 &&
        data?.fetchUseditemQuestionAnswers.map((answer) => (
          <CommentAnswerListUI
            question={props.question}
            answer={answer}
            key={answer._id}
          />
        ))}
    </AnswerWrapper>
  );
}

import {Dispatch, SetStateAction} from "react";
import {useCreateUsedItemQuestion} from "../../../../commons/customs/hooks/useCreateUsedItemQuestion";
import CommentWrite from "../../../../commons/items/comment/write/comment.write.index";
import {useFormProductsCommentWrite} from "../../../../commons/useForm/useForm";
import * as S from "./comment.write.styles";
import {IUseditemQuestion} from "../../../../../commons/types/generated/types";
import {useUpdateUsedItemQuestion} from "../../../../commons/customs/hooks/useUpdateUsedItemQuestion";
import {useQueryUser} from "../../../../commons/customs/useQueries.ts/useQueries";

interface IProductsCommentWriteUIProps {
  isCommentEdit?: boolean;
  setIsCommentEdit?: Dispatch<SetStateAction<boolean>>;
  question?: IUseditemQuestion;
}

export default function ProductsCommentWriteUI(
  props: IProductsCommentWriteUIProps
) {
  const {register, setValue, handleSubmit} = useFormProductsCommentWrite();
  const {createQuestionSubmit} = useCreateUsedItemQuestion();
  const {updateQuestionSubmit} = useUpdateUsedItemQuestion();
  const {data} = useQueryUser();

  return (
    <S.CommentWriteWrapper
      onSubmit={handleSubmit(
        props.isCommentEdit
          ? updateQuestionSubmit({
              questionId: props.question?._id,
              setIsCommentEdit: props.setIsCommentEdit,
            })
          : createQuestionSubmit(setValue)
      )}
    >
      <S.UserIconBox>
        {data?.fetchUserLoggedIn.picture ? (
          <img
            src={`https://storage.googleapis.com/${data.fetchUserLoggedIn.picture}`}
          />
        ) : (
          <S.UserIcon />
        )}
      </S.UserIconBox>
      <CommentWrite
        defaultValue={props.question?.contents ?? ""}
        placeHolder="댓글을 입력해주세요."
        isCommentEdit={props.isCommentEdit ?? false}
        register={register("contents")}
      />
    </S.CommentWriteWrapper>
  );
}

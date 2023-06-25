import {CommentWriteBox} from "./comment.write.styles";
import {UseFormRegisterReturn} from "react-hook-form";
import {useHandle} from "../../../customs/useHandle";

interface ICommentWriteProps {
  defaultValue: string;
  placeHolder: string;
  isCommentEdit?: boolean;
  register: UseFormRegisterReturn;
}

export default function CommentWrite(props: ICommentWriteProps) {
  const {ref, ...rest} = props.register;
  const {isFocused, textRef, handleResize, handleFocus, handleBlur} =
    useHandle();

  return (
    <CommentWriteBox isFocused={isFocused}>
      <textarea
        defaultValue={props.defaultValue}
        onInput={handleResize}
        {...rest}
        ref={(e) => {
          ref(e);
          textRef.current = e;
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={props.placeHolder}
      ></textarea>
      <button>{props.isCommentEdit ? "댓글 수정" : "댓글 등록"}</button>
    </CommentWriteBox>
  );
}

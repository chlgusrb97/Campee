import {CommentWriteBox} from "./comment.write.styles";
import {UseFormRegisterReturn} from "react-hook-form";
import {useHandle} from "../../../customs/useHandle";

interface ICommentWriteProps {
  placeHolder: string;
  register: UseFormRegisterReturn;
}

export default function CommentWrite(props: ICommentWriteProps) {
  const {ref, ...rest} = props.register;
  const {isFocused, textRef, handleResize, handleFocus, handleBlur} =
    useHandle();

  return (
    <CommentWriteBox isFocused={isFocused}>
      <textarea
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
      <button>등록</button>
    </CommentWriteBox>
  );
}

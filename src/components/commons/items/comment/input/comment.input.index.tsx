import {useCallback, useRef, useState} from "react";
import {CommentInput} from "./comment.input.styles";

interface ICommentInputItemProps {
  placeHolder: string;
  type?: string;
}

export default function CommentInputItem(props: ICommentInputItemProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <CommentInput
      isFocused={isFocused}
      ref={inputRef}
      placeholder={props.placeHolder}
      type={props.type ?? "text"}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

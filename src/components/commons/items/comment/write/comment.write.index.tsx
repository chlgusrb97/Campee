import {useCallback, useRef, useState} from "react";
import {CommentWriteBox} from "./comment.write.styles";

interface ICommentWriteProps {
  placeHolder: string;
}

export default function CommentWrite(props: ICommentWriteProps) {
  const [isFocused, setIsFocused] = useState(false);
  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const handleResize = useCallback(() => {
    if (textRef.current) {
      textRef.current.style.height = "40px";
      textRef.current.style.height = textRef.current.scrollHeight + "px";
    }
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <CommentWriteBox isFocused={isFocused}>
      <textarea
        ref={textRef}
        placeholder={props.placeHolder}
        onChange={handleResize}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></textarea>
      <button>등록</button>
    </CommentWriteBox>
  );
}

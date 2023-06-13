import {
  Dispatch,
  FocusEventHandler,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
import {CommentInput} from "./comment.input.styles";
import {UseFormRegisterReturn} from "react-hook-form";
import {useHandle} from "../../../customs/useHandle";

interface ICommentInputItemProps {
  isFocused: boolean;
  textRef: MutableRefObject<HTMLInputElement | null>;
  placeHolder: string;
  type?: string;
  register: UseFormRegisterReturn;
}

export default function CommentInputItem(props: ICommentInputItemProps) {
  const {ref, ...rest} = props.register;
  const {isFocused, textRef, handleFocus, handleBlur} = useHandle();

  return (
    <CommentInput
      isFocused={isFocused}
      {...rest}
      ref={(e) => {
        ref(e);
        textRef.current = e;
      }}
      placeholder={props.placeHolder}
      type={props.type ?? "text"}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

import {useCallback, useRef, useState} from "react";

export const useHandle = () => {
  const [isFocused, setIsFocused] = useState(false);
  const textRef = useRef<HTMLTextAreaElement | HTMLInputElement | null>(null);

  const handleResize = useCallback(() => {
    if (textRef.current) {
      textRef.current.style.height = "40px";
      textRef.current.style.height = textRef.current.scrollHeight + "px";
    }
  }, [textRef]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return {isFocused, textRef, handleResize, handleFocus, handleBlur};
};

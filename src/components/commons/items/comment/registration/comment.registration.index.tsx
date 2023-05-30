import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import ButtonItem from "../../button/button.index";
import InputItem from "../../input/input.index";
import * as S from "./comment.registration.styles";

export default function CommentRegistrationUI() {
  const [text, setText] = useState("");
  const [height, setHeight] = useState(38);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    setHeight(event.target.scrollHeight);
  };

  return (
    <S.CommentRegistrationWrapper>
      <div>
        <S.UserIconBox>
          <S.UserIcon />
        </S.UserIconBox>
        <S.InputBox>
          <li>
            <InputItem
              border="1px solid #ddd"
              borderRadius="2px"
              padding="10px"
              placeHolder="이름"
            />
          </li>
          <li>
            <InputItem
              border="1px solid #ddd"
              borderRadius="2px"
              padding="10px"
              placeHolder="비밀번호"
              type="password"
            />
          </li>
        </S.InputBox>
      </div>
      <S.CommentWriteBox text={text}>
        <textarea
          value={text}
          placeholder="댓글을 입력해주세요."
          onChange={handleChange}
          style={{height: `${height}px`}}
        ></textarea>
        <div>
          <ButtonItem
            title="등록"
            color={text === "" ? "#aaa" : "#f17373"}
            fontSize="16px"
            fontFamilly="NanumBold"
          />
        </div>
      </S.CommentWriteBox>
    </S.CommentRegistrationWrapper>
  );
}

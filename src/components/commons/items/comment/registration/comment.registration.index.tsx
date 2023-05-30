import ButtonItem from "../../button/button.index";
import InputItem from "../../input/input.index";
import * as S from "./comment.registration.styles";

export default function CommentRegistrationUI() {
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
      <S.CommentWriteBox>
        <textarea placeholder="댓글을 입력해주세요."></textarea>
        <div>
          <ButtonItem
            title="등록"
            color="#aaa"
            hoverColor="#e76161"
            fontSize="16px"
            fontFamilly="NanumBold"
            transition="all 0.3s ease-in-out"
          />
        </div>
      </S.CommentWriteBox>
    </S.CommentRegistrationWrapper>
  );
}

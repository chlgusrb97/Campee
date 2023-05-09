import ButtonItem from "../../../../../commons/items/button/button.index";
import TitleItem from "../../../../../commons/items/title/title.index";
import * as S from "./comment.write.styles";

export default function ProductsDeTailCommentWriteUI() {
  return (
    <>
      <S.Wrapper>
        <span>
          <TitleItem title="Q&A" fontSize="32px" />
        </span>
        <div>
          <textarea placeholder="내용을 입력해주세요."></textarea>
          <ButtonItem
            title="작성하기"
            width="195px"
            height="77px"
            margin="17px 0"
            color="#fff"
            backgroundColor="#000"
            fontSize="20px"
            fontFamilly="NanumBold"
          />
        </div>
      </S.Wrapper>
    </>
  );
}

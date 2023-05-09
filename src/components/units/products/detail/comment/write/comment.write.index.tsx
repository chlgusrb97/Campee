import {useCreateUsedItemQuestion} from "../../../../../commons/customs/hooks/useCreateUsedItemQuestion";
import ButtonItem from "../../../../../commons/items/button/button.index";
import TitleItem from "../../../../../commons/items/title/title.index";
import {useFormProductsCommentWrite} from "../../../../../commons/useForm/useForm";
import * as S from "./comment.write.styles";

export default function ProductsDeTailCommentWriteUI() {
  const {register, setValue, handleSubmit} = useFormProductsCommentWrite();
  const {createQuestionSubmit} = useCreateUsedItemQuestion();

  return (
    <>
      <S.Wrapper onSubmit={handleSubmit(createQuestionSubmit(setValue))}>
        <span>
          <TitleItem title="Q&A" fontSize="32px" />
        </span>
        <div>
          <textarea
            placeholder="내용을 입력해주세요."
            {...register("contents")}
          ></textarea>
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

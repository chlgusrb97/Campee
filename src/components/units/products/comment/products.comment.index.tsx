import {useQueryUsedItemQuestions} from "../../../commons/customs/useQueries.ts/useQueries";
import TitleItem from "../../../commons/items/title/title.index";
import ProductsCommentListUI from "./list/comment.list.index";
import {CommentWrapper} from "./products.comment.styles";
import ProductsCommentWriteUI from "./write/comment.write.index";

export default function ProductsCommentUI() {
  const {data} = useQueryUsedItemQuestions();

  return (
    <CommentWrapper>
      <TitleItem title="댓글" fontSize="20px" />
      <ProductsCommentWriteUI />
      {data?.fetchUseditemQuestions.length !== 0 && (
        <ProductsCommentListUI data={data} />
      )}
    </CommentWrapper>
  );
}

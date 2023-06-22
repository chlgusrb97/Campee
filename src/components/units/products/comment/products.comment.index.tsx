import TitleItem from "../../../commons/items/title/title.index";
import ProductsCommentListUI from "./list/comment.list.index";
import {CommentWrapper} from "./products.comment.styles";
import ProductsCommentWriteUI from "./write/comment.write.index";

export default function ProductsCommentUI() {
  return (
    <CommentWrapper>
      <span>
        <TitleItem title="댓글" fontSize="20px" />
      </span>
      <ProductsCommentWriteUI />
      <ProductsCommentListUI />
    </CommentWrapper>
  );
}

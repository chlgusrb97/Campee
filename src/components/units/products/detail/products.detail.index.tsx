import {useQueryUsedItem} from "../../../commons/customs/useQueries.ts/useQueries";
import ProductsDeTailCommentListUI from "./comment/list/comment.list.index";
import ProductsDeTailCommentWriteUI from "./comment/write/comment.write.index";
import ProductsDeTailContents from "./contents/products.detail.contents.index";
import ProductsDeTailInfo from "./info/products.detail.info.index";
import * as S from "./products.detail.styles";

export default function ProductsDetailUI() {
  const {usedItemData} = useQueryUsedItem();

  return (
    <>
      <S.Wrapper>
        <ProductsDeTailInfo usedItemData={usedItemData?.fetchUseditem} />
        <ProductsDeTailContents usedItemData={usedItemData?.fetchUseditem} />
        <ProductsDeTailCommentWriteUI />
        <ProductsDeTailCommentListUI />
      </S.Wrapper>
    </>
  );
}

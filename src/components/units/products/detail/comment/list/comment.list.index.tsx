import InfiniteScroll from "react-infinite-scroller";
import {onLoadMoreUsedItemQuestions} from "../../../../../commons/customs/onLoadMore/onLoadMoreUsedItems";
import * as S from "./comment.list.styles";
import CommentListItemUI from "./comment.list.item.index";

export default function ProductsDeTailCommentListUI() {
  const {data, onLoadMore} = onLoadMoreUsedItemQuestions();

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        <S.Wrapper>
          {data?.fetchUseditemQuestions.map((Question) => (
            <CommentListItemUI key={Question._id} Question={Question} />
          ))}
        </S.Wrapper>
      </InfiniteScroll>
    </>
  );
}

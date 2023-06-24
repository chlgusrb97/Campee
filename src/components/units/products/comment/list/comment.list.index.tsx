import InfiniteScroll from "react-infinite-scroller";
import {onLoadMoreUsedItemQuestions} from "../../../../commons/customs/onLoadMore/onLoadMoreUsedItems";
import CommentListInfoUI from "./comment.list.info.index";
import {useQueryUsedItemQuestions} from "../../../../commons/customs/useQueries.ts/useQueries";
import {v4 as uuidv4} from "uuid";

export default function ProductsCommentListUI() {
  const {data} = useQueryUsedItemQuestions();
  const {onLoadMore} = onLoadMoreUsedItemQuestions();

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        {data?.fetchUseditemQuestions ? (
          data.fetchUseditemQuestions.map((question) => (
            <CommentListInfoUI key={uuidv4()} question={question} />
          ))
        ) : (
          <></>
        )}
      </InfiniteScroll>
    </>
  );
}

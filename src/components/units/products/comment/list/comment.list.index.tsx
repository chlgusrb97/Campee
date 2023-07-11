import InfiniteScroll from "react-infinite-scroller";
import {onLoadMoreUsedItemQuestions} from "../../../../commons/customs/onLoadMore/onLoadMoreUsedItems";
import CommentListInfoUI from "./comment.list.info.index";
import {v4 as uuidv4} from "uuid";
import {IQuery} from "../../../../../commons/types/generated/types";

interface IProductsCommentListUIProps {
  data: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
}

export default function ProductsCommentListUI(
  props: IProductsCommentListUIProps
) {
  const {onLoadMore} = onLoadMoreUsedItemQuestions();

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        {props.data?.fetchUseditemQuestions ? (
          props.data.fetchUseditemQuestions.map((question) => (
            <CommentListInfoUI key={uuidv4()} question={question} />
          ))
        ) : (
          <></>
        )}
      </InfiniteScroll>
    </>
  );
}

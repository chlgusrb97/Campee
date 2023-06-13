import InfiniteScroll from "react-infinite-scroller";
import CommentListInfoUI from "./comment.list.info.index";
import {useQueryBoardComments} from "../../../customs/useQueries.ts/useQueries";
// import {useQueryBoardComments} from "../../../customs/useQueries.ts/useQueries";
// import {onLoadMore} from "../../../customs/onLoadMore/onLoadMoreUsedItems";

export default function CommentListUI() {
  const {data, fetchMore} = useQueryBoardComments();

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={onLoadMore}
      hasMore={true}
      useWindow={true}
    >
      {data?.fetchBoardComments ? (
        data?.fetchBoardComments.map((CommentList) => (
          <CommentListInfoUI key={CommentList._id} CommentList={CommentList} />
        ))
      ) : (
        <></>
      )}
    </InfiniteScroll>
  );
}

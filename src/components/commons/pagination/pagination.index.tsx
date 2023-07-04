import * as S from "./pagination.styles";
import {MouseEvent, useState} from "react";
import {IPaginationProps} from "./pagination.types";

export default function Pagination(props: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [targetId, setTargetId] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const targetId = Number(event.currentTarget.id);
    setTargetId(targetId);
    void props.refetch({page: targetId});
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setTargetId(startPage - 10);
    void props.refetch({page: startPage - 10});
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setTargetId(startPage + 10);
      void props.refetch({page: startPage + 10});
    }
  };

  const onClickFirstPage = () => {
    setStartPage(1);
    setTargetId(1);
    void props.refetch({page: 1});
  };

  const onClickLastPage = () => {
    setStartPage(lastPage);
    setTargetId(lastPage);
    void props.refetch({page: lastPage});
  };

  return (
    <S.PageNavigation>
      <S.LeftArrow isDisabled={startPage === 1 ? true : false}>
        <button
          onClick={onClickFirstPage}
          disabled={startPage === 1 ? true : false}
        >
          <S.DoubleLeftIcon />
        </button>
        <button
          onClick={onClickPrevPage}
          disabled={startPage === 1 ? true : false}
        >
          <S.LeftIcon />
        </button>
      </S.LeftArrow>
      {new Array(10).fill(1).map(
        (_, index) =>
          startPage + index <= lastPage && (
            <S.PageNumber
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              isActive={index + startPage === targetId}
            >
              {index + startPage}
            </S.PageNumber>
          )
      )}
      <S.RightArrow isDisabled={startPage === lastPage}>
        <button
          onClick={onClickNextPage}
          disabled={startPage + 1 <= lastPage ? false : true}
        >
          <S.RightIcon />
        </button>
        <button
          onClick={onClickLastPage}
          disabled={startPage + 1 <= lastPage ? false : true}
        >
          <S.DoubleRightIcon />
        </button>
      </S.RightArrow>
    </S.PageNavigation>
  );
}

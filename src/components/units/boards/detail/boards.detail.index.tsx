import React, {useEffect, useState} from "react";
import _ReactPlayer, {ReactPlayerProps} from "react-player";
import CarouselItem from "../../../commons/items/carousel/carousel.index";
import KakaoMap from "../../../commons/items/kakaoMap/kakaoMap.index";
import TitleItem from "../../../commons/items/title/title.index";
import * as S from "./boards.detail.styles";
import {useQueryBoard} from "../../../commons/customs/useQueries.ts/useQueries";
import {getDate} from "../../../../commons/libraries/utils";
import {useLikeBoard} from "../../../commons/customs/hooks/useLikeBoard";
import DOMPurify from "dompurify";
import BoardsCommentUI from "../comment/boards.comment.index";
import ButtonItem from "../../../commons/items/button/button.index";
import {useDeleteBoard} from "../../../commons/customs/hooks/useDeleteBoard";
import {BOARDS_DETAIL_PATH, EDIT_PATH} from "../../../../commons/paths/paths";
import {useRouter} from "next/router";
import {routes} from "../../../../commons/routes/routes";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export default function BoardsDetailUI() {
  const router = useRouter();
  const [safeHtml, setSafeHtml] = useState("");

  const {data} = useQueryBoard();
  const {onClickLikeButton} = useLikeBoard();
  const {onClickDeleteBoard} = useDeleteBoard();
  const {pageRouting} = routes();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSafeHtml(DOMPurify.sanitize(String(data?.fetchBoard.contents)));
    }
  }, [data?.fetchBoard.contents]);

  return (
    <S.Wrapper>
      <CarouselItem images={data?.fetchBoard.images} />
      <S.User>
        <div>
          <S.UserIcon />
        </div>
        <S.Info>
          <S.Name>
            {data?.fetchBoard.user
              ? data.fetchBoard.user.name
              : data?.fetchBoard.writer}
          </S.Name>
          <ul>
            <li>
              <S.CreationDate>
                {getDate(data?.fetchBoard.createdAt)}
              </S.CreationDate>
              <S.Dotted />
            </li>
            <li>
              <S.Like>추천 {data?.fetchBoard.likeCount}</S.Like>
            </li>
          </ul>
        </S.Info>
        <S.LikeButton
          type="button"
          onClick={onClickLikeButton(String(data?.fetchBoard._id))}
        >
          <S.LikeIcon />
          <p>추천</p>
        </S.LikeButton>
      </S.User>
      <S.Contents>
        <S.Title>{data?.fetchBoard.title}</S.Title>
        <div
          dangerouslySetInnerHTML={{
            __html: safeHtml,
          }}
        />
        {data?.fetchBoard.youtubeUrl && (
          <S.Youtube>
            <ReactPlayer
              url={String(data?.fetchBoard.youtubeUrl)}
              controls={true}
              width="100%"
            />
          </S.Youtube>
        )}
        {data?.fetchBoard.boardAddress && (
          <S.Address>
            <TitleItem title="주소" fontSize="20px" />
            <S.MapBox>
              <KakaoMap address="" />
            </S.MapBox>
            <p>{`${data.fetchBoard.boardAddress.address} ${data.fetchBoard.boardAddress.addressDetail}`}</p>
          </S.Address>
        )}
      </S.Contents>
      <S.ButtonBox>
        <li>
          <ButtonItem
            title="삭제"
            width="140px"
            height="50px"
            border="1px solid #e76161"
            borderRadius="2px"
            color="#e76161"
            backgroundColor="#fff"
            fontSize="20px"
            fontFamilly="NanumBold"
            type="button"
            onClick={onClickDeleteBoard}
          />
        </li>
        <li>
          <ButtonItem
            title="수정"
            width="140px"
            height="50px"
            borderRadius="2px"
            color="#fff"
            backgroundColor="#e76161"
            fontSize="20px"
            fontFamilly="NanumBold"
            hoverBackgroundColor="#c64343"
            transition="all 0.3s ease-in-out"
            type="button"
            onClick={() => {
              pageRouting(
                `${BOARDS_DETAIL_PATH}/${router.query.boardsId}${EDIT_PATH}`
              );
            }}
          />
        </li>
      </S.ButtonBox>
      <BoardsCommentUI />
    </S.Wrapper>
  );
}

import React, {useEffect, useState} from "react";
import _ReactPlayer, {ReactPlayerProps} from "react-player";
import CarouselItem from "../../../commons/items/carousel/carousel.index";
import CommentItem from "../../../commons/items/comment/comment.index";
import KakaoMap from "../../../commons/items/kakaoMap/kakaoMap.index";
import TitleItem from "../../../commons/items/title/title.index";
import * as S from "./boards.detail.styles";
import {useQueryBoard} from "../../../commons/customs/useQueries.ts/useQueries";
import {getDate} from "../../../../commons/libraries/utils";
import {useLikeBoard} from "../../../commons/customs/hooks/useLikeBoard";
import DOMPurify from "dompurify";

const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export default function BoardsDetailUI() {
  const [safeHtml, setSafeHtml] = useState("");

  const {data} = useQueryBoard();
  const {onClickLikeButton} = useLikeBoard();

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
      <CommentItem />
    </S.Wrapper>
  );
}

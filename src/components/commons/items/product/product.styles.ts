import styled from "@emotion/styled";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";

export const Wrapper = styled.div`
  position: relative;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImgBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: #eee;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    border: none;
    object-fit: cover;
    object-position: center;
  }
`;

export const ImgNoneBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #777;
`;

export const ProductFooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 9px;

  > h1 {
    width: 100%;
    margin-bottom: 20px;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

export const ProductFooterEntry = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Price = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  font-family: NanumBold;

  > p {
    font-size: 16px;
    margin-right: 3px;
    margin-bottom: 2px;
    font-family: NanumBold;
  }
`;

export const CreationDate = styled.p`
  font-size: 12px;
  color: #777;
`;

export const HeartButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: transparent;
  z-index: 1;
  cursor: pointer;
`;

export const lineHeart = styled(AiOutlineHeart)`
  color: #fff;
  font-size: 30px;
  transition: all 0.3s ease-in-out;

  :hover {
    color: #f84a4a;
  }
`;

export const FillHeart = styled(AiFillHeart)`
  color: #e76161;
  font-size: 30px;
  transition: all 0.3s ease-in-out;

  :hover {
    color: #f84a4a;
  }
`;

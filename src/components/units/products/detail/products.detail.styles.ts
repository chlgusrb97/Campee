import styled from "@emotion/styled";
import {AiOutlineHeart} from "react-icons/ai";
import {FaUserCircle} from "react-icons/fa";
import {RiChatDeleteLine, RiEditBoxLine} from "react-icons/ri";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 440px;
`;

export const ProductInfoLeftContents = styled.div`
  width: 440px;
  margin-right: 40px;
`;

export const ProductInfoRightContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 480px);

  > div {
    :first-of-type {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding-bottom: 16px;
    }

    :nth-of-type(2) {
      padding: 24px 0;
    }
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserImageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 50%;
  background-color: #fff;
`;

export const UserIcon = styled(FaUserCircle)`
  font-size: 40px;
  color: #ddd;
`;

export const UserName = styled.p`
  color: #000;
  font-size: 16px;
  font-family: NanumBold;
  text-decoration: none;
`;

export const EditDeleteButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #a9a9a9;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover {
      color: #e76161;
    }

    :not(:last-of-type) {
      margin-right: 15px;
    }
  }

  p {
    font-size: 14px;
    font-family: NanumBold;
    margin-left: 2px;
  }
`;

export const EditIcon = styled(RiEditBoxLine)`
  font-size: 24px;
`;

export const DeleteIcon = styled(RiChatDeleteLine)`
  font-size: 24px;
`;

export const ProductName = styled.h1`
  margin-bottom: 12px;
  font-size: 20px;
  font-family: NanumRegular;
`;

export const ProductPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 50px;
  font-size: 32px;
  font-family: NanumBold;

  > p {
    font-size: 26px;
    margin-bottom: 3px;
    margin-left: 5px;
  }
`;

export const ProductRemarks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 14px;

  > h4 {
    color: #a9a9a9;
    font-size: 14px;
    margin-right: 20px;
    font-family: NanumRegular;
  }

  > p {
    font-size: 14px;
    font-family: NanumBold;
  }
`;

export const ProductTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 14px;

  > h4 {
    color: #a9a9a9;
    font-size: 14px;
    margin-right: 20px;
    font-family: NanumRegular;
  }

  > p {
    font-size: 14px;
    font-family: NanumBold;
  }
`;

export const ProductAddress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 14px;

  > h4 {
    color: #a9a9a9;
    font-size: 14px;
    margin-right: 20px;
    font-family: NanumRegular;
  }

  > p {
    font-size: 14px;
    font-family: NanumBold;
  }
`;

export const PickBasketButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PickButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 55px;
  border: 1px solid #e76161;
  border-radius: 4px;
  color: #e76161;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;

  > p {
    font-family: NanumBold;
  }

  :hover {
    background-color: #fafafa;
  }
`;

export const LineHeartIcon = styled(AiOutlineHeart)`
  font-size: 24px;
  margin-right: 2px;
`;

export const BuyButton = styled.button`
  width: 50%;
  height: 55px;
  color: #fff;
  border-radius: 4px;
  margin-left: 6px;
  background-color: #e76161;
  font-size: 16px;
  font-family: NanumBold;
  cursor: pointer;

  :hover {
    background-color: #c64343;
  }
`;

export const ProductContentns = styled.div`
  margin-top: 100px;
  padding: 40px 0;
  border-top: 1px solid #ddd;

  > span {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-bottom: 24px;
  }
`;

export const ProductContentsAddress = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export const MapBox = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid #ddd;
  margin: 24px 0 12px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #bbb;
`;

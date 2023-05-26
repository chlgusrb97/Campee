import styled from "@emotion/styled";
import {FaUserCircle} from "react-icons/fa";
import {AiFillLike} from "react-icons/ai";

export const Wrapper = styled.div``;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid #ddd;

  > div {
    :first-of-type {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      margin-right: 12px;
      border-radius: 50%;
      background-color: #fff;
    }
  }
`;

export const UserIcon = styled(FaUserCircle)`
  font-size: 48px;
  color: #ddd;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    color: #a1a1a1;
    font-size: 14px;

    :first-of-type {
      margin-bottom: 6px;
      color: #000;
      font-size: 16px;
      font-family: NanumBold;
    }
  }
`;

export const LikeButton = styled.button`
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  margin-left: auto;
  border-radius: 10px;
  background-color: #146c94;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: #0d4f6d;
  }

  > p {
    color: #fff;
    font-size: 14px;
  }
`;

export const LikeIcon = styled(AiFillLike)`
  margin-right: 6px;
  color: #fff;
  font-size: 14px;
`;

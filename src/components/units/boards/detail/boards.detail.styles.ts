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

  p {
    font-size: 14px;
  }

  > ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    > li {
      display: flex;
      flex-direction: row;
      align-items: center;

      :first-of-type ::after {
        display: inline-block;
        content: "";
        width: 1px;
        height: 12px;
        margin: 0 10px;
        background-color: #ddd;
      }
    }
  }
`;

export const Name = styled.p`
  margin-bottom: 6px;
  color: #000;
  font-size: 16px;
  font-family: NanumBold;
  text-decoration: none;
`;

export const CreationDate = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #777;
`;

export const Like = styled.p`
  color: #777;
`;

export const LikeButton = styled.button`
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  margin-left: auto;
  border-radius: 8px;
  background-color: #e76161;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: #c64343;
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

export const Contents = styled.div`
  padding: 40px 0;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: NanumBold;
`;

export const Text = styled.p`
  font-size: 16px;
  margin: 70px 0 100px;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    padding-bottom: 24px;
  }
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

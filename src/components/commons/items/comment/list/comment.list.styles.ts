import styled from "@emotion/styled";
import {FaUserCircle} from "react-icons/fa";

export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const UserIconBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 30px;
  height: 30px;
  margin-right: 12px;
  border-radius: 50%;
  background-color: #fff;
`;

export const UserIcon = styled(FaUserCircle)`
  font-size: 30px;
  color: #ddd;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    margin-top: 2px;
    font-size: 16px;
    font-family: NanumBold;
  }

  > p {
    margin: 12px 0;
    font-size: 16px;
  }

  > ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    > li {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const Dotted = styled.i`
  display: inline-block;
  margin: 0px 4px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  font-style: normal;
  color: rgb(194, 200, 204);

  ::before {
    content: "·";
  }
`;

export const CreationDate = styled.p`
  display: inline-block;
  font-size: 12px;
  color: #777;
`;

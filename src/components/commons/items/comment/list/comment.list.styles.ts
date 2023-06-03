import styled from "@emotion/styled";
import {FaUserCircle} from "react-icons/fa";

export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
  > h1 {
    font-size: 14px;
    font-family: NanumBold;
  }

  > p {
    margin: 12px 0;
    font-size: 14px;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const CreationDate = styled.p`
  margin-right: 10px;
  font-size: 12px;
  color: #777;
`;

export const CommentAnwser = styled.p`
  font-size: 12px;
  color: #777;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

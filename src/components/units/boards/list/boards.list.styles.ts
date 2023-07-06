import styled from "@emotion/styled";
import {FaUserCircle} from "react-icons/fa";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  > span {
    display: inline-block;
    width: 100%;
    height: 100%;

    @media (max-width: 1023px) {
      padding: 20px 20px 0;
    }

    @media (max-width: 767px) {
      padding: 20px 10px 0;
    }
  }
`;

export const BestBoards = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;

  @media (max-width: 1023px) {
    padding: 20px 20px 0;
  }

  @media (max-width: 767px) {
    padding: 20px 10px 0;
    flex-wrap: wrap;
  }

  > li {
    width: 22%;
    cursor: pointer;

    @media (max-width: 767px) {
      width: 48%;
      margin-bottom: 4%;
    }
  }
`;

export const BestBoardImgBox = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  background-color: #ddd;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  > div {
  }
`;

export const BestBoardFooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-family: NanumBold;
    margin-top: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

export const FooterUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
`;

export const FooterUserImgBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 6px;
  background-color: #fff;
  overflow: hidden;
`;

export const UserIcon = styled(FaUserCircle)`
  font-size: 30px;
  color: #ddd;
`;

export const FooterUserName = styled.p`
  font-size: 14px;
`;

export const FooterEntry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > p {
    color: #777;
    font-size: 12px;

    :first-of-type {
      margin-right: 12px;
    }
  }
`;

export const BoardsCount = styled.h3`
  display: inline-block;
  width: 100%;
  padding-bottom: 6px;
  font-size: 14px;
  letter-spacing: 0.2px;
  margin-top: 50px;

  @media (max-width: 1023px) {
    padding: 0 20px 6px;
  }

  @media (max-width: 767px) {
    padding: 0 10px 6px;
  }
`;

export const BoardsList = styled.div`
  width: 100%;

  @media (max-width: 1023px) {
    padding: 0 20px;
  }

  @media (max-width: 767px) {
    padding: 0 10px;
  }
`;

export const BoardListTitle = styled.ul`
  height: 60px;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  align-content: center;
  border-top: 1px solid #555;
  border-bottom: 1px solid #ddd;
  background-color: #f7f7f7;

  > li {
    width: 25%;
    text-align: center;
    font-size: 12px;
    font-family: NanumBold;
    white-space: nowrap;

    :first-of-type {
      width: 20%;
    }

    :nth-of-type(2) {
      width: 40%;
    }

    :nth-of-type(3) {
      width: 30%;
    }

    :last-of-type {
      width: 10%;
    }
  }
`;

export const BoardListContents = styled.ul`
  display: flex;
  flex-direction: column;

  > li {
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #ddd;
    cursor: pointer;

    > p {
      padding: 0 5px;
      text-align: center;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }

    :hover {
      background-color: #f7f7f7f7;
    }
  }
`;

export const Writer = styled.p`
  width: 20%;
  font-family: NanumBold;
`;

export const Title = styled.p`
  width: 40%;
`;

export const Creation = styled.p`
  width: 30%;
`;

export const Like = styled.p`
  width: 10%;
`;

export const SearchBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  @media (max-width: 1023px) {
    justify-content: flex-start;
  }
`;

export const ButtonBox = styled.div`
  position: absolute;
  right: 0;

  @media (max-width: 1023px) {
    right: 20px;
  }

  @media (max-width: 767px) {
    right: 10px;
  }
`;

export const FooterContents = styled.div`
  width: 100%;
  margin-top: 40px;
`;

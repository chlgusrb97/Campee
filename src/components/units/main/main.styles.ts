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
    padding-bottom: 20px;
  }

  @media (max-width: 1023px) {
    padding: 0 20px;
  }

  @media (max-width: 767px) {
    padding: 0 10px;
    margin-top: 50px;
  }
`;

export const BestBoards = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 767px) {
    gap: 4%;
    justify-content: flex-start;
    margin-bottom: 40px;
  }

  > li {
    width: 22%;
    cursor: pointer;

    @media (max-width: 767px) {
      width: 48%;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
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

export const NewArrival = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4%;

  > li {
    width: 22%;
    border: 1px solid #ddd;
    margin-bottom: 50px;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;

    @media (max-width: 767px) {
      width: 48%;
    }
  }
`;

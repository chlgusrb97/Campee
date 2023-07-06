import styled from "@emotion/styled";
import {FaUserCircle} from "react-icons/fa";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    padding: 0 20px;
  }

  @media (max-width: 767px) {
    padding: 0 10px;
    margin-top: 50px;
  }
`;

export const MyPageHeader = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 40px;

  > li:not(:last-of-type) {
    margin-right: 12px;
  }
`;

export const MyPageHeaderButton = styled.button`
  color: #a9a9a9;
  background-color: transparent;
  font-size: 16px;
  font-family: NanumBold;
  cursor: pointer;

  :hover {
    color: #e76161;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 24px;

  @media (max-width: 767px) {
    height: auto;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0;
  }
`;

export const ProfileLeftContents = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media (max-width: 767px) {
    padding: 24px;
  }
`;

export const UserImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #fff;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const UserIcon = styled(FaUserCircle)`
  width: 100%;
  height: 100%;
  font-size: 100px;
  color: #ddd;
`;

export const UserInfo = styled.div`
  margin-left: 12px;
`;

export const UserName = styled.h1`
  font-size: 16px;
  font-family: NanumBold;
  margin-bottom: 5px;
`;

export const UserEmail = styled.p`
  color: #999;
  font-size: 14px;
`;

export const ProfileButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;

  > button {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px 16px;
    color: #666;
    background-color: transparent;
    cursor: pointer;

    :not(:last-of-type) {
      margin-right: 4px;
    }

    :hover {
      background-color: #fafafa;
    }
  }
`;

export const ProfileRightContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-left: 1px solid #ddd;
  padding-left: 20px;

  @media (max-width: 767px) {
    width: 100%;
    border-top: 1px solid #ddd;
    border-left: none;
    padding-left: 0;
    padding: 24px;
  }

  ::after {
    content: "";
    width: 2px;
    height: 3px;
  }
`;

export const Point = styled.p`
  font-family: NanumBold;
  white-space: nowrap;
`;

export const PointTitle = styled.p`
  margin-bottom: 4px;
  color: #a9a9a9;
  font-size: 12px;
`;

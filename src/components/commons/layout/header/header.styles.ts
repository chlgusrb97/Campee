import styled from "@emotion/styled";
import {FaUserCircle} from "react-icons/fa";

export const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  background-color: #fff;
  z-index: 1;
`;

export const HeaderSection01 = styled.div`
  width: 100%;
  height: 36px;
  border-bottom: 1px solid #eee;
`;

export const Section01Contents = styled.ul`
  max-width: 1024px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;

  > li:not(:last-of-type) {
    margin-right: 16px;
  }
`;

export const HeaderSection02 = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eee;
`;

export const Section02Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Gnb = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: 100px;

  > li:not(:last-of-type) {
    margin-right: 24px;
  }
`;

export const User = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
`;

export const UserIcon = styled(FaUserCircle)`
  font-size: 30px;
  color: #ddd;
`;

export const Point = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 12px 0 5px;
  font-size: 14px;

  > p {
    margin: 0 3px;
    text-decoration: underline;
  }
`;

export const TopUp = styled.span`
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Logout = styled.span`
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

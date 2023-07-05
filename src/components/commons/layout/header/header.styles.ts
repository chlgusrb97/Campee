import styled from "@emotion/styled";
import {FaUserCircle} from "react-icons/fa";
import {TbCoins} from "react-icons/tb";

export const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  background-color: #fff;
  z-index: 10;
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

export const Tnb = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  > li {
    display: flex;
    align-items: center;

    :not(:last-of-type) {
      margin-right: 20px;
    }
  }
`;

export const MoneyIcon = styled(TbCoins)`
  font-size: 24px;
  color: #666;
  margin-right: 4px;
`;

export const MoneyNumber = styled.p`
  color: #666;
  font-size: 14px;
  font-family: NanumBold;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserIcon = styled(FaUserCircle)`
  width: 30px;
  height: 30px;
  margin: 6px;
  color: #ddd;
`;

export const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 6px;
  object-fit: cover;
  object-position: center;
`;

export const UserName = styled.p`
  color: #666;
  font-size: 14px;
  font-family: NanumBold;
`;

export const TopUp = styled.span`
  font-size: 12px;
  color: #666;
  cursor: pointer;

  :hover {
    color: #222;
  }
`;

export const Logout = styled.span`
  color: #666;
  font-size: 12px;
  cursor: pointer;

  :hover {
    color: #222;
  }
`;

export const Login = styled.button`
  color: #666;
  background-color: transparent;
  font-size: 12px;
  cursor: pointer;

  :hover {
    color: #222;
  }
`;

export const Join = styled.button`
  color: #666;
  background-color: transparent;
  font-size: 12px;
  cursor: pointer;

  :hover {
    color: #222;
  }
`;

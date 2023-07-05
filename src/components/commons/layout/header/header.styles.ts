import styled from "@emotion/styled";
import {FaCampground, FaUserCircle} from "react-icons/fa";
import {TbCoins} from "react-icons/tb";
import {GiForestCamp} from "react-icons/gi";
import {AiTwotoneHome} from "react-icons/ai";

interface IFooterButtonProps {
  color: string;
}

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

  @media (max-width: 1023px) {
    padding: 0 20px;
  }

  @media (max-width: 767px) {
    display: none;
  }
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

  @media (max-width: 1023px) {
    padding: 0 20px;
  }

  @media (max-width: 767px) {
    height: 44px;
  }
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

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const Logo = styled.div`
  a {
    font-size: 36px;

    @media (max-width: 767px) {
      font-size: 24px;
    }
  }
`;

export const Gnb = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: 100px;

  > li:not(:last-of-type) {
    margin-right: 24px;
  }

  @media (max-width: 767px) {
    display: none;
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

  @media (max-width: 767px) {
    display: none;
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

export const FooterGnb = styled.ul`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  bottom: 0;
  padding: 0px 20px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  background-color: #fff;

  @media (min-width: 768px) {
    display: none;
  }

  > li {
    padding: 0 16px;
  }
`;

export const FooterButton = styled.button<IFooterButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.color};
  background-color: transparent;
  cursor: pointer;
`;

export const FooterText = styled.p`
  font-size: 14px;
  font-family: NanumBold;
`;

export const HomeIcon = styled(AiTwotoneHome)`
  font-size: 24px;
`;

export const StoreIcon = styled(FaCampground)`
  font-size: 24px;
`;

export const BoardIcon = styled(GiForestCamp)`
  font-size: 24px;
`;

export const MyPageIcon = styled(FaUserCircle)`
  font-size: 24px;
`;

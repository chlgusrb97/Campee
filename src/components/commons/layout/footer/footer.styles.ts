import styled from "@emotion/styled";
import {AiFillGithub} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";

export const Wrapper = styled.div`
  border-top: 1px solid #eee;
  background-color: #fff;

  @media (max-width: 1023px) {
    padding: 0 20px;
  }

  @media (max-width: 767px) {
    padding: 0 10px;
  }
`;

export const FooterContents = styled.div`
  max-width: 1024px;
  padding: 20px 0;
  margin: 0 auto;
`;

export const MyInfo = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;

  > li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    :hover a {
      color: #e76161;
    }

    :not(:last-of-type) {
      margin-right: 16px;
    }

    > a {
      display: flex;
      align-items: center;
      color: #000;
    }
  }

  p {
    font-size: 14px;
    font-family: NanumBold;
  }
`;

export const GitHub = styled(AiFillGithub)`
  font-size: 32px;
  margin-right: 5px;
`;

export const Google = styled(FcGoogle)`
  font-size: 32px;
  margin-right: 5px;
`;

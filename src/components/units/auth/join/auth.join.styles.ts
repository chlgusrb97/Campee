import styled from "@emotion/styled";
import {BiX} from "react-icons/bi";

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 15;
`;

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
`;

export const Contents = styled.form`
  position: relative;
  width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  padding: 40px 20px;
  background-color: #fff;
`;

export const Logo = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  font-family: KanitBold;
  color: #e76161;
`;

export const InputList = styled.ul`
  width: 100%;

  > li {
    width: 100%;
    margin-top: 12px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  margin-top: 20px;
  color: #fff;
  background-color: #e76161;
  font-size: 16px;
  font-family: NanumBold;
  cursor: pointer;

  :hover {
    background-color: #c64343;
  }
`;

export const Join = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  color: #666;
  background-color: transparent;
  font-size: 12px;

  > p {
    margin-right: 6px;
  }

  > button {
    background-color: transparent;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CancelButton = styled(BiX)`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 30px;
  color: #a9a9a9;
  cursor: pointer;

  :hover {
    color: #666;
  }
`;

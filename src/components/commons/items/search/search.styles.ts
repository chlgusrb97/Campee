import styled from "@emotion/styled";
import {RiSearchLine} from "react-icons/ri";

export const Search = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid #e76161;
  border-radius: 2px;
  overflow: hidden;

  @media (max-width: 1023px) {
    width: calc(100% - 140px);
    margin: 0 20px;
  }

  @media (max-width: 767px) {
    width: calc(100% - 120px);
    margin: 0 10px;
  }

  > input {
    width: calc(100% - 40px);
    padding: 10px 16px;
    outline: none;
  }

  > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #e76161;
    cursor: pointer;
  }
`;

export const SearchIcon = styled(RiSearchLine)`
  color: #fff;
  font-size: 24px;
`;

import styled from "@emotion/styled";

export const Wrapper = styled.form`
  border-top: 1px solid #666;
`;

export const ContentsList = styled.ul`
  > li {
    padding: 20px 0;

    :first-of-type {
      padding: 38px 0;
    }
  }
`;

export const WriteContent = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelBox = styled.div`
  width: 100px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 400px;

  > span {
    padding: 0 6px;
    color: #a9a9a9;
    font-size: 14px;
  }

  > input {
    width: 100%;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 16px;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  border-radius: 4px;
  padding: 12px 70px;
  margin-top: 40px;
  color: #fff;
  background-color: #e76161;
  font-size: 18px;
  font-family: NanumBold;
  cursor: pointer;

  :hover {
    background-color: #c64343;
  }
`;

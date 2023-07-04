import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 480px;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 38px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-family: NanumBold;
`;

export const PasswordList = styled.ul`
  display: flex;
  flex-direction: column;

  > li {
    margin-top: 20px;
  }
`;

export const NewPassword = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 14px;
    font-family: NanumBold;
    margin-bottom: 7px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const NewPasswordInput = styled.input`
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 16px;
  margin-top: 20px;
  outline: none;
`;

export const NewPasswordSubmitButton = styled.button`
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

import styled from "@emotion/styled";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 50px 100px;
  background-color: #fff;

  > span {
    width: 100%;
    text-align: center;
    border-bottom: 3px solid #555;
    padding-bottom: 114px;
  }
`;

export const InputContents = styled.ul`
  width: 100%;
  padding: 40px 60px;
  border-bottom: 2px solid #555;

  span {
    display: inline-block;
    width: 170px;
  }
`;

export const ErrorMessage = styled.p`
  height: 14px;
  margin-top: 8px;
  margin-left: 188px;
  color: #f65656;
  font-size: 12px;

  :not(:last-of-type) {
    margin-bottom: 30px;
  }
`;

export const ButtonContents = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 68px;

  > li:first-of-type {
    margin-right: 10.5px;
  }

  > li:last-of-type {
    margin-left: 10.5px;
  }
`;

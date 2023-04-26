import styled from "@emotion/styled";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 50px 312px;
  background-color: #fff;

  > span {
    width: 100%;
    text-align: center;
    border-bottom: 3px solid #555;
    padding-bottom: 114px;
    margin-bottom: 174px;
  }

  > div {
    display: flex;
    flex-direction: row;
  }
`;

export const InputContents = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 30px;

  span {
    display: inline-block;
    width: 113px;
  }
`;

export const ErrorMessage = styled.p`
  height: 14px;
  margin-top: 8px;
  margin-left: 113px;
  color: #f65656;
  font-size: 12px;

  :not(:last-of-type) {
    margin-bottom: 24px;
  }
`;

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  > span {
    width: 100%;
    display: inline-block;
    border-bottom: 3px solid #555;
    padding: 0 50px 18px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 70px 50px;

    > textarea {
      width: 100%;
      height: 230px;
      padding: 20px;
      background-color: #e9e9e9;
      outline: none;
      resize: none;

      ::placeholder {
        color: #a9a9a9;
        font-size: 14px;
      }
    }
  }
`;

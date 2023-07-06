import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  border-top: 1px solid #ddd;
  padding: 40px 0;
  margin-top: 40px;
  background-color: #fff;

  @media (max-width: 767px) {
    margin: 40px 10px;
  }

  > span {
    display: inline-block;
    padding-bottom: 20px;
  }
`;

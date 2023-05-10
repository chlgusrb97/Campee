import styled from "@emotion/styled";

export const Wrapper = styled.div`
  > span {
    width: 100%;
    display: inline-block;
    border-bottom: 3px solid #555;
    padding: 0 50px 18px;
  }

  > div {
    padding: 100px 50px;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;

  > div:nth-of-type(2) {
    margin-top: 30px;
    font-size: 24px;
  }
`;

export const MapBox = styled.div`
  width: 100%;
  height: 700px;
`;

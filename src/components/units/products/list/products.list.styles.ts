import {SearchOutlined} from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  > span {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0 0 16px;
    border-bottom: 2px solid #555;
  }
`;

export const BestProducts = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

  > li {
    width: 22%;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
  }
`;

export const BestProductImgBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ddd;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  > div {
  }
`;

export const BestProductFooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-family: NanumBold;
    margin-top: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

export const FooterUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
`;

// export const BestContents = styled.div`
//   padding: 40px;
//   background-color: #fff;

//   > span {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     margin-bottom: 86px;
//   }
// `;

// export const BestProducts = styled.ul`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   gap: 4%;

//   > li {
//     width: 22%;
//   }
// `;

// export const ProductsContents = styled.div`
//   margin-top: 36px;

//   > div {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     border-bottom: 1px solid #555;
//     padding: 0 40px 18px;
//     margin-bottom: 46px;
//   }
// `;

// export const Input = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   width: 534px;
//   border-bottom: 3px solid #000;
// `;

// export const Search = styled(SearchOutlined)`
//   padding: 0 15px;
//   color: #212428;
//   font-size: 22px;
//   cursor: pointer;
// `;

// export const Products = styled.ul`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   gap: 4%;

//   > li {
//     width: 22%;
//     margin-bottom: 50px;
//   }
// `;

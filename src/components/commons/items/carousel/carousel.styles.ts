import styled from "@emotion/styled";
import {Carousel} from "antd";

export const CarouselWrapper = styled(Carousel)`
  .slick-dots {
    align-items: center;
  }

  .slick-dots li {
    height: auto;

    > button {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
  }

  .slick-dots li.slick-active {
    width: 16px;

    > button {
      width: 9px;
      height: 9px;
    }
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 440px;
  line-height: 440px;
  border-radius: 8px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 767px) {
    border-radius: 0;
  }
`;

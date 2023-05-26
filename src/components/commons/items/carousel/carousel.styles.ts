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

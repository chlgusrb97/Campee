import styled from "@emotion/styled";
import {Carousel} from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 750px;
  background-color: #c4c4c4;

  .ant-carousel .slick-slide {
    text-align: center;
    height: 100%;
    line-height: 750px;
    background: #364d79;
    overflow: hidden;
  }
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;

export const CarouselItem = styled(Carousel)`
  height: 100%;
`;

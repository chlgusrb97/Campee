import {Maybe} from "yup";
import {CarouselWrapper, ImgBox} from "./carousel.styles";

interface ICarouselItemProps {
  images?: Maybe<string[]>;
}

export default function CarouselItem(props: ICarouselItemProps) {
  return (
    <CarouselWrapper draggable>
      {props.images?.map((image, index) => (
        <ImgBox key={index}>
          <img src={`https://storage.googleapis.com/${image}`} />
        </ImgBox>
      ))}
    </CarouselWrapper>
  );
}

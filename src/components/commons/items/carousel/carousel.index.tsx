import {Maybe} from "yup";
import {CarouselWrapper} from "./carousel.styles";

interface ICarouselItemProps {
  images?: Maybe<string[]>;
}

export default function CarouselItem(props: ICarouselItemProps) {
  const contentStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "100%",
    height: "440px",
    borderRadius: "8px",
    color: "#fff",
    lineHeight: "440px",
    objectFit: "cover",
    objectPosition: "center",
  };

  return (
    <CarouselWrapper draggable>
      {props.images?.map((image, index) => (
        <div key={index}>
          <img
            src={`https://storage.googleapis.com/${image}`}
            style={contentStyle}
          />
        </div>
      ))}
    </CarouselWrapper>
  );
}

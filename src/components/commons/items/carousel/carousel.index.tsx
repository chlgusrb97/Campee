import {CarouselWrapper} from "./carousel.styles";

export default function CarouselItem() {
  const contentStyle: React.CSSProperties = {
    height: "440px",
    borderRadius: "8px",
    color: "#fff",
    lineHeight: "440px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <CarouselWrapper draggable>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </CarouselWrapper>
  );
}

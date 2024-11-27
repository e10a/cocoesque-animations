import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { styled } from "@linaria/react";
import { css } from "@linaria/core";

const arrowButton = css`
  box-shadow: 0 0 3px rgba(var(--color-black) / 0.2);
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  margin: 0 var(--space-4);

  &:hover {
    box-shadow: 0 0 5px rgba(var(--color-black) / 0.8);
    filter: brightness(1.5);
  }
`;

const ButtonContainer = styled.div`
  align-items: center;
  gap: var(--space-4);
  justify-content: center;
`;
const Outer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .slick-slider {
    max-width: var(--space-1440px);
    width: 100vw;
  }
`;

interface Props {
  centerMode?: boolean;
  children: React.ReactNode;
  infinite?: boolean;
  initialSlide?: number;
  rows?: number;
  slidesToShow?: number;
  responsive?: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll?: number;
      infinite?: boolean;
      dots?: boolean;
    };
  }>;
  totalSlides?: number | null;
  hideControls?: boolean;
}

export default function Carousel({
  centerMode = false,
  children,
  infinite = true,
  initialSlide = 0,
  rows = 1,
  slidesToShow = 3,
  responsive = [],
  totalSlides = null,
  hideControls = false,
}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const NextArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props;

    return (
      <button
        className={`button-round ${arrowButton}`}
        disabled={currentSlide === totalSlides}
        onClick={onClick}
        style={{ right: 0 }}
      >
        <span className="material-symbols-rounded">chevron_right</span>
      </button>
    );
  };

  const PrevArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props;

    return (
      <button
        className={`button-round ${arrowButton}`}
        disabled={currentSlide === 0}
        onClick={onClick}
        style={{ left: 0 }}
      >
        <span className="material-symbols-rounded">chevron_left</span>
      </button>
    );
  };

  const goBack = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleAfterChange = (current: number) => {
    setCurrentSlide(current);
  };

  const settings = {
    className: "cursor-grab",
    swipeToSlide: true,
    slideToScroll: 1,
    speed: 500,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: initialSlide,
    variableWidth: rows === 1,
    centerMode: centerMode,
    infinite: infinite,
    responsive: responsive,
    rows: rows,
    slidesPerRow: rows > 1 ? Math.floor((totalSlides || 0) / rows) : 1,
    slidesToShow: slidesToShow,
    afterChange: (current: number) => handleAfterChange(current),
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>

      <Outer>
        <ButtonContainer style={{ display: hideControls ? "none" : "flex" }}>
          <button
            disabled={currentSlide === 0}
            className="button-round"
            onClick={goBack}
          >
            <span className="material-symbols-rounded">chevron_left</span>
          </button>
  
          <button
            disabled={currentSlide === totalSlides}
            className="button-round"
            onClick={goNext}
          >
            <span className="material-symbols-rounded">chevron_right</span>
          </button>
        </ButtonContainer>
      </Outer>
    </>
  );
}

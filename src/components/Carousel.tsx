import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@linaria/react";

const ButtonContainer = styled.div`
  display: flex;
  gap: var(--space-4);
  align-items: center;
  justify-content: center;
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
};

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

  const NextArrow = (props: { className?: string; onClick?: () => void }) => {
    const { className, onClick } = props;

    return (
      <button
        disabled={currentSlide === totalSlides}
        className={`button-round ${className} ${hideControls ? "invisible" : ""
          }`}
        onClick={onClick}
      >
        <span className="material-symbols-rounded">
          chevron_right
        </span>
      </button>
    );
  };

  const PrevArrow = (props: { className?: string; onClick?: () => void }) => {
    const { className, onClick } = props;

    return (
      <button
        disabled={currentSlide === 0}
        className={`carousel-nav-button ml-8 left-0 opacity-0 group-hover:opacity-100 ${className} ${hideControls ? "invisible" : ""
          }`}
        onClick={onClick}
      >
        <span className="material-symbols-rounded">
          chevron_left
        </span>
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
    <div className="carousel flex flex-col items-center group">
      <div className="w-full">
        <Slider ref={sliderRef} {...settings}>
          {children}
        </Slider>
      </div>
      <div className={`carousel-controls ${hideControls ? "hidden" : ""}`}>
        <div className="flex gap-8 justify-center">
          <ButtonContainer>
            <button
              disabled={currentSlide === 0}
              className="button-round"
              onClick={goBack}
            >
              <span className="material-symbols-rounded">
                chevron_left
              </span>
            </button>

            <button
              disabled={currentSlide === totalSlides}
              className="button-round"
              onClick={goNext}
            >
              <span className="material-symbols-rounded">
                chevron_right
              </span>
            </button>
          </ButtonContainer>
        </div>
      </div>
    </div>
  );
};

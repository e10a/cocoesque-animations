import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@linaria/react";
import { Children, useRef } from "react";

const SliderContainer = styled.div`
  padding: 0 var(--space-2);

  .slick-track {
    display: flex;

    .slick-slide {
        height: auto;
        display: flex;

        > div {
            display: flex;
        }
    }
  }

  button[name="carousel-navigation"] {
    margin: 0 var(--space-4);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    background-color: rgb(var(--color-white));
    box-shadow: 0 0 3px rgb(var(--color-gray-500));

    &:hover:not([disabled]) {
      background-color: rgb(var(--color-white));
      box-shadow: 0 0 5px 5px rgb(var(--color-gray-500) / 0.4);
      transform: scale(1.2) translateY(-50%);
    }

    &:first-child {
      left: 0;
      right: auto;
    }

    &:last-child {
      right: 0;
      left: auto;
    }
  }
`;

interface Props {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonNext = (props: Props) => {
  if (!props) return null;

  const { onClick } = props;

  return (
    <button
      className="button-round"
      onClick={onClick}
      name="carousel-navigation"
    >
      <span
        className="material-symbols-rounded"
        style={{ position: "relative", right: "-1px" }}
      >chevron_right</span>
    </button>
  );
}

const ButtonPrev = (props: Props) => {
  if (!props) return null;

  const { onClick } = props;

  return (
    <button
      className="button-round"
      onClick={onClick}
      name="carousel-navigation"
    >
      <span
        className="material-symbols-rounded"
        style={{ position: "relative", left: "-1px" }}
      >chevron_left</span>
    </button>
  );
}

export default function Carousel({ children }: { children: React.ReactNode }) {
  const sliderRef = useRef<Slider | null>(null);

  const childrenCount = children ? Children.count(children) : 0;

  const settings = {
    centerMode: false,
    centerPadding: "0px",
    dots: false,
    infinite: true,
    initialSlide: 1,
    rows: 1,
    slidesToScroll: 1,
    slidesToShow: childrenCount,
    speed: 500,
    swipeToSlide: true,
    variableWidth: true,
    nextArrow: <ButtonNext />,
    prevArrow: <ButtonPrev />,
  };

  return (
      <SliderContainer className="slider-container">
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          {...settings}
        >
          {children}
        </Slider>
      </SliderContainer>
  );
}

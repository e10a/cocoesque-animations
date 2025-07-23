import { useEffect, useRef } from "react";
import React, { Children, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { styled } from "@linaria/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const Section = styled.section`
  position: relative;
  z-index: 0;
  max-width: 100vw;
  height: 100%;
  flex: 1 1 0;
  display: flex;

  .autoplay-progress {
    position: absolute;

    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--swiper-theme-color);
  }

  .autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: var(--swiper-theme-color);
    fill: none;
    stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
  }

  .slide-controllers {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0) translateX(-50%);
    z-index: 10;
    bottom: 0;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-16);
    margin-bottom: var(--space-8);

    .slide-button {
      height: var(--space-12);
      width: var(--space-12);
      aspect-ratio: 1/1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      line-height: 1;

      border-radius: 100%;
      background: linear-gradient(
        var(--gradient-rb),
        var(--gradient-indigo-pink)
      );
      color: white;
      border: none;
      font-weight: bold;

      &:hover {
        box-shadow: 0 0 0 5px rgba(255 255 255 / 0.8);
      }

      .slide-button-next {
      }
      .slide-button-prev {
      }
    }
  }

  .swiper-pagination {
    position: static;
    display: flex;
    gap: var(--space-4);
    justify-content: center;

    .swiper-pagination-bullet {
      height: var(--space-12);
      width: var(--space-12);

      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      background: none;

      &.swiper-pagination-bullet-active {
        &:after {
          box-shadow: 0 0 0 5px rgba(var(--color-white) / 1);
        }
      }

      &:hover {
        &:after {
          box-shadow: 0 0 0 5px rgba(var(--color-white) / 0.5);
        }
      }

      &:after {
        content: "";
        display: block;
        border-radius: 100%;

        height: var(--space-8);
        width: var(--space-8);

        background-image: linear-gradient(
          var(--gradient-rb),
          var(--gradient-indigo-pink)
        );
      }
    }
  }
`;

type PropType = {
  children: ReactNode;
};

const HomeHeroSwiper: React.FC<PropType> = (props) => {
  const { children } = props;
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (_: any, time: any, progress: any) => {
    if (progressCircle?.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
    }

    if (progressContent?.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  useEffect(() => {
    const existingWrapper = document.querySelector(".slide-controllers");

    if (!!existingWrapper) return;

    const target = document.querySelector(".swiper-pagination");

    if (target && target.parentNode) {
      const wrapper = document.createElement("div");

      wrapper.className = "slide-controllers";

      target.parentNode.insertBefore(wrapper, target);

      wrapper.appendChild(target);

      const prevButton = document.createElement("button");
      const nextButton = document.createElement("button");

      [prevButton, nextButton].map((button, index) => {
        button.innerHTML = !!index ? "<--" : "-->";

        button.setAttribute(
          "class",
          `slide-button slide-button-${!!index ? "prev" : "next"}`
        );

        return button;
      });

      target.parentNode.insertBefore(nextButton, target);
      target.parentNode.appendChild(prevButton);
    }
  }, []);

  return (
    <Section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        effect="fade"
      >
        {children &&
          Children.map(children, (child: any, index: number) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </Section>
  );
};

export default HomeHeroSwiper;

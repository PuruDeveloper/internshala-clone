import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import "../styles/Header/Carousel.css";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(1);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <button className="left__arrow" onClick={prevSlide}>
        <i class="fas fa-chevron-left"></i>
      </button>
      {(current === 0 && (
        <img
          src={slides[slides.length - 1].image}
          alt="travel image"
          className="image"
        />
      )) ||
        (current === slides.length - 1 && (
          <img
            src={slides[slides.length - 2].image}
            alt="travel image"
            className="image"
          />
        )) || (
          <img
            src={slides[current - 1].image}
            alt="travel image"
            className="image"
          />
        )}
      {CarouselData.map((slide, index) => {
        return (
          <div>
            {
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt="travel image" className="image" />
                )}
              </div>
            }
          </div>
        );
      })}
      {(current === slides.length - 1 && (
        <img src={slides[0].image} alt="travel image" className="image" />
      )) ||
        (current >= 0 && (
          <img
            src={slides[current + 1].image}
            alt="travel image"
            className="image"
          />
        ))}
      <button className="right__arrow" onClick={nextSlide}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </section>
  );
}

export default Carousel;

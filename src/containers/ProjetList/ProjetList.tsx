import "./ProjetList.scss";
import React, { useState, useRef } from "react";

import ProjetCard from "../../components/ProjetCard/ProjetCard";
import { openModal } from "../../redux/reducer/modalSlice";
import { useDispatch } from "react-redux";
import ProjetData from "../../data/ProjetsData";

interface Project {
  title: string;
  imgTitle: string;
  outil: string;
  gif: string;
  description: string;
  caracteristique: string;
  gitHub: string;
  gitPages: string;
}

const ProjetList: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(3);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const moveToSelected = (index: number): void => {
    setSelectedIndex(index);
  };

  const handlePrevClick = (): void => {
    let newIndex = selectedIndex - 1;
    if (newIndex < 0) {
      newIndex = ProjetData.length - 1;
    }
    moveToSelected(newIndex);
  };

  const handleNextClick = (): void => {
    let newIndex = selectedIndex + 1;
    if (newIndex >= ProjetData.length) {
      newIndex = 0;
    }
    moveToSelected(newIndex);
  };

  const handleCardClick = (index: number, project: Project): void => {
    if (index !== selectedIndex) {
      moveToSelected(index);
    }
    if (index === selectedIndex) {
      dispatch(openModal({ project }));
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = e.touches[0].clientX;
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll(".slider");
      cards.forEach((card: Element) => {
        card.classList.add("no-slider-transition");
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    if (touchStartX.current !== null) {
      const touchDelta = e.touches[0].clientX - touchStartX.current;
      touchDeltaX.current = touchDelta;
      document.documentElement.style.setProperty(
        "--touchDelta",
        touchDelta + "px"
      );
    }
  };

  const handleTouchEnd = (): void => {
    if (touchDeltaX.current < -50) {
      handleNextClick();
    } else if (touchDeltaX.current > 50) {
      handlePrevClick();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
    document.documentElement.style.setProperty("--touchDelta", "0");
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll(".slider");
      cards.forEach((card: Element) => {
        card.classList.remove("no-slider-transition");
      });
    }
  };

  return (
    <section id="Portfolio">
      <div className="Portfolio_titre">
        <h2>Portfolio</h2>
      </div>
      <div id="prev" onClick={handlePrevClick} className="buttons-left">
        <div className="fleche-gauche-haut"></div>
        <div className="fleche-gauche-bas"></div>
      </div>
      <div
        id="carousel"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {ProjetData.map((projet, index) => (
          <ProjetCard
            key={index}
            place={
              (index - selectedIndex + ProjetData.length) %
                ProjetData.length ===
              0
                ? "selected"
                : (index - selectedIndex + ProjetData.length) %
                    ProjetData.length ===
                  1
                ? "next"
                : (index - selectedIndex + ProjetData.length) %
                    ProjetData.length ===
                  2
                ? "nextRightSecond"
                : (index - selectedIndex + ProjetData.length) %
                    ProjetData.length ===
                  ProjetData.length - 1
                ? "prev"
                : (index - selectedIndex + ProjetData.length) %
                    ProjetData.length ===
                  ProjetData.length - 2
                ? "prevLeftSecond"
                : "hideRight"
            }
            project={projet}
            Click={() => handleCardClick(index, projet)}
          ></ProjetCard>
        ))}
      </div>

      <div id="next" onClick={handleNextClick} className="buttons-right">
        <div className="fleche-droite-haut"></div>
        <div className="fleche-droite-bas"></div>
      </div>
    </section>
  );
};

export default ProjetList;

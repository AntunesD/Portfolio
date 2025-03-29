import React, { useState, useEffect, useRef } from "react";
import outilArray from "../../data/OutilsArray";
import Bulle from "../../components/Bulle/Bulle";
import BullComics from "../../components/BullComics/BullComics";
import "./Competences.scss";

const Accueil: React.FC = () => {
  const [isBullComicsVisible, setIsBullComicsVisible] = useState<boolean[]>(
    Array(outilArray.length).fill(false)
  );

  // Typage de la référence : ici on précise que chaque ref peut être HTMLDivElement ou null
  const bulleRefs = useRef<React.RefObject<HTMLDivElement | null>[]>(
    outilArray.map(() => React.createRef<HTMLDivElement | null>())
  );

  const toggleBullComics = (index: number) => {
    const updatedVisibility = [...isBullComicsVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsBullComicsVisible(updatedVisibility);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    for (let i = 0; i < outilArray.length; i++) {
      const ref = bulleRefs.current[i];
      if (ref?.current && !ref.current.contains(e.target as Node)) {
        setIsBullComicsVisible((prev) =>
          prev.map((_, index) => (index === i ? false : _))
        );
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isBullComicsVisible.includes(true)) {
      const visibleBulleIndex = isBullComicsVisible.indexOf(true);
      const bulleComicsElement = bulleRefs.current[
        visibleBulleIndex
      ].current?.querySelector(".bulle-comics-sur-bulle") as HTMLElement;
      if (bulleComicsElement) {
        const { left, width } = bulleComicsElement.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        if (left + width > windowWidth) {
          bulleComicsElement.style.width = "100px";
        }
      }
    }
  }, [isBullComicsVisible]);

  return (
    <section id="Competences">
      <h2>Compétences</h2>
      <div className="competences">
        {outilArray.map((outil, index) => (
          <div
            key={index}
            className="competence-item"
            ref={bulleRefs.current[index]}
            onClick={() => toggleBullComics(index)}
          >
            <Bulle name={outil.nom} logo={outil.logo} />
            {isBullComicsVisible[index] && (
              <div className="bulle-comics-sur-bulle">
                <BullComics texte={outil.definition} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accueil;

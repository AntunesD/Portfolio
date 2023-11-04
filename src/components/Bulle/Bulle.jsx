import React, { useState, useEffect, useRef } from "react";
import "./Bulle.scss";
import BullComics from "../BullComics/BullComics";

function Bulle({ logo, name, definition }) {
    const [isBullComicsVisible, setIsBullComicsVisible] = useState(false);
    const bulleRef = useRef(null);

    const toggleBullComics = () => {
        setIsBullComicsVisible(!isBullComicsVisible);
    };
    

    const handleOutsideClick = (e) => {
        if (bulleRef.current && !bulleRef.current.contains(e.target)) {
            setIsBullComicsVisible(false);
        }
    };

    useEffect(() => {
        // Ajouter l'écouteur de clic lors du montage du composant
        window.addEventListener("click", handleOutsideClick);

        // Supprimer l'écouteur de clic lors du démontage du composant
        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    /**Pour eviter que le div dépasse de l'écran */
    useEffect(() => {
        if (isBullComicsVisible) {
            // Obtenir la position et la largeur de "bulle-comics-sur-bulle"
            const bulleComicsElement = bulleRef.current.querySelector(".bulle-comics-sur-bulle");
            const { left, width } = bulleComicsElement.getBoundingClientRect();
            
            // Obtenir la largeur de la fenêtre
            const windowWidth = window.innerWidth;

            if (left + width > windowWidth) {
                // Si une partie de "bulle-comics-sur-bulle" dépasse la fenêtre, appliquer un style width
                bulleComicsElement.style.width = "100px";
            }
        }
    }, [isBullComicsVisible]);


    return (
        <div className="bulle" ref={bulleRef} onClick={toggleBullComics}>
            <div className="bulleFond"></div>
            <img src={logo} alt={`Logo ${name}`} />
            <div className="ball bubble"></div>
            <p>{name}</p>
            {isBullComicsVisible && (
                <div className="bulle-comics-sur-bulle">
                    <BullComics texte={definition} />
                </div>
            )}
        </div>
    );
}

export default Bulle;

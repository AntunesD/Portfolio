import './ProjetList.scss';
import React, { useState, useRef } from 'react';
import ProjetData from '../../data/ProjetsData';
import ProjetCard from '../../components/ProjetCard/ProjetCard';

const ProjetList = () => {
    const [selectedIndex, setSelectedIndex] = useState(3); // Index de l'élément "selected"
    const touchStartX = useRef(null);
    const touchDeltaX = useRef(0);
    const carouselRef = useRef(null);

    const moveToSelected = (index) => {
        setSelectedIndex(index);
    };

    const handlePrevClick = () => {
        let newIndex = selectedIndex - 1;
        if (newIndex < 0) {
            newIndex = ProjetData.length - 1;
        }
        moveToSelected(newIndex);
    };

    const handleNextClick = () => {
        let newIndex = selectedIndex + 1;
        if (newIndex >= ProjetData.length) {
            newIndex = 0;
        }
        moveToSelected(newIndex);
    };
    

    const handleCardClick = (index) => {
        if (index !== selectedIndex) {
          moveToSelected(index)
        }
    };
    
    /**pour le swipe */
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
         // Ajouter la classe pour désactiver la transition dans chaque carte
         const cards = carouselRef.current.querySelectorAll('.slider');
         cards.forEach((card) => {
             card.classList.add('no-slider-transition');
         });
    };

    const handleTouchMove = (e) => {
        if (touchStartX.current !== null) {
            const touchDelta = e.touches[0].clientX - touchStartX.current;
            touchDeltaX.current = touchDelta;
            // Appliquer le déplacement en utilisant les variables CSS personnalisées
            document.documentElement.style.setProperty('--touchDelta', touchDelta + 'px');
        }
    };

    const handleTouchEnd = () => {
        if (touchDeltaX.current < -50) {
            handleNextClick();
        } else if (touchDeltaX.current > 50) {
            handlePrevClick();
        }
        // Réinitialiser les valeurs
        touchStartX.current = null;
        touchDeltaX.current = 0;
        // Rétablir la transition
        document.documentElement.style.setProperty('--touchDelta', '0');
        // Rétablir la transition dans chaque carte
        const cards = carouselRef.current.querySelectorAll('.slider');
        cards.forEach((card) => {
            card.classList.remove('no-slider-transition');
        });
    };

    return (
        <section id='Portfolio' >
            <div className='Portfolio_titre'>
            <h2>Portfolio</h2>
            </div>
            <div id="prev" onClick={handlePrevClick} className='buttons-left'>
                <div className='fleche-gauche-haut' ></div>
                <div className='fleche-gauche-bas'></div>
            </div>
            <div id="carousel" ref={carouselRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}  onTouchEnd={handleTouchEnd}>
                {ProjetData.map((projet, index) => (
                    <ProjetCard
                        key={index}
                        place={
                            (index - selectedIndex + ProjetData.length) % ProjetData.length === 0
                                ? 'selected'
                                : (index - selectedIndex + ProjetData.length) % ProjetData.length === 1
                                    ? 'next'
                                    : (index - selectedIndex + ProjetData.length) % ProjetData.length === 2
                                        ? 'nextRightSecond'
                                        : (index - selectedIndex + ProjetData.length) % ProjetData.length === ProjetData.length - 1
                                            ? 'prev'
                                            : (index - selectedIndex + ProjetData.length) % ProjetData.length === ProjetData.length - 2
                                                ? 'prevLeftSecond'
                                                : 'hideRight'
                        }
                        title={projet.title}
                        imgTitle={projet.imgTitle}
                        gif={projet.gif}
                        description={projet.description}
                        outil={projet.outil}
                        cara={projet.caracteristique}
                        gitHub={projet.gitHub}
                        gitPage={projet.gitPages}
                        Click={() => handleCardClick(index)}
                    >

                    </ProjetCard>
                ))}
            </div>
           
            <div id="next"  onClick={handleNextClick} className='buttons-right'>
                <div className='fleche-droite-haut' ></div>
                <div className='fleche-droite-bas'></div>
            </div>
        </section>
    );
};

export default ProjetList;

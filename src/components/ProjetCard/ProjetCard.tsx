import './ProjetCard.scss';
import './CardEffect.scss'

import React, { useRef, useState } from "react";

import { useDispatch } from 'react-redux';




import Bulle from '../Bulle/Bulle';
import { openModal } from '../../redux/reducer/modalSlice';
import outilArray from '../../data/OutilsArray';

interface ProjetCardProps {
  place: string;
  project: any;
  Click: any;
}

const ProjetCard : React.FC<ProjetCardProps> = ({ place, project, Click }) => {


  const outilInfo = outilArray.find((item) => item.nom === project.outil);

  if (!outilInfo) {
    throw new Error(`Outil non trouvé pour le projet ${project.nom}`);
  }

  const logo = outilInfo.logo;
  const Background = outilInfo.background;

  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(openModal({ project }));
  };



  /*pour cardEffect*/

  const cardRef = useRef(null);
  const transitionRef = useRef(null);
  const [styles, setStyles] = useState({
    x: "",
    y: "",
    bgX: "",
    bgY: "",
    rX: "",
    rY: "",
  });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    const transition = transitionRef.current;

    transition.style.transition = "none";

    let w = el.clientWidth;
    let h = el.clientHeight;
    let b = el.getBoundingClientRect();

    let X = (e.clientX - b.left) / w;
    let Y = (e.clientY - b.top) / h;

    let rX = -(X - 0.5) * 26;
    let rY = (Y - 0.5) * 26;

    let bgX = 40 + 20 * X;
    let bgY = 40 + 20 * Y;

    setStyles({
      x: 100 * X + "%",
      y: 100 * Y + "%",
      bgX: bgX + "%",
      bgY: bgY + "%",
      rX: rX + "deg",
      rY: rY + "deg",
    });
  };

  const handleMouseOut = () => {
    const transition = transitionRef.current;

    transition.style.transition = "all 0.5s";
    setStyles({
      x: "",
      y: "",
      bgX: "",
      bgY: "",
      rX: "",
      rY: "",
    });
  };


  return (
    <div className={`slider ${place}`} onClick={Click} >

      <div ref={cardRef} className="cardEffect" onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}>
        <div className="cardEffect__wrapper">
          <div ref={transitionRef} className="cardEffect__3d" style={{
            "--r-x": styles.rX,
            "--r-y": styles.rY
          }}>


            <div className={`bordercard `} >
              <div className={`${Background} projetcard `}>
                <div className="card-header">
                  <h3>
                    <img src={project.imgTitle} alt='Titre du projet' />
                  </h3>
                  <Bulle logo={logo} />
                </div>
                <div className="card-image">
                  <video autoPlay loop muted>
                    <source src={project.gif} type="video/webm" />
                    Votre navigateur ne prend pas en charge la vidéo au format WebM.
                  </video>

                  <p>{project.cara}</p>
                </div>
                <div className="card-details">
                  <h4>Description : </h4>
                  <p>{project.description}</p>
                  <p className='enSavoir' onClick={openModalHandler} >En Savoir <i className="fa-regular fa-circle-xmark"></i></p>
                </div>
              </div>
              {/* <p className='fincard' >©2023 Antunes J. David/Portfolio</p> */}
            </div>

            <div className="cardEffect__layer1" style={{
              "--x": styles.x,
              "--y": styles.y
            }} ></div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjetCard;

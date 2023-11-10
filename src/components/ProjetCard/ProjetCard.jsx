import './ProjetCard.scss';

import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducer/modalSlice';

import outilArray from '../../data/OutilsArray';

import Bulle from '../Bulle/Bulle';

function ProjetCard({ title, place, imgTitle, outil, gif, description, cara, gitHub, gitPage, Click }) {


  const outilInfo = outilArray.find((item) => item.nom === outil);

  const logo = outilInfo.logo;
  const Background = outilInfo.background;

  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(openModal({ title, imgTitle, outil, gitHub, gitPage }));
  };


  return (
    <div className={`slider ${place}`} onClick={Click} >
      <div className={`bordercard `} >
        <div className={`${Background} projetcard `}>
          <div className="card-header">
            <h3>
              <img src={imgTitle} alt='Titre du projet' />
            </h3>
            <Bulle logo={logo}/>
          </div>
          <div className="card-image">
            <video autoPlay loop muted>
              <source src={gif} type="video/webm"/>
                Votre navigateur ne prend pas en charge la vidéo au format WebM.
            </video>

            <p>{cara}</p>
          </div>
          <div className="card-details">
            <h4>Description : </h4>
            <p>{description}</p>
            <p className='enSavoir' onClick={openModalHandler} >En Savoir <i className="fa-regular fa-circle-xmark"></i></p>
          </div>
        </div>
        <p className='fincard' >©2023 Antunes J. David/Portfolio</p>
      </div>
    </div>

  );
}

export default ProjetCard;

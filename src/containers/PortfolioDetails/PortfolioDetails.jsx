import "./PortfolioDetails.scss"
import outilArray from "../../data/OutilsArray";

/**Importation des pages de détails***/
import Ohmyfood from '../../pages/Ohmyfood';
import Kasa from '../../pages/Kasa';
import NinaCarducci from "../../pages/NinaCarducci";
import SSEvents from "../../pages/SSEvents";
import ArgentBank from "../../pages/ArgenBank";
import Travaux from "../../pages/Travaux";

import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/reducer/modalSlice';

function PortfolioDetails() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  let dynamicComponent = null;

  switch (modal.title) {
    case 'Ohmyfood':
      dynamicComponent = <Ohmyfood />;
      break;
    case 'Kasa':
      dynamicComponent = <Kasa />;
      break;
    case 'Nina Carducci':
      dynamicComponent = <NinaCarducci />;
      break;
    case '724 Events':
      dynamicComponent = <SSEvents />;
      break;
    case 'Argent Bank':
      dynamicComponent = <ArgentBank />;
      break;

    default:
      dynamicComponent = <Travaux />;
  }

  const closeModalHandler = () => {
    dispatch(closeModal());
  };
  const outil = modal.outil

  let Background
  let logo;
  const outilUtilisé = outilArray.find((outilItem) => outilItem.nom === outil);

  if (outilUtilisé) {
    logo = outilUtilisé.logo;
    Background = outilUtilisé.background;
  }

  return (
    modal.isOpen && (
      <div className="modal">
        <div className='bord'>
          <div className={`projet ${Background}`}>
            <h2 className="header">
              <img src={logo} alt='outil utilisé' />
              <img src={modal.imgTitle} alt='Titre du projet' />
              <button onClick={closeModalHandler}>{window.innerWidth < 768 ? <i class="fa-solid fa-xmark"></i> : 'Fermer'} </button>
            </h2>
            <div className="contenue">
              {dynamicComponent}
            </div>
            <div className="liens">
              {window.innerWidth < 768 ? (
                <a href={modal.gitHub} target="_blank" rel="noreferrer">
                  <img src="./Logo/github-mark.png" alt="GitHub" />
                </a>
              ) : (
                <a href={modal.gitHub} target="_blank" rel="noreferrer">
                  Liens vers le repo Github
                </a>
              )}

              {modal.gitPage && (
                window.innerWidth < 768 ? (
                  <a href={modal.gitPage} target="_blank" rel="noreferrer">
                    <img className="gitpage" src="./Logo/Github-pages.svg" alt="GitHub Pages" />
                  </a>
                ) : (
                  <a href={modal.gitPage} target="_blank" rel="noreferrer">
                    Liens vers Git Pages
                  </a>
                )
              )}
            </div>

          </div>
          <p className='fincard'>©2023 Antunes J. David/Portfolio</p>
        </div>
      </div>
    )
  );
}

export default PortfolioDetails;

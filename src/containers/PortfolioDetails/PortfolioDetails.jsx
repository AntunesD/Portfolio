import "./PortfolioDetails.scss"
import outilArray from "../../data/OutilsArray";

import Bulle from "../../components/Bulle/Bulle";

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
  const { isOpen, project } = useSelector(state => state.modal);
  const dispatch = useDispatch();
  console.log(project);
  if (!project) {
    return null;
  }

  let dynamicComponent = null;

  switch (project.title) {
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
  const outil = project.outil

  let Background
  let logo;
  const outilUtilisé = outilArray.find((outilItem) => outilItem.nom === outil);

  if (outilUtilisé) {
    logo = outilUtilisé.logo;
    Background = outilUtilisé.background;
  }

  return (
    isOpen && (
      <div className="modal">
        <div className='bord'>
          <div className={`projet ${Background}`}>
            <h2 className="Portfolio_header">
              <Bulle logo={logo} />
              <span><img src={project.imgTitle} alt='Titre du projet' /></span>
              <button onClick={closeModalHandler}>{window.innerWidth < 768 ? <i className="fa-solid fa-xmark"></i> : 'Fermer'} </button>
            </h2>
            <div className="contenue">
              {dynamicComponent}
            </div>
            <div className="liens">
              {window.innerWidth < 768 ? (
                <a href={project.gitHub} target="_blank" rel="noreferrer">
                  <img src="./Logo/github-mark.webp" alt="GitHub" />
                </a>
              ) : (
                <a href={project.gitHub} target="_blank" rel="noreferrer">
                  Liens vers le repo Github
                </a>
              )}

              {project.gitPage && (
                window.innerWidth < 768 ? (
                  <a href={project.gitPage} target="_blank" rel="noreferrer">
                    <img className="gitpage" src="./Logo/Github-pages.svg" alt="GitHub Pages" />
                  </a>
                ) : (
                  <a href={project.gitPage} target="_blank" rel="noreferrer">
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

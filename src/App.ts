/*les element de la page*/
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Accueil from "./containers/Accueil/Accueil";
import ContainerTete from "./containers/ContainerTete/ContainerTete";
import ProjetList from "./containers/ProjetList/ProjetList";
import PortfolioDetails from "./containers/PortfolioDetails/PortfolioDetails";
import Formulaire from "./containers/Formulaire/Formulaire";
import Competence from "./containers/Competences/Competences";

/*Le theme*/

import { useSelector } from 'react-redux';
import "./utils/Dark-theme.scss"

function App() {
  const theme = useSelector(state => state.theme.mode);

  const currentTheme = ` ${theme === 'dark' ? 'body_dark-theme' : 'body_light-theme '}`;

  return (
    <main className={currentTheme}>
      <Header />
      <Accueil />
      <ContainerTete />
      <Competence />
      <ProjetList />
      <PortfolioDetails />
      <Formulaire />
      <Footer />
    </main>
  );
}

export default App;

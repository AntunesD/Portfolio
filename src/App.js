import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Accueil from "./containers/Accueil/Accueil";
import ContainerTete from "./containers/ContainerTete/ContainerTete";
import ProjetList from "./containers/ProjetList/ProjetList";
import PortfolioDetails from "./containers/PortfolioDetails/PortfolioDetails";
import Formulaire from "./containers/Formulaire/Formulaire";
import Competence from "./containers/Competences/Competences";

function App() {
  return (
    <main>
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

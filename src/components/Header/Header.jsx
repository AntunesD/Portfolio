import "./Header.scss";
import MenuMobile from "../MenuMobile/MenuMobile";

function Header() {

  return (
    <header>
      <div className="header" >
        <h1>David J. Antunes</h1>
        {window.innerWidth < 768 ? (
          <MenuMobile />
        ) : (
          <nav>
            <ul>
              <li><a href="#Accueil">Accueil</a></li>
              <li><a href="#Competences">Compétences</a></li>
              <li><a href="#Portfolio" >Portfolio</a></li>
              <li><a href="#Contact" >Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

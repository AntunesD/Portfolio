import "./Header.scss";
import MenuMobile from "../MenuMobile/MenuMobile";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/reducer/themeSlice';

function Header() {

  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.mode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

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
      <div className="theme-toggle" onClick={handleThemeToggle}>
        {theme === 'dark' ? (
          <i className="fa-regular fa-sun"></i>
        ) : (
          <i className="fa-regular fa-moon"></i>
        )}
      </div>
    </header>
  );
}

export default Header;

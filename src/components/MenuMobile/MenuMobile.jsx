import React, { useState } from 'react';
import "./MenuMobile.scss";

function MenuMobile() {
    const [isMenuOpened, setMenuOpened] = useState(false);

    const toggleMenu = () => {
        setMenuOpened(!isMenuOpened);
    };

    return (
        <div className={`headerMenuMobile ${isMenuOpened ? 'menu-opened' : ''}`}>
            <div className="burger-container" onClick={toggleMenu}>
                <div id="burger">
                    <div className="burgerBar topBar"></div>
                    <div className="burgerBar btmBar"></div>
                </div>
            </div>

            <ul className="menu">
                <li className="menu-item"><a href="#Accueil" onClick={toggleMenu} >Accueil</a></li>
                <li className="menu-item"><a href="#Competences" onClick={toggleMenu} >Compétences</a></li>
                <li className="menu-item"><a href="#Portfolio" onClick={toggleMenu} >Portfolio</a></li>
                <li className="menu-item"><a href="#Contact" onClick={toggleMenu} >Contact</a></li>

            </ul>
        </div>
    );
}

export default MenuMobile;

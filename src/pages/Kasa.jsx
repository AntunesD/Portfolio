import "./Pages.scss";
import React, { useEffect } from "react";
import hljs from 'highlight.js';
import outilArray from "../data/OutilsArray";
import Bulle from "../components/Bulle/Bulle";

function Kasa() {

    const filterOutilsParNoms = (nomsRecherche) => {
        return outilArray.filter((outil) => nomsRecherche.includes(outil.nom));
    };

    const nomsRecherche = ["HTML", "CSS", "React", "Sass"];
    const outilsFiltres = filterOutilsParNoms(nomsRecherche);

    useEffect(() => {
        // Activer Highlight.js une fois que le composant est monté
        hljs.highlightAll();
    }, []);
    return (
        <section>
            <div>
                <h2>Créez une application web de location immobilière avec React</h2>
                <b>Competences utilisées :</b>
                <div className="competences-pour-se-projet" >
                    {outilsFiltres.map((outil, index) => (
                        <div key={index}>
                            <Bulle logo={outil.logo} />
                        </div>
                    ))}
                </div>
                <b> Vous trouverez également les liens vers le dépôt Github et le GitPage juste en dessous de cette fenêtre.</b>
                <p>Le projet <b>Kasa</b> est un projet réalisé dans le cadre du parcours de formation
          d'<b>OpenClassrooms</b>. Le but est de réaliser une refonte complète de la plateforme de location d'appartements entre particuliers.
                    L'objectif de ce projet était de moderniser leur site web en remplaçant l'ancienne stack ASP.NET
                    par une stack <b>JavaScript</b> avec <b>Node.js</b> (côté back-end) et <b>React</b> (côté front-end).</p>
                <p> A partir
                    de <a href="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json" target="_blank" rel="noreferrer" >ce fichier JSON </a>
                    et <a href="https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&amp;node-id=0-1&amp;t=xZlEO0AToUcKLwbJ-0" target="_blank" rel="noopener noreferrer">cette maquette sur Figma</a> l'étudiant
                    devait initié un projet <b>React</b> de 0. </p>
                <p>Dans cet article, nous verrons tout ce qui a été mis en place par <b>David J. Antunes</b>.</p>
                <h3>Create-React-app</h3>
                <p>Pour commencer, l'étudiant a dû installer <b>Node.js</b>, puis pour installer <b>Create React App</b> : </p>
                <pre><code className="language-shell hljs"  >npm install -g create-react-app</code></pre>
                <p>Ensuite, initialiser un projet <b>React</b> en utilisant la commande suivante : </p>
                <pre><code className="language-shell hljs">npx create-react-app Kasa</code></pre>
                
                <h3>Les Routes</h3>
                <p>Le projet avait besoin de se déplacer entre les pages, donc <b>React Router</b> a également été installé : </p>
                <pre><code className="language-shell hljs">npm install react-router-dom</code></pre>
                <p>Après avoir créé des fichiers de pages, les routes sont implémentées dans le fichier <b>App.js</b> en important chaque fichier de page :</p>
                <pre>
                    <code className="language-jsx hljs">
                        {`import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route element={<About />} path="/about" />
            <Route element={<Logement />} path="/logement/:id" />
            <Route element={<NotFound />} path="*" />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
`}
                    </code>
                </pre>
                <h3>Les composants réutilisables</h3>
                <p>Lorsque plusieurs éléments se ressemblent sur un site, on peut
                    créer des <b>composants</b> réutilisables, c'est-à-dire des éléments
                    que l'on pourra appeler chaque fois que l'on en aura besoin.</p>

                <h4>Les bannières</h4>
                <div className="imgKasa" ><img src="./Image/kasa/Bannier1.webp" alt="Banniere accueil" />
                    <img src="./Image/kasa/Bannier2.webp" alt="Banniere A propos" /></div>
                <p>Sur la page d'accueil et la page À propos, il y avait la 
                  même <b>bannière</b>, seulement avec une image et un titre différents.
                    Ainsi, un composant a été créé dans lequel il suffisait
                    d'ajouter le titre et la source de l'image grâce à ce que
                    l'on appelle des <b>props</b>.<br />
                    Les <b>props</b> (propriétés) sont des données que l'on place entre
                    les parenthèses des composants <b>React</b> afin de personnaliser
                    leur comportement et leur rendu.</p>
                <pre>
                    <code className="language-jsx hljs">
                        {`function Banner({ image, title }) {
  return (
    <div>
      <img src={image} alt="Decors naturel" />
      <span>{title}</span>
    </div>
  );
}

export default Banner;`}
                    </code>
                </pre>
                <h4>Les cartes</h4>
                <div className="imgKasa" >
                    <img src="./Image/kasa/cartes.webp" alt="cartes de logements" />
                </div>
                <p>Sur la page d'accueil, un certain nombre de cartes devait être
                    affiché en fonction des objets du fichier <b>JSON</b>. La fonction
                    <b> .map</b> permet ce genre d'action en itérant le rendu
                    en fonction du nombre d'objets.<br />
                    Le composant <b>Link</b> a aussi été utilisé pour rediriger vers
                    la bonne page.</p>
                <pre>
                    <code className="language-jsx hljs">
                        {`import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <div>
      {data.map((item) => (
        <Link to={'/logement/$'{item.id}'} key={item.id}>
          <img src={item.cover} alt={item.title} />
          <h2>{item.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
`}
                    </code>
                </pre>
                <h4>Les collapses</h4>
                <div className="imgKasa" >
                    <img src="./Image/kasa/collapse.webp" alt="collapse" />
                </div>
                <p>Pour gérer l'ouverture et la fermeture des éléments de type 'collapse',
                    le <b>hook useState</b> a été utilisé pour créer un état et modifier 
                    la classe <b>CSS</b> de la 'collapse' en associant une fonction au clic sur un bouton,
                    ce qui permet d'inverser l'état de la 'collapse'.<br />
                    Un <b>hook</b> en React est une fonction qui permet aux composants
                    d'ajouter des fonctionnalités et de partager de la logique
                    de manière réutilisable.</p>
                <pre>
                    <code className="language-jsx hljs">
                        {`import { useState } from "react";

const Collapse = ({ title, description }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button onClick={toggleCollapse}>{title}</button>
        <div className={'$'{isCollapsed ? "collapse--closed" : "collapse--open"}'} >
         {description}
        </div>
    </div>
  );
};

export default Collapse;`}
                    </code>
                </pre>
                <h4>Le carousel</h4>
                <div className="imgKasa" >
                    <img src="./Image/kasa/carousel.webp" alt="carousel" />
                </div>
                <p>Pour terminer cet article, voici un élément légèrement plus
                    complexe. S'il y a plus d'une image, nous affichons une barre
                    de navigation. Deux fonctions y sont incluses, une pour
                    afficher l'image précédente et l'autre pour afficher l'image
                    suivante. Les deux fonction intègre une logique permettant
                    un défilement infini.</p>
                <pre>
                    <code className="language-jsx hljs">
                        {`import { useState } from "react";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {images.length > 1 && (
        <nav>
          <ul>
            <li onClick={handlePrevClick}>&lt;</li>
            <li>{currentIndex + 1} / {images.length}</li>
            <li onClick={handleNextClick}>&gt;</li>
          </ul>
        </nav>
      )} 
        <img src={images[currentIndex]} alt={'Vue du logement $'{currentIndex +1}'} />
    </div>
  );
}

export default Slideshow;
`}
                    </code>
                </pre>
                <b>Voilà les principales fonctionnalités implémentées sur ce projet.
                    N'hésitez pas à parcourir le code sur GitHub ou à consulter
                    la démo sur GitHub Pages.</b>
            </div>
        </section>
    )
}

export default Kasa;
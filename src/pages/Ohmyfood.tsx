import "./Pages.scss";
import React, { useEffect } from "react";
import hljs from 'highlight.js';
import outilArray from "../data/OutilsArray";
import Bulle from "../components/Bulle/Bulle";

function Ohmyfood() {

  const filterOutilsParNoms = (nomsRecherche) => {
    return outilArray.filter((outil) => nomsRecherche.includes(outil.nom));
  };

  const nomsRecherche = ["HTML", "CSS", "Sass"];
  const outilsFiltres = filterOutilsParNoms(nomsRecherche);


  useEffect(() => {
    // Activer Highlight.js une fois que le composant est monté
    hljs.highlightAll();
  }, []);

  return (
    <section>
      <div>
        <h2>Améliorez l'interface d'un site mobile avec des animations CSS</h2>
        <b>Competences utilisées :</b>
        <div className="competences-pour-se-projet" >
          {outilsFiltres.map((outil, index) => (
            <div key={index}>
              <Bulle logo={outil.logo} />
            </div>
          ))}
        </div>
        <b> Vous trouverez également les liens vers le dépôt Github et
          le GitPage juste en dessous de cette fenêtre.</b>
        <p><b>Ohmyfood</b> était un projet réalisé dans le cadre du parcours
          de formation d'<b>OpenClassrooms</b> visant à améliorer l'interface
          d'un site mobile avec des animations <b>CSS</b>. Le projet consiste à
          développer un site <b>"mobile first"</b> pour une startup de restauration
          gastronomique qui souhaite s'implanter à Paris. Le site permettra
          aux clients de découvrir les menus des restaurants gastronomiques
          partenaires, de composer leur menu personnalisé et de réserver
          leur repas, afin d'éviter les attentes au restaurant.</p>
        <p>Dans cet article, nous verrons tout ce qui a été mis en place par <b>David J. Antunes</b>.</p>


        <h3>Les animations </h3>
        <p>Ce projet nécessite plusieurs animations, notamment le chargement,
          les likes, l'arrivée des plats dans le menu et la sélection des plats. </p>
        <h4 className="flexrow">Le Loader
          <img className="imgFood" src="./Image/ohmyfood/LoaderGifW.webp" alt="animation du loader" />
        </h4>
        <p>Le Loader a était fait avec des <b>&lt;span&gt;</b> </p>
        <pre>
          <code className="html">
            {` <div class="loader">
      <span>O</span>
      <span>h</span>
      <span>m</span>
      <span>y</span>
      <span>f</span>
      <span>o</span>
      <span>o</span>
      <span>d</span>
      </div>`}
          </code>
        </pre>
        <p>Puis, en utilisant <b>CSS</b> avec <b>Sass</b>, ils ont été animés avec
         un <b>keyframes</b> qui donne une rotation de 360 degrés,
          une <b>perspective</b> pour donner
          plus de réalisme, une <b>origine de transformation</b> pour éviter qu'ils
          ne tournent sur eux-mêmes, et un délai pour chacune des lettres.</p>
        <pre>
          <code className="scss">
            {`@keyframes flip{
  35%{
    transform: rotateX(360deg);
  }
  100%{
    transform: rotatex(360deg);
  }
}
.loader{
  perspective: 700px;
  
  &>span{
    display: inline-block;
    animation:flip 3s infinite linear;
    transform-origin:0 70%;
  
    &:nth-child(2){
      animation-delay: 0.3s;
    }
    
    &:nth-child(3){
      animation-delay: 0.6s;
    }
    
    &:nth-child(4){
      animation-delay: 0.9s;
    }
    
    &:nth-child(5){
      animation-delay: 1.2s;
    }
    
    &:nth-child(6){
      animation-delay: 1.5s
    }
    
    &:nth-child(7){
      animation-delay: 1.8s
    }
    
    &:nth-child(8){
        animation-delay: 2.1s
      }
  }
}`}
          </code>
        </pre>
        <h4 className="flexrow">Les likes
          <img className="imgFood" src="./Image/ohmyfood/LikeGifW.webp" alt="animation like" />

        </h4>
        <p >Les likes ont était fait avec une <b>checkbox</b> qui change de <b>label</b></p>
        <pre>
          <code className="html">
            {`<input type="checkbox" class="jaime" id="jaime">
        <label class="label" for="jaime">
            <span class="jaime__1"><i class="fa-regular fa-heart"></i></span>
            <span class="jaime__2"><i class="fa-solid fa-heart"></i></span>
        </label>`}
          </code>
        </pre>
        <p>Puis, la boîte a été masquée, les éléments ont été superposés en
          utilisant une <b>position absolue</b>, l'<b>opacité</b> a été modifiée, et enfin,
          une <b>transition</b> plus douce a été ajoutée.</p>
        <pre>
          <code className="scss">
            {`.jaime {
  display: none;

  &__1 {
    position: absolute;
    opacity: 1;
    transition: opacity 400ms;
  }

  &__2 {
    opacity: 0;
    transition: opacity 400ms;
  }

  &:checked ~ .label .jaime__coeur {
    opacity: 0;
  }

  &:checked ~ .label .jaime__coeur-rose {
    opacity: 1;
  }
}`}
          </code>
        </pre>
        
        <h4 className="flexrow mobile--flexColumn"> L'arrivée des plats <img className="imgFood" src="./Image/ohmyfood/PlatGifW.webp" alt="animation d'arrivé des plat" /> </h4>
        <p>L'arrivée des plats a été réalisée à l'aide d'une liste <b>&lt;ul&gt;</b> .</p>
        <pre>
          <code className="html">
            {`<ul>
    <li>Premier plat</li>
    <li>Second plat</li>
    <li>Troisième plat</li>
</ul>`}
          </code>
        </pre>
        <p>Puis en <b>CSS</b>, les éléments <b>&lt;li&gt;</b> ont été positionnés à gauche,
          puis avec une animation <b>keyframes</b>, ils ont été ramenés un par un
          à leur position normale, en utilisant également un <b>délai</b> pour chacun
          des éléments <b>&lt;li&gt;</b> , et des fonctions de temporisation
          <b> 'ease-in-out'</b> pour des animations plus douces.</p>
        <pre>
          <code className="scss">
            {`@keyframes showRectangles {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
 
 li {
      opacity: 0;
      transform: translateX(-100%);
      transition: transform ease-in-out, opacity ease-in-out;
    
    &:nth-child(1) {
      animation: showRectangles 2s 0s forwards;
    }
  
    &:nth-child(2) {
      animation: showRectangles 2s 0.2s forwards;
    }
  
    &:nth-child(3) {
      animation: showRectangles 2s 0.3s forwards;
    }
  }`}
          </code>
        </pre>
        
        <h4 className="flexrow mobile--flexColumn" >Les coches<img className="imgFood" src="./Image/ohmyfood/CocheGifW.webp" alt="animation selection des plats" /></h4>
        <p>Pour les coches, il était demandé de les faire apparaître au <b>survol</b> du curseur.</p>
        <pre>
          <code className="html">
            {`<div class="container">
        <h1>Le titre du plat</h1>
        <div class="coche">Le signe</div>
    </div>`}
          </code>
        </pre>
        <p>Donc, ils ont été initiés avec une <b>largeur</b> de 0 et une propriété
          d'<b>overflow</b> pour cacher le contenu, puis, avec une <b>transition</b> lors
          du survol du parent, la <b>largeur</b> a été augmentée. </p>
        <pre>
          <code className="scss">
            {`.container {
  display: flex;

  & .coche {
    background-color: green;
    width: 0px;
    overflow: hidden;
    transition: all 0.7s ease-in-out;
  }
  &:hover {
    & .coche {
      width: 69px;
    }
  }
}
`}
          </code>
        </pre>
        
        <h4 className="flexrow" >Les bouttons<img className="imgFood" src="./Image/ohmyfood/ButtonGifW.webp" alt="animation d'un boutton" /></h4>
        <p>Les boutons devait s'éclairssire légerement au <b>survol</b> et l'ombre de s'épaissir</p>
        <pre>
          <code className="html">
            {` <button>Explorer nos restaurants</button>`}
          </code>
        </pre>
        <p>Pour ce faire, l'attribut <b>:after</b> a été utilisé avec un contenu vide
          et une <b>position absolue</b> à 0 partout pour bien recouvrir l'élément.
          En modifiant l'opacité lors du <b>:hover</b>, l'ombre et le fond s'ajoutent
          légèrement.</p>
        <pre>
          <code className="scss">
            {`$Button-gradient: linear-gradient(
  355deg,
  rgba(147, 86, 220, 1) 0%,
  rgba(255, 121, 218, 1) 100%
);
$Button-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

button {
  background: $Button-gradient;
  border: none;
  box-shadow: $Button-shadow;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    box-shadow: $Button-shadow;
    opacity: 0;
    transition: opacity 300ms ease-out;
  }
  &:hover {
    &::after {
      opacity: 0.15;
    }
  }
}
`}
          </code>
        </pre>
        <h3>Le Mailto</h3>
        <p>Une redirection vers l'adresse <b>e-mail</b> avait été demandée,
          pour la réaliser, <b>'mailto'</b> a été utilisé. </p>
        <pre>
          <code className="html">
            {` <a href="mailto:Contact@ohmyfood.com">Contact</a>`}
          </code>
        </pre>
        <b>Voilà les principales fonctionnalités implémentées sur ce projet.
          N'hésitez pas à parcourir le code sur GitHub ou à consulter la démo
          sur GitHub Pages.</b>
      </div>
    </section>
  )
}

export default Ohmyfood;
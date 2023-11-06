import "./Pages.scss";
import React, { useEffect } from "react";
import hljs from 'highlight.js';
import outilArray from "../data/OutilsArray";
import Bulle from "../components/Bulle/Bulle";

function NinaCarducci() {

  const filterOutilsParNoms = (nomsRecherche) => {
    return outilArray.filter((outil) => nomsRecherche.includes(outil.nom));
  };

  const nomsRecherche = ["HTML", "SEO"];
  const outilsFiltres = filterOutilsParNoms(nomsRecherche);


  useEffect(() => {
    // Activer Highlight.js une fois que le composant est monté
    hljs.highlightAll();
  }, []);

  return (
    <section>
      <div>
        <h2>Optimisez le référencement d'un site de photographe</h2>
        <b>Competences utilisées :</b>
        <div className="competences-pour-se-projet" >
          {outilsFiltres.map((outil, index) => (
            <div key={index}>
              <Bulle logo={outil.logo} />
            </div>
          ))}
        </div>
        <b> Vous trouverez également les liens vers le dépôt Github et le GitPage
          juste en dessous de cette fenêtre.</b>
        <p>Le projet <b>Nina Carducci</b> est un projet réalisé dans le cadre du parcours de formation
          d'<b>OpenClassrooms</b>. Le but visait à améliorer les performances et le 
          référencement <a href="https://ninacarducci.github.io/" target="_blank" rel="noreferrer" > d'un site web</a> pour
           un client fictif, photographe.
          L'objectif est d'optimiser le site pour une meilleure visibilité sur
          les <b>moteurs de recherche</b>.</p>
        <p>Dans cet article, nous verrons tout ce qui a été mis en place par <b>David J. Antunes</b>.</p>
        <h3>Les audits Lighthouse</h3>
        <p className="center">Avant :</p>
        <div className="imgNina">
          <img src="./Image/Nina/Lighthouse1.png" alt="Premier audit" />
        </div>
        <p className="center" >Après :</p>
        <div className="imgNina">
          <img src="./Image/Nina/Lighthouse2.png" alt="Dernier audit" />
        </div>
        <p><b>Google Lighthouse</b> est un outil d'audit de performances et de qualité pour les sites web.
          Il permet d'évaluer la <b>performance</b>, l'<b>accessibilité</b>, les <b>bonnes pratiques</b> en matière de développement web,
          l'optimisation pour les moteurs de recherche (<b>SEO</b>), et la progression des pages web.
          <b> Google Lighthouse</b> génère des rapports détaillés qui aident les développeurs web à identifier
          et à corriger les problèmes potentiels de leurs sites web, afin d'améliorer l'expérience des utilisateurs
          et le classement dans les résultats de recherche.</p>

        <h3>Les images</h3>

        <h4>Le format</h4>
        <p>Pour améliorer la <b>performance</b> du site web, les formats d'image plus
          efficaces tels que le format <b>WebP </b>et le format<b> AVIF</b>,
          qui offrent une meilleure compression et une qualité d'image optimisée,
          on était privilégié</p>

        <h4>La dimension</h4>
        <p>Toujours pour optimiser les <b>performances</b>, l'étudiant s'est assuré que 
        la <b>dimension</b> des images correspondait à celle de leur contenant sur la page, car
          l'utilisation d'une image beaucoup plus grande que nécessaire en termes
          de dimensions en pixels peut entraîner un gaspillage de ressources et
          ralentir le chargement de la page.</p>

        <h4>Les alt</h4>
        <pre>
          <code className="html">
            {`<img src="./assets/images/nina.png" alt="Nina Carducci les bras croisés"></img>`}
          </code>
        </pre>
        <p>Les attributs "<b>alt</b>" dans les balises d'image <b>HTML</b> ont était rajouté pour fournir du texte alternatif
          décrivant le contenu de l'image. Cela est particulièrement important pour
          l'<b>accessibilité</b>, car les lecteurs d'écran et les personnes ayant des problèmes
          de vision dépendent de ces descriptions pour comprendre le contenu visuel.
          Les attributs "<b>alt</b>" rendent également les images plus compréhensibles pour
          les <b>moteurs de recherche</b>, améliorant ainsi le <b>référencement</b>, et ils sont
          utiles lorsque les images ne se chargent pas, affichant le texte alternatif
          à la place.</p>

        <h3>Les contrasts</h3>
        <div className="imgNina_contrast">
          <img src="./Image/Nina/contrast1.png" alt="mauvais contrast" />
          <img src="./Image/Nina/contrast2.png" alt="bon contrast" />
        </div>
        <p> Le <b>contrast</b> des filtres a était modifié. Un bon contraste garantit que le texte se distingue clairement de l'arrière-plan,
          ce qui améliore l'expérience de lecture, facilite la compréhension du contenu
          et garantit une meilleure accessibilité pour les personnes ayant des déficiences visuelles.</p>

        <h3>Les scripts en Defer ou async</h3>
        <div className="imgNina">
          <img src="./Image/Nina/DeferAsync.jpg" alt="schema defer et async" />
        </div>
        <p>Les attributs "<b>defer</b>" et "<b>async</b>" ont était utilisés dans les balises de <b>script</b> HTML
          pour contrôler le moment où un script est téléchargé et exécuté sur une page web.
          Cela peut améliorer les performances de chargement des pages en garantissant que les scripts ne bloquent pas le rendu de la page.</p>
        <p>"<b>Defer</b>" permet de retarder l'exécution du script jusqu'à ce que le document HTML soit complètement analysé</p>
        <p>"<b>async</b>" permet de télécharger et d'exécuter le script en parallèle avec le chargement de la page, sans attendre que le document HTML soit entièrement analysé. </p>

        <h3>Les données structurées</h3>
        <p> Des <b>données structurées</b> ont étaient rajoutés, ce qui aident les
          <b> moteurs de recherche</b> à comprendre le contenu de la page et à améliorer
          la visibilité de l'entreprise dans les résultats de recherche, ce qui peut
          être précieux pour le <b>référencement</b> et l'expérience de l'utilisateur.</p>
        <pre>
          <code className="html">
            {`<script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "Nina Carducci",
        "description": "Découvrez le portfolio de Nina Carducci, photographe professionnelle en Île-de-France.",
        "url": "https://ninacarducci.github.io/",
        "image": "https://ninacarducci.github.io/assets/images/nina_640.webp",
        "telephone": "05 56 67 78 89",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "68 avenue Alsace-Lorraine",
          "addressLocality": "Bordeaux",
          "postalCode": "75001",
          "addressCountry": "France"
        },
        "openingHours": "Mo-Fr 10:00-19:00",
        "priceRange": "$$",
        "sameAs": ["https://www.instagram.com/ninacarducci.photo/?hl=fr"]
      }
    </script>`}
          </code>
        </pre>
        <h3>Les balise Meta</h3>
        <p>Les <b>balises meta</b> spécifiques à Facebook ou Twitter ont étaient rajoutées,
          telles que les balises <b>Open Graph</b> pour Facebook et les balises
          <b> Twitter Card</b> pour Twitter, elles sont essentielles pour contrôler l'apparence
          et les informations partagées lorsque votre contenu est partagé sur ces plateformes
          sociales. Elles permettent de personnaliser les titres, les descriptions,
          les images et d'autres éléments clés, assurant ainsi une meilleure présentation
          de votre contenu sur les réseaux sociaux, ce qui peut stimuler l'engagement 
          et l'interaction de votre public cible.</p>
          <p>Voici un exemple de balise <b>Open Graph</b> :</p>
        <pre>
          <code className="html">
            {`<meta property="og:title" content="Nina Carducci">
<meta property="og:description"
    content="Découvrez le portfolio de Nina Carducci, photographe professionnelle 
    en Île-de-France. Des photographies capturant des moments précieux et des émotions, 
    des services de retouche et d'albums photo personnalisés. Contactez-nous pour des 
    souvenirs inoubliables.">
<meta property="og:image"
    content="https://ninacarducci.github.io/assets/images/nina_640.webp">
<meta property="og:url"
    content="https://ninacarducci.github.io/">
<meta property="og:site_name" content="Nina Carducci">`}
          </code>
        </pre>
        <p>Voici un exemple de balise <b>Twitter Card</b> :</p>
        <pre>
          <code className="html">
            {`<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@nomdutilisateur">
<meta name="twitter:title" content="Nina Carducci">
<meta name="twitter:description"
    content="Découvrez le portfolio de Nina Carducci, photographe professionnelle 
    en Île-de-France. Des photographies capturant des moments précieux et des émotions, 
    des services de retouche et d'albums photo personnalisés. Contactez-nous pour des 
    souvenirs inoubliables.">
<meta name="twitter:image"
    content="https://ninacarducci.github.io/assets/images/nina_640.webp">
<meta name="twitter:url"
    content="https://ninacarducci.github.io/">`}
          </code>
        </pre>
        <h3>Le rapport</h3>
        <p>Et enfin, un rapport d'optimisation a également été livré, retraçant les modifications qui ont été faites.</p>
        <div className="imgNina">
          <img className="imgNina_rapport" src="./Image/Nina/Rapport.png" alt="Rapport d'optimisation"/>
        </div>
        <b>Voilà les principales fonctionnalités implémentées sur ce projet. N'hésitez pas à parcourir le code sur GitHub
          ou à consulter la démo sur GitHub Pages.</b>
      </div>
    </section>
  )
}

export default NinaCarducci;
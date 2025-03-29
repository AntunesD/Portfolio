import "./Pages.scss";
import React, { useEffect } from "react";
import hljs from 'highlight.js';
import outilArray from "../data/OutilsArray";
import Bulle from "../components/Bulle/Bulle";

function SSEvents() {

  const filterOutilsParNoms = (nomsRecherche) => {
    return outilArray.filter((outil) => nomsRecherche.includes(outil.nom));
  };

  const nomsRecherche = ["HTML", "Debug", "Jest"];
  const outilsFiltres = filterOutilsParNoms(nomsRecherche);


  useEffect(() => {
    // Activer Highlight.js une fois que le composant est monté
    hljs.highlightAll();
  }, []);

  return (
    <section>
      <div>
        <h2>Débuggez le site d'une agence d'événementiel</h2>
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
        <p><b>724Events</b> est un projet réalisé dans le cadre du parcours de formation
          d'<b>OpenClassrooms</b>. Le but est de débugger et finaliser le site web
          d'une agence d'événementiel. Le site en question est une vitrine one-page
          dont le design a été validé, mais qui présente quelques <b>bugs</b> nécessitant
          une correction pour assurer une expérience utilisateur optimale.</p>
        <p>Dans cet article, nous verrons tout ce qui a été mis en place par <b>David J. Antunes</b>.</p>

        <h3>Les tableaux commence par 0</h3>

        <h4>Les mois</h4>
        <p>La fonction pour récupérer le nom du mois ne prenait pas en compte
          le fait que les indices des tableaux commencent à partir de 0, ce qui
          entraînait un décalage d'un mois pour chaque date</p>
        <pre>
          <code className="language-jsx hljs">
            {`export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

export const getMonth = (date) => MONTHS[date.getMonth()];`}
          </code>
        </pre>
        <p>L'étudiant a donc rajouté +1 pour ajuster ce décalage.</p>
        <pre>
          <code className="language-jsx hljs">
            {`export const getMonth = (date) => MONTHS[date.getMonth()+1];`}
          </code>
        </pre>

        <h4>Le défilement du carousel</h4>
        <p>Le code d'origine gère la remise à zéro du défilement en comparant
          la taille du tableau avec l'<b>index</b> en cours. Cependant, les indices
          commencent à partir de 0, ce qui signifie que pour effectuer
          cette comparaison correctement, il faudrait soustraire 1 de la taille
          du tableau. Voici l'ancien code :</p>
        <pre>
          <code className="language-jsx hljs">
            {`() => setIndex(index < byDateDesc.length ? index + 1 : 0)`}
          </code>
        </pre>
        <p>Mais l'étudiant a mis en place une approche différente en utilisant
          un calcul avec <b>modulo</b>, permettant également de revenir à l'<b>index </b>
          en prenant le reste de la division : </p>
        <pre>
          <code className="language-jsx hljs">
            {` setIndex((prevIndex) => (prevIndex + 1) % byDateDesc.length);`}
          </code>
        </pre>

        <h3>Les éléments manquant</h3>
        <p>Parfois, le code manquait d'éléments, comme cette <b>fonction</b> sans
          paramètre, ou ce <b>ternaire</b> qui proposait deux réponses égales.</p>
        <div className="imgSS">

          <img src="./Image/77Events/valueManquante1.webp" alt="fonction sans value" />
          <img src="./Image/77Events/valueManquante.webp" alt="ternaire deux meme solution" />
        </div>

        <h3>Les tests</h3>
        <p>Pour tester le site, on peut cliquer une par une sur les fonctionnalités
          pour voir si elles fonctionnent, ou on peut écrire du code qui le fera
          pour nous. C'est dans ce cadre que l'on peut utiliser un <b>framework</b> de test
          comme <b>Jest</b>. </p>
        <p>Dans ce projet, l'étudiant a corrigé du code de test qui ne fonctionnait pas
          et a également créé de nouveaux tests.</p>
        <p>Parmi les tests, il y a des <b>tests unitaires</b> qui permettent de vérifier
          qu'un composant, pris seul, fonctionne correctement. C'est le cas de ce test
          qui a été créé durant le projet pour vérifier si les mois s'affichent
          correctement. </p>
        <pre>
          <code className="language-jsx hljs">
            {`describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            const date = new Date('2022-01-01');
            expect(getMonth(date)).toBe("janvier");
        });`}
          </code>
        </pre>
        <p>Sinon, il y a les <b>tests d'intégration</b> qui permettent de vérifier si
          les composants réagissent correctement les uns avec les autres.
          C'est le cas de ce test qui vérifie si les noms des personnes
          sont bien apparus lors du rendu de la page d'accueil.</p>
        <pre>
          <code className="language-jsx hljs">
            {`describe("When a page is created", () => {
  it("a list a people is displayed", async () => {
    render(<Home />);
    await screen.findByText("Samira");
  });`}
          </code>
        </pre>
        <p>Après avoir lancé le test avec une commande de test, on reçoit
          un rapport qui indique si les tests sont passés ou non.</p>
        <div className="imgSS" >
          <img src="./Image/77Events/Test.webp" alt="Résultat des tests" />
        </div>
        <p>
          <b>Voilà les principales fonctionnalités implémentées sur ce projet. N'hésitez pas
            à parcourir le code sur GitHub ou à consulter la démo sur GitHub Pages.</b>
        </p>
      </div>
    </section>
  )
}

export default SSEvents
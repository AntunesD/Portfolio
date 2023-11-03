import outilArray from "../../data/OutilsArray";
import Bulle from "../../components/Bulle/Bulle";

import "./Competences.scss"

function Accueil() {
    return (
        <section id="Competences">
            <h2>Compétences </h2>
            <div className="competences" >

            {outilArray.map((outil, index) => (
                <Bulle
                key={index}
                name={outil.nom}
                logo={outil.logo}
                />
                ))}
                </div>
        </section>
    )
}

export default Accueil;
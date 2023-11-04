import Tete from "../../components/Tete/Tete";
import BullComics from "../../components/BullComics/BullComics";

import './ContainerTete.scss'

function SectionTete() {
    return (
        <div className="containerTete">
            <div className="position-bulle">
            <BullComics texte="Salut ! Je suis entièrement fait en CSS"/>
            </div>
            <Tete/>
        </div>
    )
}

export default SectionTete;
import Tete from "../../components/Tete/Tete";
import BullComics from "../../components/BullComics/BullComics";

import './ContainerTete.scss'

function SectionTete() {
    return (
        <div className="containerTete">
            <div className="position-bulle">
            <BullComics/>
            </div>
            <Tete/>
        </div>
    )
}

export default SectionTete;
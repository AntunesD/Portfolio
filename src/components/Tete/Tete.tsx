import './tete.scss';

function Tete() {
    return (
        <div className="tete">
            <div className='cheveux' ></div>
            <div className='cheveux-arriere' ></div>
            <div className='peau' ></div>
            <div className="oreille oreille-gauche"></div>
            <div className="oreille oreille-droite"></div>
            <div className="oeil oeil-gauche">
                <div className='eris' >
                    <div className='refletOeil' ></div></div></div>
            <div className="oeil oeil-droit">
                <div className='eris' ><div className='refletOeil' ></div></div></div>
            <div className='nez'></div>
            <div className="bouche"></div>
        </div>
    );
}

export default Tete;

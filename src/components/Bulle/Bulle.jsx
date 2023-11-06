import "./Bulle.scss";


function Bulle({ logo, name }) {

    return (
        <div className="bulle" >
            <div className="bulleFond"></div>
            <img src={logo} alt={`Logo ${name}`} />
            <div className="ball bubble"></div>
            <p>{name}</p>
        </div>
    );
}

export default Bulle;

import "./BullComics.scss"

function BullComics({texte}) {
    return (
        <div className="comic-bubble">
            <p className="comic-text">{texte}</p>
        </div>
    )
}

export default BullComics;
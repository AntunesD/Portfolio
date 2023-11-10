import "./BullComics.scss"
import "../../utils/Dark-theme.scss";
import { useSelector } from 'react-redux';

function BullComics({texte}) {

    const theme = useSelector(state => state.theme.mode);

  // Ajoutez la classe de thème conditionnellement
  const bubbleClass = `comic-bubble ${theme === 'dark' ? 'white-to-primary_dark-theme' : ''}`;


    return (
        <div className={bubbleClass}>
            <p className="comic-text">{texte}</p>
        </div>
    )
}

export default BullComics;
import React from "react"; // Ajout nécessaire pour TypeScript
import "./BullComics.scss";
import "../../utils/Dark-theme.scss";
import { useSelector } from "react-redux";

interface BullComicsProps {
  texte: string;
}

const BullComics: React.FC<BullComicsProps> = ({ texte }) => {
  const theme = useSelector((state: any) => state.theme.mode);

  // Ajoutez la classe de thème conditionnellement
  const bubbleClass = `comic-bubble ${theme === "dark" ? "white-to-primary_dark-theme" : ""}`;

  return (
    <div className={bubbleClass}>
      <p className="comic-text">{texte}</p>
    </div>
  );
};

export default BullComics;

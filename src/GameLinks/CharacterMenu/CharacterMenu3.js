import "/home/marv/react-projects/anime-search/src/GameLinks/CharacterMenu/characterMenu.css";

export default function CharacterMenu3(props) {
  const { luigi, ariel, simba, clicker1, clicker2, clicker3 } = props;

  return (
    <div className="char-wrapper">
      <p>Select Character</p>
      <div>
        <img onClick={clicker1} src={luigi} alt="luigi" />
        <span>Luigi</span>
      </div>
      <div>
        <img onClick={clicker2} src={ariel} alt="ariel" />
        <span>Ariel</span>
      </div>
      <div>
        <img onClick={clicker3} src={simba} alt="simba" />
        <span>Simba</span>
      </div>
    </div>
  );
}

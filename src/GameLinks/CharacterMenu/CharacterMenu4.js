import "/home/marv/react-projects/anime-search/src/GameLinks/CharacterMenu/characterMenu.css";

export default function CharacterMenu4(props) {
  const { gow, magneto, zelda, clicker1, clicker2, clicker3 } = props;

  return (
    <div className="char-wrapper">
      <p>Select Character</p>
      <div>
        <img onClick={clicker1} src={gow} alt="kratos" />
        <span>Kratos</span>
      </div>
      <div>
        <img onClick={clicker2} src={magneto} alt="magneto" />
        <span>Magneto</span>
      </div>
      <div>
        <img onClick={clicker3} src={zelda} alt="zelda" />
        <span>Zelda</span>
      </div>
    </div>
  );
}

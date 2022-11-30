import "/home/marv/react-projects/anime-search/src/GameLinks/CharacterMenu/characterMenu.css";

export default function CharacterMenu(props) {
  const { mario, bandicoot, pikachu, clicker1, clicker2, clicker3 } = props;

  return (
    <div className="char-wrapper">
      <p>Select Character</p>
      <div>
        <img onClick={clicker1} src={mario} alt="mario" />
        <span>Mario</span>
      </div>
      <div>
        <img onClick={clicker2} src={bandicoot} alt="bandicoot" />
        <span>Bandicoot</span>
      </div>
      <div>
        <img onClick={clicker3} src={pikachu} alt="pikachu" />
        <span className="p">Pikachu</span>
      </div>
    </div>
  );
}

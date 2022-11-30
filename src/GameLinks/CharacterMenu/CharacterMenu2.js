import "/home/marv/react-projects/anime-search/src/GameLinks/CharacterMenu/characterMenu.css";

export default function CharacterMenu2(props) {
  const { bart, bowser, shrek, clicker1, clicker2, clicker3 } = props;

  return (
    <div className="char-wrapper">
      <p>Select Character</p>
      <div>
        <img onClick={clicker1} src={bart} alt="bart" />
        <span>Bart</span>
      </div>
      <div>
        <img onClick={clicker2} src={bowser} alt="bowser" />
        <span>Bowser</span>
      </div>
      <div>
        <img className="" onClick={clicker3} src={shrek} alt="shrek" />
        <span>Shrek</span>
      </div>
    </div>
  );
}

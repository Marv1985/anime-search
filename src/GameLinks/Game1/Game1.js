import "/home/marv/react-projects/anime-search/src/GameLinks/Game1/main-game.css";
import g1 from "/home/marv/react-projects/anime-search/src/HomePage/Images/g1.jpg";
import { useState, useEffect } from "react";
import mario from "/home/marv/react-projects/anime-search/src/HomePage/Images/Characters/mario.png";
import pikachu from "/home/marv/react-projects/anime-search/src/HomePage/Images/Characters/pikachu.png";
import bandicoot from "/home/marv/react-projects/anime-search/src/HomePage/Images/Characters/bandicoot.png";
import { Link } from "react-router-dom";
import CharacterMenu from "../CharacterMenu/characterMenu";
import DetailsPopup from "../../DetailsPopup.js/DetailsPopup";
import LeaderBoard from "../../Leaderboard/LeaderBoard";
import { collection, addDoc } from "firebase/firestore";
import db from "../../Firebase";
import { formatter, getLeader, cods } from "../../GameFunctions/GameFunctions";

export default function Game1() {
  const [seconds, setSeconds] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [charMenu, setCharMenu] = useState(false);
  const [correctChar1, setCorrectChar1] = useState(false);
  const [correctChar2, setCorrectChar2] = useState(false);
  const [correctChar3, setCorrectChar3] = useState(false);
  const [pika, setPika] = useState([]);
  const [bandi, setBandi] = useState([]);
  const [mar, setMar] = useState([]);
  const [pop, setPop] = useState(false);
  const [one, setOne] = useState([]);
  const [two, setTwo] = useState([]);
  const [three, setThree] = useState([]);
  const [paused, setPaused] = useState(true);
  const [board, setBoard] = useState(false);
  const [name, setName] = useState("");

  /* firebase state */
  const [lists, setLists] = useState([]);
  const [lists2] = useState([]);
  const [lists3] = useState([]);
  const [lists4] = useState([]);

  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
  //console.log(globalCoords)

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = event => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);


  /* firebase get data */
  useEffect(() => {
    getLeader(db, setLists);
  }, []);

  /* zoom handler */
  const handleClick = (event) => {
    setZoom((current) => !current);
  };

  /* timer */
  useEffect(() => {
    if (paused) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [paused]);

  /* character menu */
  function displayCharacterMenu() {
    setCharMenu(true);
  }

  /* image click functions */
  function clickClick(e) {
    cods(e, setX, setY);
    displayCharacterMenu();
  }

  /* coords (left, right, top, bottom) */
  useEffect(() => {
    /* mario */
    if (
      (x >= 6 && x <= 11 && y >= 67 && y <= 74) ||
      (x >= 3.6 && x <= 8.06 && y >= 68 && y <= 77.2)
    ) {
      setMar(["mar"]);
    }
    /* bandicoot */
    if (
      (x >= 20.3 && x <= 22.3 && y >= 42.8 && y <= 46.2) ||
      (x >= 19 && x <= 21.97 && y >= 41.5 && y <= 45)
    ) {
      setBandi(["bandi"]);
    }
    /* pikachu */
    if (
      (x >= 74.7 && x <= 77.8 && y >= 71.14 && y <= 76.24) ||
      (x >= 77.49 && x <= 80.75 && y >= 72.2 && y <= 77.95)
    ) {
      setPika(["pikachu"]);
    }
  }, [x, y]);

  /* menu selection correct or not */
  function clicker1() {
    if (mar[0] === "mar") {
      setOne(["one"]);
      setCorrectChar1(true);
      setCharMenu(false);
    } else {
      setCharMenu(false);
    }
  }

  function clicker2() {
    if (bandi[0] === "bandi") {
      setTwo(["two"]);
      setCorrectChar2(true);
      setCharMenu(false);
    } else {
      setCharMenu(false);
    }
  }

  function clicker3() {
    if (pika[0] === "pikachu") {
      setThree(["three"]);
      setCorrectChar3(true);
      setCharMenu(false);
    } else {
      setCharMenu(false);
    }
  }

  /* enter details menu appears */
  useEffect(() => {
    if (one[0] === "one" && two[0] === "two" && three[0] === "three") {
      setPop(true);
      setPaused(false);
    }
  }, [one, two, three]);

  /* details component */
  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") {
      return;
    }
    const getLeaders = collection(db, "game1");
    addDoc(getLeaders, { seconds, name })
      .then((response) => {
        console.log(response.id);
      })
      .catch((error) => {
        console.log(error.message);
      });
    getLeader(db, setLists);
    setPop(false);
    setBoard(true);
  }

  /* details component */
  function changes(e) {
    setName(e.target.value);
  }

  return (
    <div className="main-wrap1">
      {/* nav bar */}
      <div className="sec1">
        <div className="zoom characters">
          <img className="rot" src={mario} alt="mario" title="Mario" />
          <div data-testid='mario' className={correctChar1 ? "shade1" : "characters"}></div>
          <img src={bandicoot} alt="crash bandicoot" title="Crash Bandicoot" />
          <div className={correctChar2 ? "shade2" : "characters"}></div>
          <img src={pikachu} alt="pikachu" title="Pikachu" />
          <div className={correctChar3 ? "shade3" : "characters"}></div>
        </div>
        {/* timer and home button */}
        <div className="zoom counter">
          {formatter(seconds)}
          <Link to="/">
            <div className="home">
              <button>Home</button>
            </div>
          </Link>
        </div>

        <div className="zoom zooms">
          <button className="hov" title="Zoom in & out" onClick={handleClick}>
            Zoom
          </button>
        </div>
      </div>

      {/* search area */}
      <div data-testid='zoom' className={zoom ? "zoom-in img" : "sec2"}>
        <img onClick={clickClick} src={g1} alt="game 1" />
      </div>
      {/* character popup menu */}
      {charMenu ? (
        <CharacterMenu
          clicker1={clicker1}
          clicker2={clicker2}
          clicker3={clicker3}
          mario={mario}
          bandicoot={bandicoot}
          pikachu={pikachu}
        />
      ) : null}
      {pop ? (
        <DetailsPopup
          changes={changes}
          name={name}
          handleSubmit={handleSubmit}
          seconds={formatter(seconds)}
        />
      ) : null}
      {board ? (
        <LeaderBoard
          lists={lists}
          lists2={lists2}
          lists3={lists3}
          lists4={lists4}
        />
      ) : null}
    </div>
  );
}

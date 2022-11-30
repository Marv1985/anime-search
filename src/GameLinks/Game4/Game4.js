import "/home/marv/react-projects/anime-search/src/GameLinks/Game4/game4.css";
import g4 from "/home/marv/react-projects/anime-search/src/HomePage/Images/g4.jpeg";
import { useState, useEffect } from "react";
import gow from "/home/marv/react-projects/anime-search/src/HomePage/Images/Characters/gow.png";
import zelda from "/home/marv/react-projects/anime-search/src/HomePage/Images/Characters/zelda.png";
import magneto from "/home/marv/react-projects/anime-search/src/HomePage/Images/Characters/magneto.png";
import { Link } from "react-router-dom";
import CharacterMenu4 from "../CharacterMenu/CharacterMenu4";
import DetailsPopup from "../../DetailsPopup.js/DetailsPopup";
import { collection, addDoc } from "firebase/firestore";
import LeaderBoard from "../../Leaderboard/LeaderBoard";
import db from "../../Firebase";
import { formatter, getLeader4, cods } from "../../GameFunctions/GameFunctions";

export default function Game4() {
  const [seconds, setSeconds] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [charMenu, setCharMenu] = useState(false);
  const [correctChar1, setCorrectChar1] = useState(false);
  const [correctChar2, setCorrectChar2] = useState(false);
  const [correctChar3, setCorrectChar3] = useState(false);
  const [kra, setKra] = useState([]);
  const [mag, setMag] = useState([]);
  const [zel, setZel] = useState([]);
  const [pop, setPop] = useState(false);
  const [one, setOne] = useState([]);
  const [two, setTwo] = useState([]);
  const [three, setThree] = useState([]);
  const [paused, setPaused] = useState(true);
  const [board, setBoard] = useState(false);
  const [name, setName] = useState("");

  /* firebase state */
  const [lists] = useState([]);
  const [lists2] = useState([]);
  const [lists3] = useState([]);
  const [lists4, setLists4] = useState([]);

  /* firebase useEffect */
  useEffect(() => {
    getLeader4(db, setLists4);
  }, []);

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
    /* kratos */
    if (
      (x >= 48.8 && x <= 54.29 && y >= 66.34 && y <= 71.88) ||
      (x >= 48.86 && x <= 54.07 && y >= 66.64 && y <= 72.67)
    ) {
      console.log("kratos");
      setKra(["kra"]);
    }
    /* magneto */
    if (
      (x >= 35.14 && x <= 38 && y >= 60.5 && y <= 63.22) ||
      (x >= 35.1 && x <= 38.4 && y >= 60.45 && y <= 63.47)
    ) {
      console.log("magneto");
      setMag(["mag"]);
    }
    /* zelda */
    if (
      (x >= 66.9 && x <= 70.84 && y >= 65.17 && y <= 70.23) ||
      (x >= 66.49 && x <= 70.51 && y >= 64.49 && y <= 70.79)
    ) {
      console.log("zelda");
      setZel(["zel"]);
    }
  }, [x, y]);

  /* menu selection correct or not */
  function clicker1() {
    if (kra[0] === "kra") {
      setOne(["one"]);
      setCorrectChar1(true);
      setCharMenu(false);
    } else {
      setCharMenu(false);
    }
  }

  function clicker2() {
    if (mag[0] === "mag") {
      setTwo(["two"]);
      setCorrectChar2(true);
      setCharMenu(false);
    } else {
      setCharMenu(false);
    }
  }

  function clicker3() {
    if (zel[0] === "zel") {
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
    const getLeaders = collection(db, "game4");
    addDoc(getLeaders, { seconds, name })
      .then((response) => {
        console.log(response.id);
      })
      .catch((error) => {
        console.log(error.message);
      });
    getLeader4(db, setLists4);
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
          <img src={gow} alt="kratos" title="Kratos" />
          <div className={correctChar1 ? "shade1-4" : "characters"}></div>
          <img src={magneto} alt="magneto" title="Magneto" />
          <div className={correctChar2 ? "shade2-4" : "characters"}></div>
          <img src={zelda} alt="zelda" title="Zelda" />
          <div className={correctChar3 ? "shade3-4" : "characters"}></div>
        </div>
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
      <div data-testid='zoom' className={zoom ? "zoom-in4 img" : "sec2"}>
        <img onClick={clickClick} src={g4} alt="game 4" />
      </div>
      {/* character popup menu */}
      {charMenu ? (
        <CharacterMenu4
          clicker1={clicker1}
          clicker2={clicker2}
          clicker3={clicker3}
          gow={gow}
          magneto={magneto}
          zelda={zelda}
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

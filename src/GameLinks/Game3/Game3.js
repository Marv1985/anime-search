import g3 from "/home/marv/react-projects/anime-search/src/HomePage/Images/g3.png";
import { useState, useEffect } from "react";
import luigi from "/home/marv/react-projects/anime-search/src/HomePage/Images/Characters/luigi.png";
import simba from "/home/marv/react-projects/anime-search/src/HomePage/Images/Characters/simba.png";
import ariel from "/home/marv/react-projects/anime-search/src/HomePage/Images/Characters/ariel.png";
import { Link } from "react-router-dom";
import CharacterMenu3 from "/home/marv/react-projects/anime-search/src/GameLinks/CharacterMenu/CharacterMenu3.js";
import DetailsPopup from "../../DetailsPopup.js/DetailsPopup";
import { collection, addDoc } from "firebase/firestore";
import LeaderBoard from "../../Leaderboard/LeaderBoard";
import db from "../../Firebase";
import { formatter, getLeader3, cods } from "../../GameFunctions/GameFunctions";

export default function Game3() {
  const [seconds, setSeconds] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [charMenu, setCharMenu] = useState(false);
  const [correctChar1, setCorrectChar1] = useState(false);
  const [correctChar2, setCorrectChar2] = useState(false);
  const [correctChar3, setCorrectChar3] = useState(false);
  const [lui, setLui] = useState([]);
  const [ari, setAri] = useState([]);
  const [sim, setSim] = useState([]);
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
  const [lists3, setLists3] = useState([]);
  const [lists4] = useState([]);

  /* firebase useEffect */
  useEffect(() => {
    getLeader3(db, setLists3);
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
    /* luigi */
    if (
      (x >= 11.32 && x <= 12.2 && y >= 80.5 && y <= 83.26) ||
      (x >= 10.56 && x <= 11.21 && y >= 81.77 && y <= 84.5)
    ) {
      console.log("luigi");
      setLui(["lui"]);
    }
    /* ariel */
    if (
      (x >= 76.43 && x <= 78.98 && y >= 89 && y <= 92) ||
      (x >= 77.3 && x <= 79 && y >= 90 && y <= 93.8)
    ) {
      console.log("ariel");
      setAri(["ari"]);
    }
    /* simba */
    if (
      (x >= 67.88 && x <= 70.12 && y >= 18.5 && y <= 20.57) ||
      (x >= 68.47 && x <= 70.47 && y >= 16.42 && y <= 19.28)
    ) {
      console.log("simba");
      setSim(["sim"]);
    }
  }, [x, y]);

  /* menu selection correct or not */
  function clicker1() {
    if (lui[0] === "lui") {
      setOne(["one"]);
      setCorrectChar1(true);
      setCharMenu(false);
    } else {
      setCharMenu(false);
    }
  }

  function clicker2() {
    if (ari[0] === "ari") {
      setTwo(["two"]);
      setCorrectChar2(true);
      setCharMenu(false);
    } else {
      setCharMenu(false);
    }
  }

  function clicker3() {
    if (sim[0] === "sim") {
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
    const getLeaders = collection(db, "game3");
    addDoc(getLeaders, { seconds, name })
      .then((response) => {
        console.log(response.id);
      })
      .catch((error) => {
        console.log(error.message);
      });
    getLeader3(db, setLists3);
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
          <img src={luigi} alt="luigi" title="Luigi" />
          <div className={correctChar1 ? "shade1-3" : "characters"}></div>
          <img src={ariel} alt="ariel" title="Ariel" />
          <div className={correctChar2 ? "shade2-3" : "characters"}></div>
          <img className="sim" src={simba} alt="simba" title="Simba" />
          <div className={correctChar3 ? "shade3-3" : "characters"}></div>
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
      <div data-testid='zoom' className={zoom ? "zoom-in" : "sec2"}>
        <img onClick={clickClick} src={g3} alt="game 3" />
      </div>
      {/* character popup menu */}
      {charMenu ? (
        <CharacterMenu3
          clicker1={clicker1}
          clicker2={clicker2}
          clicker3={clicker3}
          luigi={luigi}
          ariel={ariel}
          simba={simba}
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

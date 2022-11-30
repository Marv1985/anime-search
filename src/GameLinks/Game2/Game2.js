import "/home/marv/react-projects/anime-search/src/GameLinks/Game2/game2.css";
import g2 from "/home/marv/react-projects/anime-search/src/HomePage/Images/g2.png";
import { useState, useEffect } from "react";
import bart from "/home/marv/react-projects/anime-search/src/HomePage/Images/Characters/bart.png";
import shrek from "/home/marv/react-projects/anime-search/src/HomePage/Images/Characters/shrek.png";
import bowser from "/home/marv/react-projects/anime-search/src/HomePage/Images/Characters/bowser.png";
import { Link } from "react-router-dom";
import CharacterMenu2 from "../CharacterMenu/CharacterMenu2";
import DetailsPopup from "../../DetailsPopup.js/DetailsPopup";
import db from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";
import LeaderBoard from "../../Leaderboard/LeaderBoard";
import { formatter, getLeader2, cods } from "../../GameFunctions/GameFunctions";

export default function Game2() {
  const [seconds, setSeconds] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [charMenu, setCharMenu] = useState(false);
  const [correctChar1, setCorrectChar1] = useState(false);
  const [correctChar2, setCorrectChar2] = useState(false);
  const [correctChar3, setCorrectChar3] = useState(false);
  const [bar, setBar] = useState([]);
  const [bows, setBows] = useState([]);
  const [shrk, setShrk] = useState([]);
  const [pop, setPop] = useState(false);
  const [one, setOne] = useState([]);
  const [two, setTwo] = useState([]);
  const [three, setThree] = useState([]);
  const [paused, setPaused] = useState(true);
  const [board, setBoard] = useState(false);
  const [name, setName] = useState("");

  /* firebase state */
  const [lists] = useState([]);
  const [lists2, setLists2] = useState([]);
  const [lists3] = useState([]);
  const [lists4] = useState([]);

  /* firebase useEffect */
  useEffect(() => {
    getLeader2(db, setLists2);
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
    /* bart */
    if (
      (x >= 88 && x <= 89 && y >= 21.8 && y <= 25.7) ||
      (x >= 89.2 && x <= 90.87 && y >= 17.39 && y <= 22.38)
    ) {
      console.log("bart");
      setBar(["bart"]);
    }
    /* bowser */
    if (
      (x >= 76.12 && x <= 79.43 && y >= 77.67 && y <= 90.34) ||
      (x >= 77.38 && x <= 80.95 && y >= 89.25 && y <= 94.04)
    ) {
      console.log("bowser");
      setBows(["bowser"]);
    }
    /* shrek */
    if (
      (x >= 9.28 && x <= 11.35 && y >= 20.22 && y <= 23.97) ||
      (x >= 8.48 && x <= 10.43 && y >= 18.9 && y <= 22.45)
    ) {
      console.log("shrek");
      setShrk(["shrek"]);
    }
  }, [x, y]);

  /* menu selection correct or not */
  function clicker1() {
    if (bar[0] === "bart") {
      setOne(["one"]);
      setCorrectChar1(true);
      setCharMenu(false);
    } else {
      setCharMenu(false);
    }
  }

  function clicker2() {
    if (bows[0] === "bowser") {
      setTwo(["two"]);
      setCorrectChar2(true);
      setCharMenu(false);
    } else {
      setCharMenu(false);
    }
  }

  function clicker3() {
    if (shrk[0] === "shrek") {
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
    const getLeaders = collection(db, "game2");
    addDoc(getLeaders, { seconds, name })
      .then((response) => {
        console.log(response.id);
      })
      .catch((error) => {
        console.log(error.message);
      });
    getLeader2(db, setLists2);
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
        <div className="zoom characters c2">
          <img src={bart} alt="bart" title="Bart" />
          <div className={correctChar1 ? "shade1-2" : "characters"}></div>
          <img className="bowser" src={bowser} alt="bowser" title="Bowser" />
          <div className={correctChar2 ? "shade2-2" : "characters"}></div>
          <img src={shrek} alt="shrek" title="Shrek" />
          <div className={correctChar3 ? "shade3-2" : "characters"}></div>
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
        <img onClick={clickClick} src={g2} alt="game 2" />
      </div>
      {/* character popup menu */}
      {charMenu ? (
        <CharacterMenu2
          clicker1={clicker1}
          clicker2={clicker2}
          clicker3={clicker3}
          bart={bart}
          bowser={bowser}
          shrek={shrek}
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

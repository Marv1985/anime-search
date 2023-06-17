import { Link } from "react-router-dom";
import background from "/home/marv/react-projects/anime-search/src/HomePage/Images/main-background.jpg";
import g1 from "/home/marv/react-projects/anime-search/src/HomePage/Images/g1.jpg";
import g2 from "/home/marv/react-projects/anime-search/src/HomePage/Images/g2.png";
import g3 from "/home/marv/react-projects/anime-search/src/HomePage/Images/g3.png";
import g4 from "/home/marv/react-projects/anime-search/src/HomePage/Images/g4.jpeg";
import cup from "/home/marv/react-projects/anime-search/src/HomePage/Images/podium.png";
import "/home/marv/react-projects/anime-search/src/HomePage/GameSelection/gameselection.css";
import LeaderBoard from "../../Leaderboard/LeaderBoard";
import { useState, useEffect, useRef } from "react";
// import { collection, getDocs, orderBy, query } from "firebase/firestore";
import db from "../../Firebase";
import {
  getLeader,
  getLeader2,
  getLeader3,
  getLeader4,
} from "../../GameFunctions/GameFunctions";

export default function GameSelection() {
  const [leader, setLeader] = useState(false);
  const wrapperRef = useRef(null);
  ClickOutside(wrapperRef);

  /* firebase state */
  const [lists, setLists] = useState([]);
  const [lists2, setLists2] = useState([]);
  const [lists3, setLists3] = useState([]);
  const [lists4, setLists4] = useState([]);

  /* firebase get data */
  useEffect(() => {
    getLeader(db, setLists);
    getLeader2(db, setLists2);
    getLeader3(db, setLists3);
    getLeader4(db, setLists4);
  }, []);

  /* leaderboard click outside div to hide */
  function lead() {
    setLeader(true);
  }
  function ClickOutside(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setLeader(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div className="wrapper">
      <img className="background-image" src={background} alt="background" />
      <div className="App"></div>
      <div className="game-selection">
        {/* navbar */}
        <div className="nav">
          <div className="full-width"></div>
          <div className="full-width title-text">
            <div className="p1">
              <span className="a">A</span>
              <span className="n">N</span>
              <span className="i">I</span>
              <span className="m">M</span>
              <span className="e">E</span>
            </div>
            <div className="p2">
              <span className="ss">S</span>
              <span className="ee">E</span>
              <span className="aa">A</span>
              <span className="rr">R</span>
              <span className="cc">C</span>
              <span className="hh">H</span>
            </div>
          </div>
          <div className="full-width cup">
            <img
              onClick={lead}
              title="Leader Board"
              className="up"
              src={cup}
              alt="cup"
            />
          </div>
        </div>

        {/* games selection */}
        <div className="wrapper2">
          <div className="one">
            <p>Game 1</p>
            <Link to="game1">
              <img src={g1} alt="game1" />
            </Link>
          </div>
          <div className="one">
            <p>Game 2</p>
            <Link to="game2">
              <img src={g2} alt="game2" />
            </Link>
          </div>
          <div className="one">
            <p>Game 3</p>
            <Link to="game3">
              <img src={g3} alt="game3" />
            </Link>
          </div>
          <div className="one">
            <p>Game 4</p>
            <Link to="game4">
              <img src={g4} alt="game4" />
            </Link>
          </div>
        </div>
      </div>

      {/* leaderboard firebase output popup */}
      {leader ? (
        <div ref={wrapperRef}>
          <LeaderBoard
            lists={lists}
            lists2={lists2}
            lists3={lists3}
            lists4={lists4}
          />
        </div>
      ) : null}
    </div>
  );
}

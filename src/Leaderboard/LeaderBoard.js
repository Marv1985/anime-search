import "/home/marv/react-projects/anime-search/src/Leaderboard/leaderboard.css";
import { formatter } from "../GameFunctions/GameFunctions";

export default function LeaderBoard(props) {
  const { lists, lists2, lists3, lists4 } = props;

  return (
    <div className="leaderboard-wrapper">
      <div className="leaderboard">
        <h1>LEADERBOARD</h1>
        <div className="board-output">
          {lists && lists.map((list) => (
          <div key={list.id}
            >
              <p>Game 1</p>
              <p>
                <span className="name-color">Name: </span>
                {list.data.name}
              </p>
              <p>
                <span className="time-color">Time: </span>
                {formatter(list.data.seconds)}
              </p>
            </div>
          ))}
          {lists2 && lists2.map((list2) => (
            <div key={list2.id}>
              <p>Game 2</p>
              <p>
                <span className="name-color">Name: </span>
                {list2.data.name}
              </p>
              <p>
                <span className="time-color">Time: </span>
                {formatter(list2.data.seconds)}
              </p>
            </div>
          ))}
          {lists3 && lists3.map((list3) => (
            <div key={list3.id}>
              <p>Game 3</p>
              <p>
                <span className="name-color">Name: </span>
                {list3.data.name}
              </p>
              <p>
                <span className="time-color">Time: </span>
                {formatter(list3.data.seconds)}
              </p>
            </div>
          ))}
          {lists4 && lists4.map((list4) => (
            <div key={list4.id}>
              <p>Game 4</p>
              <p>
                <span className="name-color">Name: </span>
                {list4.data.name}
              </p>
              <p>
                <span className="time-color">Time: </span>
                {formatter(list4.data.seconds)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

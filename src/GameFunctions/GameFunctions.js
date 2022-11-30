import { collection, getDocs, orderBy, query } from "firebase/firestore";

/* get firebase data */
function getLeader(db, setLists) {
  const getLeaders = query(collection(db, "game1"), orderBy("seconds"));
  getDocs(getLeaders)
    .then((response) => {
      const leaderList = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setLists(leaderList);
    })
    .catch((error) => console.log(error.message));
}

/* get firebase data */
function getLeader2(db, setLists2) {
  const getLeaders = query(collection(db, "game2"), orderBy("seconds"));
  getDocs(getLeaders)
    .then((response) => {
      const leaderList = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setLists2(leaderList);
    })
    .catch((error) => console.log(error.message));
}

/* get firebase data */
function getLeader3(db, setLists3) {
  const getLeaders = query(collection(db, "game3"), orderBy("seconds"));
  getDocs(getLeaders)
    .then((response) => {
      const leaderList = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setLists3(leaderList);
    })
    .catch((error) => console.log(error.message));
}

/* get firebase data */
function getLeader4(db, setLists4) {
  const getLeaders = query(collection(db, "game4"), orderBy("seconds"));
  getDocs(getLeaders)
    .then((response) => {
      const leaderList = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setLists4(leaderList);
    })
    .catch((error) => console.log(error.message));
}

/* timer formatter */
function formatter(t) {
  const d = Number(t);
  /* const h = Math.floor(d / 3600); */
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);
  /* const hDisplay = h > 0 ? `${h.toString().length > 1 ? `${h}` : `${0}${h}`}` : '00'; */
  const mDisplay = m > 0 ? `${m.toString().length > 1 ? `${m}` : `${m}`}` : "0";
  const sDisplay =
    s > 0 ? `${s.toString().length > 1 ? `${s}` : `${0}${s}`}` : "00";
  return `${mDisplay}:${sDisplay}`;
}

/* function for mapping mouse click coordinates  */
function cods(e, setX, setY) {
  let posx = 0;
  let posy = 0;
  let TotalX = document.body.scrollWidth;
  let TotalY = document.body.scrollHeight;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  // console.log("X: " + (posx * 100) / TotalX);
  // console.log("Y: " + (posy * 100) / TotalY);

  setX((posx * 100) / TotalX);
  setY((posy * 100) / TotalY);
}

export { formatter, getLeader, getLeader2, getLeader3, getLeader4, cods };

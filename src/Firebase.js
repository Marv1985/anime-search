import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnS1pPNgob4OP56SmwxzxbZvT3gcv637o",
  authDomain: "anime-search-2bb0b.firebaseapp.com",
  projectId: "anime-search-2bb0b",
  storageBucket: "anime-search-2bb0b.appspot.com",
  messagingSenderId: "135472929375",
  appId: "1:135472929375:web:698632e1646a7468c259ea"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

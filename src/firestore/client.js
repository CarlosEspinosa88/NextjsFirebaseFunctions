import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCL2-STdwCjjI1ylx1GXi-KoGsQf7n77rI",
  authDomain: "nextjs13-experiemental.firebaseapp.com",
  projectId: "nextjs13-experiemental",
  storageBucket: "nextjs13-experiemental.appspot.com",
  messagingSenderId: "130037433175",
  appId: "1:130037433175:web:db563866b7305da960b412",
  measurementId: "G-L2VH75XQXN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./fiebase.config";


const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
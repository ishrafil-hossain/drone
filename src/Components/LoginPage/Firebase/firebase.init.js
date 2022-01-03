import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    return initializeApp(firebaseConfig);
}
export default initializeAuthentication;
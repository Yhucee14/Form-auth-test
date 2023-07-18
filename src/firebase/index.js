import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyACmlupHDvE6SOe45B7-aMa2SCDpAlC_5o",
  authDomain: "preggify-auth-e248e.firebaseapp.com",
  projectId: "preggify-auth-e248e",
  storageBucket: "preggify-auth-e248e.appspot.com",
  messagingSenderId: "754693619876",
  appId: "1:754693619876:web:7cf5f3cba771fcacdca631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
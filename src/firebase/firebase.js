import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa2SRo7Ex-qNEIq0M3Fx5Mprbpx-CCma8",
  authDomain: "quantumasset-a8892.firebaseapp.com",
  projectId: "quantumasset-a8892",
  storageBucket: "quantumasset-a8892.firebasestorage.app",
  messagingSenderId: "749946069887",
  appId: "1:749946069887:web:71e8de1b0587c770f3304a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
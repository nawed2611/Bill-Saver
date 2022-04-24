import React, { useState } from "react";
import useAuth from "../firebaseConfig";
import "../Styles/homestyles.css";

export default function Home() {
  let [status, setStatus] = useState();

  let { google } = useAuth(setStatus);
  return (
    <div className="home">
      <h1>Welcome to Home</h1>
      <button onClick={async () => google()}>Sign In With Google</button>
      <p>{status}</p>
    </div>
  );
}

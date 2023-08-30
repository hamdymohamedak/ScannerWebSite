import React from "react";
import "./App.css";
import appAPK from "./Scanner.apk";

function App() {
  let handleClick = () => {
    window.open("https://qrcgenerator.vercel.app/");
  };
  return (
    <div className="App">
      <div className="context">
        <h1 className="title">QRCode Scanner</h1>
        <h2 className="titleChild">
          Created by: <span>AKCode</span>
        </h2>
        <div className="btns">
          <a className="downloadBtn" href={appAPK} download="Scanner.apk">
            <button>
              Download Scanner <i className="fab fa-android"></i>
            </button>
          </a>
          <button onClick={handleClick}>QRcode Maker Website</button>
        </div>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;

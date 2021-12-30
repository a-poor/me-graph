import React from "react";

import NavBar from "./NavBar";
import AppBody from "./AppBody";

import "./App.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <div style={{ height: "69px", }}/> */}
      <AppBody />
    </div>
  );
}

export default App;

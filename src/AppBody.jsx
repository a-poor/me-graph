import React from "react";
import Split from "react-split";

import AppGraph from "./AppGraph";
import AppDetails from "./AppDetails";

import "./AppBody.css";


export default function AppBody({}) {
  return (
    <div 
      className="app-body" 
      style={{ 
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Split 
        className="split"
        style={{
          height: "100%",
        }}
        sizes={[85, 15]}
        dragInterval={20}
      >
        <AppGraph />
        <AppDetails />
      </Split>
    </div>
  );
}

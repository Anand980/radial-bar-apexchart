import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import RadialBar from "./RadialBar/RadialBar";
import ApexChart from "./RadialBar/lineChart";

function App() {
  return (
    <div className="App">
      <RadialBar />
      {/* <ApexChart /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

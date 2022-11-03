import Button from "./Button";
import React from "react";
import './App.scss';
import Card from './Card';

const App = () => (
  <div className="app">
    <div className="top-bar">
      AxoniusX App (React on Vite)
    </div>
    <div className="main">
      <div className="side-bar-panel">
        <div className="side-bar">
          <div className="side-bar-item">
            Menu Item 1
          </div>
          <div className="side-bar-item">
            Menu Item 2
          </div>
          <div className="side-bar-item">
            Menu Item 3
          </div>
        </div>
      </div>
      <div className="content">
        <div class="cards-panel">
          <Card/>
          <Card/>
          <Card/>
        </div>
        {false && <Button />}
      </div>
    </div>
  </div>
);

export default App;

import Button from "./Button";
import React from "react";
import './App.scss';
import Card from './Card';
import Dashboard from "./Dashboard";

const App = () => (
  <div className="axoniusx-app">
    <div className="axoniusx-top-bar">
      AxoniusX App (React on Vite)
    </div>
    <div className="axoniusx-main">
      <div className="axoniusx-side-bar-panel">
        <div className="axoniusx-side-bar">
          <div className="axoniusx-side-bar-item">
            Menu Item 1
          </div>
          <div className="axoniusx-side-bar-item">
            Menu Item 2
          </div>
          <div className="axoniusx-side-bar-item">
            Menu Item 3
          </div>
        </div>
      </div>
      <Dashboard/>
    </div>
  </div>
);

export default App;

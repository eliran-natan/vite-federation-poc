import Button from "./Button";
import React from "react";
import './App.scss';
import Card from './Card';

const Dashboard = () => (
    <div class="axoniusx-dashboard">
        <h1>Welcome to the AxoniusX Dashboard</h1>
        <h2>Made with React + Vite</h2>
        <div class="axoniusx-card-panel">
            <Card/>
            <Card/>
        </div>
     </div>
);

export default Dashboard;

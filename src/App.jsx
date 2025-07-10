import React from "react";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
    return (
        <div className="app-container">
            <TopBar />
            <div className="main-layout">
                <Sidebar />
                <Dashboard />
            </div>
        </div>
    );
}

export default App;

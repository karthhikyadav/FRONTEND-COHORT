import React from "react";
import LineChart from "./LineChart";
import "../App.css";

const Dashboard = () => (
  <div className="dashboard-main">
    <div className="dashboard-header">
      <h2>Hi, Venky</h2>
    </div>
    <div className="dashboard-balances">
      <div className="balance-card">
        <div>Equity</div>
        <div className="balance-amount">450.10</div>
        <div>Margin Available</div>
      </div>
      <div className="balance-card">
        <div>Commodity</div>
        <div className="balance-amount">0</div>
        <div>Margin Available</div>
      </div>
      <div className="balance-info">
        <div>Margin used 0</div>
        <div>Opening balance 450.10</div>
        <a href="#" className="statement-link">View statement</a>
      </div>
    </div>
    <div className="dashboard-chart">
      <LineChart />
    </div>
  </div>
);

export default Dashboard;

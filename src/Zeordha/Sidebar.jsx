import React from "react";
import "../App.css";

const stocks = [
  { name: "REDINGTON", price: 26.2, change: 8.82, percent: 323.1, color: "red" },
  { name: "CRSIL", price: 3, change: 102.5, percent: 6049.5, color: "green" },
  { name: "MUTHOOTFIN", price: 30, change: -3.5, percent: 2579.7, color: "red" },
  { name: "KIMS", price: 15, change: -12.7, percent: 664.05, color: "green" },
  { name: "APPOLOHOSP", price: 208.5, change: 2.94, percent: 7310, color: "red" },
  { name: "UNIHEALTH-SM", price: -1.1, change: 0.65, percent: 168.3, color: "green" },
  { name: "MAXHEALTH", price: 1, change: 8.6, percent: 1275.1, color: "red" },
];

const Sidebar = () => (
  <div className="sidebar">
    <input className="sidebar-search" placeholder="Search eg: infy bse, nifty fut, index fund" />
    <div className="watchlist-group">
      <div className="watchlist-header">
        <span>Watchlist 1</span>
        <span className="new-group">+ New group</span>
      </div>
      <div className="watchlist-default">Default (7)</div>
      <div className="watchlist-stocks">
        {stocks.map((s) => (
          <div className={`stock-row ${s.color}`} key={s.name}>
            <span>{s.name}</span>
            <span>{s.price}</span>
            <span>{s.change}</span>
            <span>{s.percent}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Sidebar;

import React from "react";
import "../App.css";
import KiteLogo from '../assets/kite-log.svg';


const TopBar = () => (
  <div className="topbar">
    <div className="topbar-left">
      <span className="nifty">NIFTY <span className="green">24813</span> 129.85(0.53%)</span>
      <span className="sensex">SENSEX <span className="green">81589.86</span> 403.42(0.50%)</span>
      <span className="logo"> <img src={KiteLogo} alt="Kite Logo" /> </span>
    </div>
    <div className="topbar-center">
      <a href="#" className="nav-link">Dashboard</a>
      <a href="#" className="nav-link">Orders</a>
      <a href="#" className="nav-link">Holdings</a>
      <a href="#" className="nav-link">Positions</a>
      <a href="#" className="nav-link red">Bids</a>
      <a href="#" className="nav-link">Funds</a>
      <span className="cart">🛒</span>
    </div>
    <div className="topbar-right">
      <button className="login-btn">Login</button>
    </div>
  </div>
);

export default TopBar;

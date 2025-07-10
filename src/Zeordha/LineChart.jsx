import React from "react";

const LineChart = () => (
  <svg width="100%" height="120" viewBox="0 0 400 120">
    <polyline
      fill="none"
      stroke="#6cf"
      strokeWidth="3"
      points="10,100 60,40 110,80 160,30 210,90 260,50 310,100 360,60 390,110"
    />
    <circle cx="10" cy="100" r="4" fill="#6cf" />
    <circle cx="60" cy="40" r="4" fill="#6cf" />
    <circle cx="110" cy="80" r="4" fill="#6cf" />
    <circle cx="160" cy="30" r="4" fill="#6cf" />
    <circle cx="210" cy="90" r="4" fill="#6cf" />
    <circle cx="260" cy="50" r="4" fill="#6cf" />
    <circle cx="310" cy="100" r="4" fill="#6cf" />
    <circle cx="360" cy="60" r="4" fill="#6cf" />
    <circle cx="390" cy="110" r="4" fill="#6cf" />
  </svg>
);

export default LineChart;

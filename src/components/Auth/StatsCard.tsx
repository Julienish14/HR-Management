import React from "react";



const StatsCard: React.FC<> = ({
  title,
  value,
  change,
  icon,
}) => {
  const isPositive = change.startsWith("+");
  const changeColor = isPositive ? "positive" : "negative";

  return (
    <div className="stats-card">
      <div className="stats-header">
        <span className="stats-icon">{icon}</span>
        <span className={`stats-change ${changeColor}`}>{change}</span>
      </div>
      <div className="stats-value">{value}</div>
      <div className="stats-title">{title}</div>
    </div>
  );
};

export default StatsCard;

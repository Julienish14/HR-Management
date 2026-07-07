import React from "react";



const StatsCard: React.FC<> = ({
  title,
  value,
  change,
  icon,
}) => {
  const isPositive = change.startsWith("+");
  const changeColor = isPositive ? "positive" : "negative";



export default StatsCard;

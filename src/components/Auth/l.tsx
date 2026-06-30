// components/Chart.tsx
import React from "react";

interface ChartData {
  month: string;
  value: number;
}

interface ChartProps {
  data: ChartData[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="chart">
      <div className="chart-bars">
        {data.map((item, index) => (
          <div key={index} className="chart-bar-wrapper">
            <div
              className="chart-bar"
              style={{
                height: `${(item.value / maxValue) * 100}%`,
                backgroundColor: `hsl(${index * 40}, 90%, 0%)`,
              }}
            />
            <span className="chart-label">{item.month}</span>
          </div>
        ))}
      </div>
      <div className="chart-values">
        {data.map((item, index) => (
          <span key={index} className="chart-value">
            {item.value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Chart;

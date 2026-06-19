// App.tsx
import React, { useState } from "react";
import "./App.css";

// Components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import RecentActivity from "./components/RecentActivity";
import Chart from "./components/Chart";

// Types
interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
}

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const chartData = [
    { month: "Jan", value: 30 },
    { month: "Feb", value: 45 },
    { month: "Mar", value: 28 },
    { month: "Apr", value: 60 },
    { month: "May", value: 55 },
    { month: "Jun", value: 70 },
  ];
  const recentActivities: Activity[] = [
    {
      id: 1,
      user: "John Doe",
      action: "created a new project",
      time: "2 minutes ago",
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "updated the dashboard",
      time: "15 minutes ago",
    },
    {
      id: 3,
      user: "Bob Johnson",
      action: "completed a task",
      time: "1 hour ago",
    },
    {
      id: 4,
      user: "Alice Brown",
      action: "added a new user",
      time: "3 hours ago",
    },
  ];
  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} />
      <div className={`main-content ${!sidebarOpen ? "expanded" : ""}`}>
        <Header
          title="Dashboard"
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className="content">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                icon={stat.icon}
              />
            ))}
          </div>
          <div className="charts-row">
            <div className="chart-container">
              <h3>Monthly Performance</h3>
              <Chart data={chartData} />
            </div>
            <div className="activity-container">
              <h3>Recent Activity</h3>
              <RecentActivity activities={recentActivities} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

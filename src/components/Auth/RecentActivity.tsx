// components/RecentActivity.tsx
import React from "react";

interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  return (
    <div className="activity-list">
      {" "}
      {activities.map((activity) => (
        <div key={activity.id} className="activity-item">
          <div className="activity-content">
            <span className="activity-user">{activity.user}</span>
            <span className="activity-action">{activity.action}</span>
          </div>
          <span className="activity-time">{activity.time}</span>
        </div>
      ))}
    </div>
  );

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${item.active ? "active" : ""}`}
          >
            <span className="nav-icon">{item.icon}</span>
            {isOpen && <span className="nav-label">{item.label}</span>}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default RecentActivity;

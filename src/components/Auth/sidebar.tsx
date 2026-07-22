// components/Sidebar.tsx
import React from "react";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const menuItems = [
    { icon: "🏠", label: "Dashboard", active: true },
    { icon: "📊", label: "Analytics" },
    { icon: "👥", label: "Users" },
    { icon: "📝", label: "Projects" },
    { icon: "📅", label: "Calendar" },
    { icon: "⚙️", label: "Settings" },
  ];

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
};

export default Sidebar;

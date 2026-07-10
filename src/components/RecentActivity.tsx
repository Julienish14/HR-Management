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
};

export default RecentActivity;

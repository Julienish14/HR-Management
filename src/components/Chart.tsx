import React from "react";

interface RecentActivityProps {}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  return (
    <div className="activity-list">
      {activities.map((activity) => (
        <div key={activity.id} className="activity-item">
          <span className="activity-time">{activity.time}</span>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;

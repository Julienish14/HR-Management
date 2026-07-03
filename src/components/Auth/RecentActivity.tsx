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
  return <div className="activity-list"></div>;
};

export default RecentActivity;

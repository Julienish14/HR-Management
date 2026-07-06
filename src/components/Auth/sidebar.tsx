// components/Sidebar.tsx
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const menuItems = [
    { icon: '🏠', label: 'Dashboard', active: true },
    { icon: '📊', label: 'Analytics' },
    { icon: '👥', label: 'Users' },
    { icon: '📝', label: 'Projects' },
    { icon: '📅', label: 'Calendar' },
    { icon: '⚙️', label: 'Settings' },
  ];

 

export default Sidebar;
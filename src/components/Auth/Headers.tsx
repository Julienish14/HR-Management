import React from "react";

interface HeaderProps {
  title: string;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <h1>{title}</h1>
      </div>
      <div className="header-right">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="header-icons">
          <span className="icon">🔔</span>
          <span className="icon">👤</span>
        </div>
      </div>
    </header>
  );
};
export default Header;

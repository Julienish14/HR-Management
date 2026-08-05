<aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
  <div className="sidebar-header">
    <h2>Dashboard</h2>
  </div>
  <nav className="sidebar-nav">
    {menuItems.map((item, index) => (
      <div key={index} className={`nav-item ${item.active ? "active" : ""}`}>
        <span className="nav-icon">{item.icon}</span>
        {isOpen && <span className="nav-label">{item.label}</span>}
      </div>
    ))}
  </nav>
</aside>;

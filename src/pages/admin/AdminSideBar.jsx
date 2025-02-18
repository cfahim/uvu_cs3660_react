import { useState } from "react";
import { FaFilm, FaRestroom, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const SidebarItem = ({ icon: Icon, label, collapsed, active, onClick }) => (
  <div
    className={`d-flex align-items-center p-2 cursor-pointer rounded ${active ? "bg-primary text-white" : "hover:bg-light"}`}
    onClick={onClick}
    style={{ userSelect: "none" }} // Prevent text selection
  >
    <Icon style={collapsed ? { width: "75%", height: "75%" } : { width: "3em", height: "3em" }} />
    {!collapsed && <span className="px-3">{label}</span>}
  </div>
);

function AdminSideBar({ collapsed, setCollapsed, setActiveItem }) {
  const [activeItem, setActiveState] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActiveState(item); // Updates local state
    setActiveItem(item); // Updates parent (AdminLayout)
  };

  return (
    <aside className="d-flex flex-column justify-content-center" style={{ height: "100%", backgroundColor: "#1d5f39" }}>
      <nav className="mb-4">
        <SidebarItem 
          icon={FaFilm} 
          label="Films" 
          collapsed={collapsed} 
          active={activeItem === "Films"} 
          onClick={() => handleItemClick("Films")} 
        />
        <SidebarItem 
          icon={FaRestroom} 
          label="People" 
          collapsed={collapsed} 
          active={activeItem === "People"} 
          onClick={() => handleItemClick("People")} 
        />
      </nav>
      <div className="d-flex justify-content-between align-items-center mb-6">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="btn btn-primary p-2"
        >
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
    </aside>
  );
}

export default AdminSideBar;

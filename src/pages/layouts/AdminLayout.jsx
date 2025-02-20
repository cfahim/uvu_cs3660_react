import { useState } from "react";
import AdminSideBar from "../admin/AdminSideBar";

function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard"); // Default active page

  return (
    <div className="container-fluid" style={{height:"100%"}}>
        <div className="row" style={{height:"100%"}}>
            <div className={collapsed ? "col-1" : "col-2"}>          
                {/* Sidebar */}
                <AdminSideBar collapsed={collapsed} setCollapsed={setCollapsed} setActiveItem={setActiveItem} />
            </div>
            <div className="col">
                {/* Main Content */}
                <main className="d-flex flex-column flex-grow-1 justify-content-center align-items-center" style={{height:"100%"}}>
                    {typeof children === "function" ? children(activeItem) : children}
                </main>
            </div>
        </div>   
    </div>
  );
}

export default AdminLayout;
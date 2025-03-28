import { useContext } from "react";
import MainLayout from "../layouts/MainLayout";
import { AuthContext } from "../../context/AuthContext";
import AdminLayout from "../layouts/AdminLayout";
import SWAPIFilms from "../swapi/SWAPIFilms";

const Admin = () => {
  const { user } = useContext(AuthContext);

  const renderContent = (activeItem) => {
    switch (activeItem) {
      case "Films":
        return <SWAPIFilms />;
      case "People":
        return <h2>🧑 People Management</h2>;
      default:
        return <h2>📊 Welcome {user.name} to the Admin Panel</h2>;
    }
  };

  return (
    <MainLayout title="Admin | MyPage" showMain={false}>
      <AdminLayout>
        {(activeItem) => renderContent(activeItem)}
      </AdminLayout>
    </MainLayout>
  );
};

export default Admin;

import { useContext, React } from "react";
import MainLayout from "../layouts/MainLayout";
import { AuthContext } from "../../context/AuthContext";

const Admin = () => {
    const { token } = useContext(AuthContext);

    return (
        <MainLayout title="Admin | MyPage">
            <h2>Welcome {token.username}</h2>
        </MainLayout>
    );
};

export default Admin;

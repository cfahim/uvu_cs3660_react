import MainNav from "../MainNav";
import MainFooter from "../MainFooter";

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainNav />
      {children}
      <MainFooter />
    </div>
  );
};

export default MainLayout;
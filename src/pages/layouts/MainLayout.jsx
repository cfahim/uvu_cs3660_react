import React, { useEffect } from "react";
import MainNav from "../MainNav";
import MainFooter from "../MainFooter";

const MainLayout = ({ children, title }) => {
    // useEffect is a hook that allows you to run side effects in function components
    // Side effects are things like data fetching, subscriptions, or manually changing the DOM
    useEffect(() => {
      if (title) {
        document.title = title; // Set the page title dynamically
      }
    }, [title]); // Re-run when `title` changes

  return (
    <div className="d-flex flex-column vh-100">
      <MainNav />
      <main className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
        {children}
      </main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
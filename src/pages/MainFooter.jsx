import React from "react";

const MainFooter = () => {
    return (
        <footer className="bg-dark text-white text-center py-3"
        style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
        }}>
            <p className="mb-0">&copy; {new Date().getFullYear()} My Website</p>
        </footer>
    );
};

export default MainFooter;

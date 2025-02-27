import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            token = JSON.parse(token);
            if(token.expiration < new Date().getTime())
                logout(); // Remove token if expired
            else
            {
                setIsLoggedIn(true); // Convert token existence to boolean
                setToken(token);
            }
        }        
    }, []);

    const login = async (username, password) => {
        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });
    
            if (!response.ok) {
                throw new Error("Invalid credentials");
            }
    
            // If login is successful, store a fake token with expiration
            const now = new Date();
            const token = {
                username,
                expiration: now.setHours(now.getHours() + 1) // Expires in 1 hour
            };
    
            localStorage.setItem("token", JSON.stringify(token));
            setIsLoggedIn(true);
            setToken(token);
            return true;
        } catch (error) {
            console.error("Login failed:", error);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

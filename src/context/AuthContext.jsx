import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // Install via: npm install jwt-decode
import bffService from "../services/bffService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    const checkToken = async () => {
        let token = localStorage.getItem("token");
    
        if (token) {
            try {
                const response = await fetch("http://localhost:8000/api/login/verify", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ jwt_token: token })
                });
                if (!response.ok) {
                    throw new Error("Invalid token");
                }
                setIsLoggedIn(true);
                const tokendecode = jwtDecode(token);
                setUser(tokendecode.user);
                setToken(token);
            } catch (error) {
                console.error("Invalid token:", error);
                logout(); // ✅ Invalid token, remove it
            }
        }
    };

    useEffect(() => {
        checkToken();

        const interval = setInterval(() => {
            checkToken();
        }, 5 * 60 * 1000); // 5 minutes

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const login = async (username, password) => {
        try {
            const response = await bffService.login(username, password);           
            if (response.success === false) {
                throw new Error("Login failed unexpectedly");
            }
            
            const token = jwtDecode(response.jwt_token);            
            localStorage.setItem("token", response.jwt_token);
            setUser(token.user);
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
        <AuthContext.Provider value={{ isLoggedIn, token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

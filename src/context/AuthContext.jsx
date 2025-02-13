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

    const login = (username, password) => {
        const now = new Date();
        const fakeToken = { username, password, expiration: now.setMinutes(now.getMinutes() + 1) };
        localStorage.setItem("token", JSON.stringify(fakeToken));
        setIsLoggedIn(true);
        setToken(fakeToken);
        return true;
    }

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

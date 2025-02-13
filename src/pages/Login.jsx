import React, { useState, useEffect, useContext } from "react";
import MainLayout from "./layouts/MainLayout";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { isLoggedIn, login } = useContext(AuthContext);
    const navigate = useNavigate();

    // Redirect if token exists
    useEffect(() => {        
        if (isLoggedIn) {            
            navigate("/admin");
        }
    }, [isLoggedIn, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Both fields are required!");
            return;
        }

        // Fake authentication (replace with API call) with expiration time of 1 hour
        if(login(email, password))
            navigate("/admin"); // Redirect after login
        else
            setError("Invalid email or password!");
    };

    return (
        <MainLayout title="Login | MyPage">
            <div className="card shadow-lg col-sm-6 col-md-3 p-4" >
                <h3 className="text-center mb-4">Login</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#006341" }}>
                        Login
                    </button>
                </form>
                <p className="text-center mt-3">
                    <a href="#" className="text-decoration-none">Forgot Password?</a>
                </p>
            </div>
        </MainLayout>
    );
}

export default Login;

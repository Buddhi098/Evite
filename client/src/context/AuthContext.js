import { createContext, useContext, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const login = async ({ user , setError}) => {
        try {
            const response = await api.post("/public/user/login", user);
            console.log(response.data);

            if (response.data.login_status=="success") {
                localStorage.setItem("token", response.data.access_token);
                localStorage.setItem("id", response.data.id);
                navigate("/dashboard");
            }
        } catch (error) {
            console.error(error);
            localStorage.removeItem("token");
            setError("Invalid email or password");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        navigate("/login"); // Redirect to the login page after logout
    };

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    // Lấy thông tin user từ localStorage
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = async (inputs) => {
        // TO DO
        const res = await axios.post('http://localhost:8080/api/auth/login', inputs, {
            withCredentials: true,
        });

        setCurrentUser(res.data);
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return <AuthContext.Provider value={{ login, currentUser, setCurrentUser }}>{children}</AuthContext.Provider>;
};

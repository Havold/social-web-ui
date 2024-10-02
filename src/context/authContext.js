import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { makeRequest } from '../axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [hasAccessToken, setHasAccessToken] = useState(JSON.parse(localStorage.getItem('hasAccessToken')) || null);

    const checkAccessToken = async () => {
        const token = await makeRequest.get('/auth/check-token').then((res) => {
            return res.data;
        });
        setHasAccessToken(token);
    };

    checkAccessToken();

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
        if (hasAccessToken) {
            localStorage.setItem('hasAccessToken', JSON.stringify(hasAccessToken));
            localStorage.setItem('user', JSON.stringify(currentUser));
        } else {
            if (localStorage.getItem('user')) localStorage.removeItem('user');
            localStorage.setItem('hasAccessToken', JSON.stringify(hasAccessToken));
        }
    }, [hasAccessToken, currentUser]);

    return (
        <AuthContext.Provider value={{ login, currentUser, setCurrentUser, hasAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};

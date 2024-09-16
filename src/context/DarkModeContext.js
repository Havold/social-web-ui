import { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    // Lấy thông tin darkMode từ localStorage
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') || false);

    // Hàm để chuyển mode
    const toggle = () => {
        setDarkMode(!darkMode);
    };

    // Cập nhật darkMode vào localStorage
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return <DarkModeContext.Provider value={{ darkMode, toggle }}>{children}</DarkModeContext.Provider>;
};

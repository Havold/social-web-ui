import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    // Lấy thông tin user từ localStorage
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = () => {
        setCurrentUser({
            name: 'Son Tung',
            email: 'sontungmtp@gmail.com',
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/c14a92a8e2e23babececab98c0f67fac.jpeg?lk3s=a5d48078&nonce=50408&refresh_token=ea762ee039d145a7273a84edb5c369c8&x-expires=1726660800&x-signature=WlQcUlb%2BlgRTT2EsR0ywSnX2mAg%3D&shp=a5d48078&shcp=81f88b70',
            cover: 'https://i.ytimg.com/vi/abPmZCZZrFA/maxresdefault.jpg',
        });
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return <AuthContext.Provider value={{ login, currentUser }}>{children}</AuthContext.Provider>;
};

import LeftBar from './components/LeftBar/LeftBar';
import NavBar from './components/NavBar/NavBar';
import RightBar from './components/RightBar/RightBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import './styles.scss';
import { useContext, useState } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UpdateModal from './components/UpdateModal/UpdateModal';

function App() {
    const { hasAccessToken } = useContext(AuthContext);
    const { darkMode } = useContext(DarkModeContext);
    const queryClient = new QueryClient();
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const ProtectedRoute = ({ children }) => {
        if (!hasAccessToken) {
            return <Navigate to="/login" />;
        }

        return children;
    };

    const Layout = () => {
        return (
            <QueryClientProvider client={queryClient}>
                <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
                    <NavBar />
                    <div style={{ display: 'flex' }}>
                        <LeftBar />
                        <div style={{ flex: 6 }}>
                            <Outlet />
                        </div>
                        <RightBar />
                    </div>
                    {showUpdateModal ? (
                        <UpdateModal showUpdateModal={showUpdateModal} setShowUpdateModal={setShowUpdateModal} />
                    ) : (
                        <></>
                    )}
                </div>
            </QueryClientProvider>
        );
    };

    const router = createBrowserRouter([
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/register',
            element: <Register />,
        },
        {
            path: '/',
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/profile/:id',
                    element: <Profile showUpdateModal={showUpdateModal} setShowUpdateModal={setShowUpdateModal} />,
                },
            ],
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

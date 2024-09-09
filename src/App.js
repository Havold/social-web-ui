import LeftBar from "./components/LeftBar/LeftBar";
import NavBar from "./components/NavBar/NavBar";
import RightBar from "./components/RightBar/RightBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";

function App() {
  const currentUser = true;

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }

    return children;
  }

  const Layout = () => {
    return (
      <div className="layout">
        <NavBar />
        <div style={{display: 'flex'}}>
          <LeftBar />
          <div style={{flex: 6}}><Outlet /></div>
          <RightBar />
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: '/',
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [{
        path: '/',
        element: <Home />
      },
      {
        path: '/profile/:id',
        element: <Profile />
      }
    ]
    }
  ]);
  return <div className="App">
    <RouterProvider router={router}/>
  </div>;
}

export default App;

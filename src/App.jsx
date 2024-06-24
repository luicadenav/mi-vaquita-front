import { useRoutes, BrowserRouter, useLocation } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Friends from "./pages/Friends";
import Expenses from "./pages/Expenses";
import Groups from "./pages/Groups";
import Login from "./pages/Login";
import GroupDetail from "./pages/GroupDetail";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const routes = useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Friends />
        </ProtectedRoute>
      ),
    },
    { path: "/login", element: <Login /> },
    {
      path: "/friends",
      element: (
        <ProtectedRoute>
          <Friends />
        </ProtectedRoute>
      ),
    },
    {
      path: "/expenses",
      element: (
        <ProtectedRoute>
          <Expenses />
        </ProtectedRoute>
      ),
    },
    {
      path: "/groups",
      element: (
        <ProtectedRoute>
          <Groups />
        </ProtectedRoute>
      ),
    },
    {
      path: "/groups/:id",
      element: (
        <ProtectedRoute>
          <GroupDetail />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <>
      {!isLoginPage && <Header />}
      {routes}
    </>
  );
};

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Root;

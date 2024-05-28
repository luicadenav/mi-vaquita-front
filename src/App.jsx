import { useRoutes, BrowserRouter, useLocation } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Friends from "./pages/Friends";
import Expenses from "./pages/Expenses";
import Groups from "./pages/Groups";
import Login from "./pages/Login";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const routes = useRoutes([
    { path: "/", element: <Friends /> },
    { path: "/login", element: <Login /> },
    { path: "/friends", element: <Friends /> },
    { path: "/expenses", element: <Expenses /> },
    { path: "/groups", element: <Groups /> },
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

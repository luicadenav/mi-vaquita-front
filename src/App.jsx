import { useRoutes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Friends from './pages/Friends';
import Expenses from './pages/Expenses';
import Groups from './pages/Groups';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Friends /> },
    { path: '/friends', element: <Friends /> },
    { path: '/expenses', element: <Expenses /> },
    { path: '/groups', element: <Groups /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <AppRoutes />
      </>
    </BrowserRouter>
  );
}

export default App;

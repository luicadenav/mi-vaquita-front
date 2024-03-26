import { useState } from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/friends', element: <Friends /> },
    { path: '/expenses', element: <Expenses /> },
    { path: '/groups', element: <Groups /> },
  ]);
};

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
      </>
    </BrowserRouter>
  );
}

export default App;

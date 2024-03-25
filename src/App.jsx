import { useState } from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
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
        <p>hola</p>
      </>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.list_container}>
        <li>
          <NavLink to='/friends'>Amigos</NavLink>
        </li>
        <li>
          <NavLink to='/Expenses'>Gastos</NavLink>
        </li>
        <li>
          <NavLink to='/groups'>Grupos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

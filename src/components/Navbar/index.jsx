import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.list_container}>
        <li>Amigos</li>
        <li>Gastos</li>
        <li>Grupos</li>
      </ul>
    </nav>
  );
};

export default Navbar;

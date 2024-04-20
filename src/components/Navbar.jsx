import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className='flex justify-between mt-6'>
        <li>
          <NavLink
            to='/friends'
            className={({ isActive }) =>
              isActive ? 'text-secondary-yellow font-bold' : ''
            }
          >
            Amigos
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Expenses'
            className={({ isActive }) =>
              isActive ? 'text-secondary-yellow font-bold' : ''
            }
          >
            Gastos
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/groups'
            className={({ isActive }) =>
              isActive ? 'text-secondary-yellow font-bold' : ''
            }
          >
            Grupos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

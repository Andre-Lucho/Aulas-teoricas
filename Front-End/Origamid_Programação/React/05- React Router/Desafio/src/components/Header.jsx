import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.scss';

const Header = () => {
  return (
    <nav className="header-container">
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'link-ativo' : 'link-inativo'
            }
          >
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contato"
            className={({ isActive }) =>
              isActive ? 'link-ativo' : 'link-inativo'
            }
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

{
  /* <button onClick={(e) => handleFetch(e)}></button> */
}

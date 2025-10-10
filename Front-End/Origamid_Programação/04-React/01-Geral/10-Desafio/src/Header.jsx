import React from 'react';

const Header = ({ href, tagName }) => {
  return (
    <header>
      <li>
        <a href={href}>{tagName}</a>
      </li>
    </header>
  );
};

export default Header;

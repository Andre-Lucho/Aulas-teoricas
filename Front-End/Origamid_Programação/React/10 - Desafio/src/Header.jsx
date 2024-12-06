const Header = ({ cl, href, tagName }) => {
  return (
    <>
      <li className={cl}>
        <a href={href}>{tagName}</a>
      </li>
    </>
  );
};

export default Header;

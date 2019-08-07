import React, { useState } from 'react';
import { Link } from 'react-scroll';

import NavButton from './NavButton';

import styles from './styles.scss';

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    setMenuVisible(!menuVisible);
  };

  const MenuLink = ({ label, name }) => (
    <li>
      <Link
        onClick={handleClick}
        activeClass="active"
        to={name}
        spy
        smooth="easeInOutQuad"
        duration={500}
        offset={-80}
      >
        <span>{label}</span>
      </Link>
    </li>
  );

  const renderMenu = () => {
    if (!menuVisible) {
      return null;
    }

    return (
      <div className={styles.menuContainer}>
        <div className={styles.menu}>
          <ul>
            <MenuLink label="About" name="about" />
            <MenuLink label="Speakers" name="speakers" />
            <MenuLink label="Events" name="events" />
            <MenuLink label="FAQs" name="faq" />
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderMenu()}
      <NavButton onClick={handleClick} menuVisible={menuVisible} />
    </>
  );
};

export default Nav;

import React, { useState } from 'react';
import { Link } from 'react-scroll';

import NavButton from './NavButton';

import styles from './styles.scss';

const Nav = ({ format: { type, items } }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    switch (type) {
      case 'BACK_HOME': {
        window.location = `/${window.location.search}`;
        break;
      }
      case 'BASIC_NAV':
      default: {
        setMenuVisible(!menuVisible);
        break;
      }
    }
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
            {(items || []).map(item => (
              <MenuLink label={item.label} name={item.name} />
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.nav}>
      {type === 'BASIC_NAV' && renderMenu()}
      <NavButton type={type} onClick={handleClick} menuVisible={menuVisible} />
    </div>
  );
};

export default Nav;

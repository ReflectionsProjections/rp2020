import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

const NavButton = ({ onClick, menuVisible, type }) => {
  let icon = '';
  switch (type) {
    case 'BACK_HOME': {
      icon = 'fa-home';
      break;
    }
    case 'BASIC_NAV':
    default: {
      icon = 'fa-bars';
      break;
    }
  }
  return (
    <button
      type="button"
      className={classNames(styles.navButton, {
        [styles.navButtonToggled]: menuVisible
      })}
      onClick={onClick}
    >
      <i
        className={classNames(
          'fas',
          { [icon]: !menuVisible },
          { 'fa-times': menuVisible },
          styles.navIcon
        )}
      />
    </button>
  );
};

export default NavButton;

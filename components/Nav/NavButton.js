import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

const NavButton = ({ onClick, menuVisible }) => (
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
        { 'fa-bars': !menuVisible },
        { 'fa-times': menuVisible },
        styles.navIcon
      )}
    />
  </button>
);

export default NavButton;

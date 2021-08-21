import React from 'react';

import styles from './Header.module.css';
import withMousePosition from '../../hoc/withMousePosition';

const Header = (props) => {
  const paralaxStyle = {
    transform: `translate(
                ${props.mouseX / -50}px,
                ${props.mouseY / 110}px
                )`,
  };

  return (
    <header className={`${styles.header}`}>
      <div className={styles.headerImage} style={paralaxStyle}></div>
      <div className='text-light'></div>
      {props.children}
    </header>
  );
};

export default withMousePosition(Header);

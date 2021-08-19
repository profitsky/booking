import React from 'react';

import SearchBar from './SearchBar/';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} +  container`}>
      <SearchBar />
    </header>
  );
};

export default Header;

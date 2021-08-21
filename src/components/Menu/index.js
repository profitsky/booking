import React, { useContext } from 'react';
import styles from './Menu.module.css';
import AuthContext from '../../context/authContext';

const Menu = () => {
  const auth = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    auth.login();
  };

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <div className={`${styles.menuContainer} breadcumb`}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href='3'>Home</a>
        </li>
        {auth.isAuthenticated ? (
          <li className={styles.menuItem}>
            <a href='3' onClick={logout}>
              Wyloguj
            </a>
          </li>
        ) : (
          <li className={styles.menuItem}>
            <a href='3' onClick={login}>
              Zaloguj
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;

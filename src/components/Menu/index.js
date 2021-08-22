import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import useAuth from '../../hooks/useAuth';

function Menu() {
  const [auth, setAuth] = useAuth();

  const login = (e) => {
    e.preventDefault();
    setAuth(true);
  };
  const logout = (e) => {
    e.preventDefault();
    setAuth(false);
  };

  return (
    <div className={`${styles.menuContainer} breadcrumb`}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to='/'>Home</Link>
        </li>
        {auth ? (
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
}

export default Menu;

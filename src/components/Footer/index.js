import React, { useContext } from 'react';
import ThemeContex from '../../context/themeContext';

const Footer = (props) => {
  const theme = useContext(ThemeContex);
  return (
    <div className={`text-center m-3 text-${theme.color}`}>Booking 2021</div>
  );
};

export default Footer;

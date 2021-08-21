import React, { useContext } from 'react';
import ThemeContex from '../../context/themeContext';

const LoadingIcon = (props) => {
  const theme = useContext(ThemeContex);

  return (
    <div className='d-flex justify-content-center'>
      <div className={`spinner-border m-5 text-${theme.color}`} role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default LoadingIcon;

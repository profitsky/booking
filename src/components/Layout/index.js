import React from 'react';
import Fragment from '../../hoc/';

const Layout = (props) => {
  return (
    <Fragment>
      <div>{props.header}</div>
      <div className='container'>{props.menu}</div>
      <div className='container'>{props.content}</div>
      <div>{props.footer}</div>
    </Fragment>
  );
};

export default Layout;

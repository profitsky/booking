import React from 'react';

import styles from './Hotel.module.css';
import img from '../../../assets/images/hotel.jpg';

function Hotel() {
  return (
    <div className={`row ${styles.hotel}`}>
      <div className='col-4'>
        <img src={img} alt='hotel' className='img-fluid' />
      </div>
      <div className='col-8'>
        <div className='row'>
          <div className='col'>
            <p>Tytuł</p>
            <p>miasto</p>
          </div>
          <div className='col'>
            <p>Ocena: 8.3</p>
            <p>Opinie: 233</p>
          </div>
        </div>
      </div>
      <div className='col-12'>
        <p>opis</p>
        <a href='3' className='btn btn-primary'>
          Pokaż
        </a>
      </div>
    </div>
  );
}

export default Hotel;

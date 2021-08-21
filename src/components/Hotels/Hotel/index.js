import React from 'react';

import styles from './Hotel.module.css';
import img from '../../../assets/images/hotel.jpg';
import PropTypes from 'prop-types';

function Hotel(props) {
  return (
    <div className={`card ${styles.hotel}`}>
      <div className='card-body'>
        <div className='row'>
          <div className='col-4'>
            <img src={img} alt='' className='img-fluid img-thumbnail' />
          </div>
          <div className='col-8'>
            <div className='row'>
              <div className='col'>
                <p className={styles.title}>{props.name}</p>
                <span className='badge badge-light'>{props.city}</span>
              </div>
              <div className='col text-right'>
                <h5>Ocena: {props.rating}</h5>
                <a href='3' className='btn btn-primary mt-2 px-4'>
                  Pokaż
                </a>
              </div>
            </div>
          </div>

          <div className='col-12'>
            <p className={styles.description}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Hotel.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hotel;

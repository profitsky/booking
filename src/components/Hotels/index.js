import React from 'react';
import Hotel from './Hotel';
import styles from './Hotels.module.css';
import PropTypes from 'prop-types';

function Hotels(props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oferty</h2>
      {props.hotels.map((hotel) => (
        <Hotel key={hotel.id} {...hotel} />
      ))}
    </div>
  );
}

Hotel.propTypes = {
  hotels: PropTypes.array,
};

export default Hotels;

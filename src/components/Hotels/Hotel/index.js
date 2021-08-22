import React, { useContext } from 'react';

import styles from './Hotel.module.css';
import img from '../../../assets/images/hotel.jpg';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/themeContext';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

function Hotel(props) {
  const theme = useContext(ThemeContext);
  const [auth] = useAuth();

  const clickHandler = (e) => {
    e.preventDefault();
    props.onOpen(props);
  };

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

                <Link to={`/hotel/${props.id}`}>Pokaż</Link>

                {/* <a
                  onClick={clickHandler}
                  className={`btn btn-${theme.color} mt-2 px-4`}
                >
                  Pokaż
                </a> */}
              </div>
            </div>
          </div>

          <div className='col-12'>
            <p className={styles.description}>{props.description}</p>
            {auth ? (
              <p className='mt-2'>Dostępność: 4 pokoje</p>
            ) : (
              <p className='mt-2'>Dostępność: zaloguj</p>
            )}
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

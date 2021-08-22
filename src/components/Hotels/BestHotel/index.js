import React, { useState, useEffect } from 'react';
import moment from 'moment';

const BestHotel = (props) => {
  const [time, setTime] = useState('');
  const endTime = moment().add(23, 'minutes').add(34, 'second');
  const hotel = props.getHotel();

  useEffect(() => {
    const interval = setInterval(() => {
      const leftTime = moment().to(endTime);
      setTime(leftTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='card bg-success text-white'>
      <div className='card-header'>Najlepsza oferta!</div>
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <h5 className='card-title'>{hotel.name}</h5>
          <p>Ocena: {hotel.rating}</p>
        </div>
        <p>Do końca oferty pozostało: {time}</p>
        <a href='3' className='btn btn-sm btn-light'>
          Pokaż
        </a>
      </div>
    </div>
  );
};

export default BestHotel;

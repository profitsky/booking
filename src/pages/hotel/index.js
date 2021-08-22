import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReducerContext from '../../context/reducerContext';

const Hotel = () => {
  const [hotel, setHotel] = useState({});
  const reducer = useContext(ReducerContext);

  const fetchHotel = () => {
    setHotel({
      id: 2,
      name: 'Dębowy',
      city: 'Lublin',
      rating: 8.8,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
      image: '',
    });
    reducer.dispatch({ type: 'setLoading', loading: false });
  };

  useEffect(() => {
    reducer.dispatch({ type: 'setLoading', loading: true });
    setTimeout(() => {
      fetchHotel();
    }, 500);
  }, []);

  if (reducer.stateLoading) return null;

  return <h1>{hotel.name}</h1>;
};

export default Hotel;

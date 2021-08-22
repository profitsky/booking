import React, { useEffect, useCallback, useContext } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import LastHotel from '../../components/LastHotel';
import BestHotel from '../../components/Hotels/BestHotel';
import Hotels from '../../components/Hotels';
import ReducerContext from '../../context/reducerContext';
import LoadingIcon from '../../components/UI/LoadingIcon';

const initialHotels = [
  {
    id: 1,
    name: 'Pod akacjami',
    city: 'Warszawa',
    rating: 8.3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
    image: '',
  },
  {
    id: 2,
    name: 'Dębowy',
    city: 'Lublin',
    rating: 8.8,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
    image: '',
  },
];

export default function Home() {
  const [lastHotel, setLastHotel] = useLocalStorage('last-hotel', null);
  const reducer = useContext(ReducerContext);

  useWebsiteTitle('Strona Główna');

  const getBestHotel = useCallback(() => {
    if (reducer.state.hotels.length < 2) {
      return null;
    } else {
      return reducer.state.hotels.sort((a, b) =>
        a.rating > b.rating ? -1 : 1
      )[0];
    }
  }, [reducer.state.hotels]);

  const openHotel = (hotel) => setLastHotel(hotel);
  const removeLastHotel = () => setLastHotel(null);

  useEffect(() => {
    setTimeout(() => {
      reducer.dispatch({ type: 'setHotels', hotels: initialHotels });
      reducer.dispatch({ type: 'setLoading', loading: false });
    }, 1000);
  }, []);

  if (reducer.state.loading) {
    return <LoadingIcon />;
  }

  return (
    <>
      {lastHotel ? (
        <LastHotel {...lastHotel} onRemove={removeLastHotel} />
      ) : null}
      {getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
      <Hotels onOpen={openHotel} hotels={reducer.state.hotels} />
    </>
  );
}

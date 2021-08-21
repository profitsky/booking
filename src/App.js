import React, { useEffect, useReducer } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Hotels from './components/Hotels';
import Menu from './components/Menu';
import LoadingIcon from './components/UI/LoadingIcon';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Button from './components/UI/Button';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';

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

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      const newState = { ...state };
      newState.theme = state.theme === 'danger' ? 'primary' : 'danger';
      return newState;
    case 'setHotels':
      return { ...state, hotels: action.hotels };
    case 'setLoading':
      return { ...state, loading: action.loading };
    case 'login':
      return { ...state, isAuthenticated: ' true' };
    case 'logout':
      return { ...state, isAuthenticated: ' false' };
    default:
      throw new Error('wrong type of action' + action.type);
  }
};

const initialState = {
  hotels: [],
  loading: true,
  isAuthenticated: false,
  theme: 'danger',
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'setHotels', hotels: initialHotels });
      dispatch({ type: 'setLoading', loading: false });
    }, 1000);
  }, []);

  const searchHandler = (term) => {
    const newHotels = [...initialHotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    dispatch({ type: 'setHotels', hotels: newHotels });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        login: () => {
          dispatch({ type: 'login' });
        },
        logout: () => {
          dispatch({ type: 'logout' });
        },
      }}
    >
      <ThemeContext.Provider
        value={{
          color: state.theme,
          changeTheme: () => dispatch({ type: 'changeTheme' }),
        }}
      >
        <Layout
          header={
            <Header>
              <SearchBar onSearch={(term) => searchHandler(term)} />
              <Button />
            </Header>
          }
          menu={<Menu />}
          content={
            state.loading ? <LoadingIcon /> : <Hotels hotels={state.hotels} />
          }
          footer={<Footer />}
        />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

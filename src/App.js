import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Menu from './components/Menu';
import Hotel from './pages/hotel/index';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Button from './components/UI/Button';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import InspiringQuote from './components/Inspiring';
import { initialState, reducer } from './reducer';
import Home from './pages/home';
import ReducerContext from './context/reducerContext';
import LoadingIcon from './components/UI/LoadingIcon';

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchHandler = (term) => {
    const newHotels = [...initialHotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    dispatch({ type: 'setHotels', hotels: newHotels });
  };

  const header = (
    <Header>
      <InspiringQuote />
      <SearchBar onSearch={(term) => searchHandler(term)} />
      <Button />
    </Header>
  );

  const content = (
    <div>
      <Switch>
        <Route path='/hotels/:id' component={Hotel}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
      {state.loading ? <LoadingIcon /> : null}
    </div>
  );

  const menu = <Menu />;
  const footer = <Footer />;

  return (
    <Router>
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
          <ReducerContext.Provider
            value={{
              state,
              dispatch,
            }}
          >
            <Layout
              header={header}
              menu={menu}
              content={content}
              footer={footer}
            />
          </ReducerContext.Provider>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;

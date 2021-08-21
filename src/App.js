import React, { Component } from 'react';
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

class App extends Component {
  hotels = [
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
  state = {
    hotels: [],
    loading: true,
    theme: 'primary',
    isAuthenticated: 'false',
  };

  searchHandler(term) {
    const hotels = [...this.hotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    this.setState({ hotels });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hotels: this.hotels, loading: false });
    }, 1000);
  }

  changeTheme = () => {
    const newTheme = this.state.theme === 'primary' ? 'danger' : 'primary';
    this.setState({ theme: newTheme });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuthenticated: this.state.isAuthenticated,
          login: () => {
            this.setState({ isAuthenticated: true });
          },
          logout: () => {
            this.setState({ isAuthenticated: false });
          },
        }}
      >
        <ThemeContext.Provider
          value={{
            color: this.state.theme,
            changeTheme: this.changeTheme,
          }}
        >
          <Layout
            header={
              <Header>
                <SearchBar onSearch={(term) => this.searchHandler(term)} />
                <Button />
              </Header>
            }
            menu={<Menu />}
            content={
              this.state.loading ? (
                <LoadingIcon />
              ) : (
                <Hotels hotels={this.state.hotels} theme={this.context} />
              )
            }
            footer={<Footer />}
          />
        </ThemeContext.Provider>
      </AuthContext.Provider>
    );
  }
}

export default App;

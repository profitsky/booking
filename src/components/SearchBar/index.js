import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../context/themeContext';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');
  const theme = useContext(ThemeContext);

  const updateTermHandler = (e) => {
    setTerm(e.target.value);
  };

  const search = () => {
    props.onSearch(term);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <div className='d-flex'>
      <input
        value={term}
        onKeyDown={onKeyDownHandler}
        onChange={updateTermHandler}
        className='form-control'
        type='text'
        placeholder='search...'
      />
      <button className={`ml-1 btn btn-${theme.color}`} onClick={search}>
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;

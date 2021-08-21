import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

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
      <button className='btn btn-primary' onClick={search}>
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;

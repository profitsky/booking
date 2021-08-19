import React from 'react';

const SearchBar = () => {
  return (
    <div className='d-flex'>
      <input
        className='form-control'
        type='text'
        placeholder='search...'
        // style={{ width: 'calc(100% - 20px)' }}
      />
      <button className='btn btn-primary'>Search</button>
    </div>
  );
};

export default SearchBar;

import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState([]);

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const resetInputField = () => {
    setSearchTerm('');
  };

  const onTermSubmit = (event) => {
    event.preventDefault();
    props.getResources(searchTerm);
    resetInputField();
  };

  return (
    <form className="search-box p-1 " onSubmit={onTermSubmit}>
      <input
        type="text"
        required="required"
        placeholder="Search Podcasts and Episodes"
        className="search-input font-size-l text-bold"
        value={searchTerm}
        onChange={onInputChange}
      />
      <button className="search-button text-bold">
        <i className="fas fa-search" />
      </button>
    </form>
  );
};

export default SearchBar;

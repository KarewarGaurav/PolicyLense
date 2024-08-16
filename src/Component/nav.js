import React, { useState } from 'react';
import './nav.css';

function Nav({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>MovieReview</h2>
      </div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search for movies"
        value={query}
        onChange={handleInputChange}
      />
      {/* <button className="log-button">Log In</button> */}
    </nav>
  );
}

export default Nav;

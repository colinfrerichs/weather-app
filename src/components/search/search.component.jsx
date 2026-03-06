import { useState } from "react";

import "./search.styles.css";

const Search = ({ label, onSearch, placeholder }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) return;

    onSearch(trimmedQuery);
    setQuery("");
  };

  return (
    <div className="search-card">
      <form className="search-form" onSubmit={handleSubmit}>
        <label className="search-label" htmlFor="search">
          {label}
        </label>

        <div className="search-input-group">
          <input
            id="search"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="search-input"
          />

          <button type="submit" className="search-button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;

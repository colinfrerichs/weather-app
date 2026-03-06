import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">{label}</label>
      <input
        id="search"
        name="search"
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        value={query}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;

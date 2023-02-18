import React from "react";

const SearchText = ({ onSearchHandler, onChangeHandler }) => {
  return (
    <form onSubmit={onSearchHandler}>
      <div className="ui focus input">
        <input
          type="search"
          placeholder="Enter search keyword"
          required
          onChange={onChangeHandler}
        />

        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchText;

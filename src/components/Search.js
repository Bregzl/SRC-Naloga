import React from "react";

function Search({ searchHandler }) {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Poišči zaposlenega ..."
        className="searchbox"
        onChange={searchHandler}
      />
    </section>
  );
}

export default Search;

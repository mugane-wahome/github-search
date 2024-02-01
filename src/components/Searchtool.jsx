import React from "react";
import { useState } from "react";

const Searchtool = ({ onsearch }) => {
  const [search, setSearch] = useState("");
  const handlechange = (event) => {
    setSearch(event.target.value);
  };
  const handlesearch = () => {
    onsearch(search);
  };
  return (
    <div>
      <input
        onChange={handlechange}
        type="text"
        value={search}
        placeholder="input your github account"
      />
      <button onClick={handlesearch}>search</button>
    </div>
  );
};

export default Searchtool;

import React from "react";

const Info = ({ image, heading, repo, country, paragraph }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h1>{heading}</h1>
      <h2>{repo}</h2>
      <h3>{country}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default Info;

import React from "react";
import Grid from "./Grid";

const Featured = ({ heading, items }) => {
  return (
    <div className="my-10">
      <h2 className="font-semibold text-4xl mb-8 text-dark">{heading}</h2>
      <Grid items={items} />
    </div>
  );
};

export default Featured;

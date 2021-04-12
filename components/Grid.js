import React from "react";
import Card from "./Card";

const Grid = ({ items }) => {
  return (
    <div className="grid grid-cols-7">
      {items.slice(0, 7).map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Grid;

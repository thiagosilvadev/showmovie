import React from "react";

const Card = ({ item }) => {
  //   console.log(item);
  return (
    <a className="block w-40 max-w-max" href={`/movie/${item.id}`}>
      <img
        src={`https://www.themoviedb.org/t/p/w500${item.poster_path}`}
        alt=""
        className="object-cover w-full rounded border-2 border-purple hover:border-light transition"
      />

      <div className="w-full">
        <h2 className="text-dark font-medium text-base">{item.title}</h2>
      </div>
    </a>
  );
};

export default Card;

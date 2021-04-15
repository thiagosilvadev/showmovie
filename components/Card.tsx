import React from "react";
import { Movie } from "../config/MovieController";
import { Tv } from "../config/TvController";

interface Props {
  movie?: Movie;
  show?: Tv;
}
const Card: React.FC<Props> = ({ movie, show }) => {
  if (movie) {
    return (
      <a className="block w-40 max-w-max" href={`/movie/${movie.id}`}>
        <img
          src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
          alt=""
          className="object-cover w-full rounded border-2 border-transparent hover:border-light transition"
        />

        <div className="w-full">
          <h2 className="text-dark font-medium text-base">{movie.title}</h2>
        </div>
      </a>
    );
  } else {
    return (
      <a className="block w-40 max-w-max" href={`/show/${show.id}`}>
        <img
          src={`https://www.themoviedb.org/t/p/w500${show.poster_path}`}
          alt=""
          className="object-cover w-full rounded border-2 border-transparent hover:border-light transition"
        />

        <div className="w-full">
          <h2 className="text-dark font-medium text-base">{show.name}</h2>
        </div>
      </a>
    );
  }
};

export default Card;

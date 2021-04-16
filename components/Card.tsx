import React from "react";
import { Movie } from "../config/useMovie";
import { Tv } from "../config/TvController";

interface Props {
  movie?: Movie;
  show?: Tv;
}
const Card: React.FC<Props> = ({ movie, show }) => {
  if (movie) {
    return (
      <a className="card block w-40 max-w-max" href={`/movie/${movie.id}`}>
        <div className="img overflow-hidden  rounded border-2 border-purple hover:border-light transition">
          <img
            src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
            alt=""
            className="object-cover w-full transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
          />
        </div>
        <div className="w-full">
          <h2 className="text-dark transition-colors hover:text-light font-regular text-base">
            {movie.title}
          </h2>
        </div>
      </a>
    );
  } else {
    return (
      <a className="card  block w-40 max-w-max" href={`/tv/${show.id}`}>
        <div className="img overflow-hidden rounded border-2 border-purple hover:border-light transition">
          <img
            src={`https://www.themoviedb.org/t/p/w500${show.poster_path}`}
            alt=""
            className="object-cover shadow-xl w-full  transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
          />
        </div>

        <div className="w-full">
          <h2 className="text-dark transition-colors hover:text-light font-regular text-base">
            {show.name}
          </h2>
        </div>
      </a>
    );
  }
};

export default Card;

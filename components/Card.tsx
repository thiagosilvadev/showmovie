import React from "react";
import Link from "next/link";
import { Movie } from "../config/useMovie";
import { Tv } from "../config/useTv";

interface Props {
  movie?: Movie;
  show?: Tv;
}
const Card: React.FC<Props> = ({ movie, show }) => {
  if (movie) {
    return (
      <Link href={`/movie/${movie.id}`}>
        <a className="card mr-5 block flex-shrink-0  w-44 max-w-max mb-5 border-2 border-transparent transition-colors  hover:border-light cursor-pointer shadow rounded-lg bg-white ">
          <div className="img h-64 overflow-hidden rounded-t-lg">
            <img
              src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
              alt=""
              className="object-cover h-full w-full transition-all duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-full  py-1 px-2">
            <h2 className="text-dark transition-colors hover:text-light font-medium text-base">
              {movie.title}
            </h2>
          </div>
        </a>
      </Link>
    );
  } else {
    return (
      <Link href={`/tv/${show.id}`}>
        <a className="card mr-5 block flex-shrink-0  w-44 max-w-max mb-5 border-2 border-transparent transition-colors  hover:border-light cursor-pointer shadow rounded-lg bg-white ">
          <div className="img h-64 overflow-hidden rounded-t-lg">
            <img
              src={`https://www.themoviedb.org/t/p/w500${show.poster_path}`}
              alt=""
              className="object-cover h-full w-full transition-all duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-full  py-1 px-2">
            <h2 className="text-dark transition-colors hover:text-light font-medium text-base">
              {show.name}
            </h2>
          </div>
        </a>
      </Link>
    );
  }
};

export default Card;

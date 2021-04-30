import React from "react";

import { Movie } from "../config/useMovie";
import { Tv } from "../config/useTv";

interface Props {
  movie?: Movie;
  tvshow?: Tv;
}
export const DetailCard: React.FC<Props> = ({ movie, tvshow }) => {
  return (
    <>
      {movie ? (
        <div className="flex mb-5 border-2 border-transparent transition-colors hover:border-light cursor-pointer shadow rounded-lg bg-white p-4">
          <div className="w-36 mr-6">
            <a href={`/movie/${movie.id}`} className="w-36 block">
              <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                className="w-full cover rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <a href={`/movie/${movie.id}`}>
              <h3 className="font-semibold mb-1 text-dark text-2xl">
                {movie.title}
              </h3>

              {movie.overview && (
                <p className="text-text-light mt-2">{movie.overview}</p>
              )}
            </a>
          </div>
        </div>
      ) : (
        <div className="flex mb-5 border-2 border-transparent transition-colors hover:border-light cursor-pointer shadow rounded-lg bg-white p-4">
          <div className="w-36 mr-6">
            <a href={`/tv/${tvshow.id}`} className="w-36 block">
              <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${tvshow.poster_path}`}
                className="w-full cover rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <a href={`/tv/${tvshow.id}`}>
              <h3 className="font-semibold mb-1 text-dark text-2xl">
                {tvshow.name}
              </h3>

              {tvshow.overview && (
                <p className="text-text-light mt-2">{tvshow.overview}</p>
              )}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

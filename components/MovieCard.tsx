import React from "react";
import format from "date-fns/format";
import { ptBR } from "date-fns/locale";

import { Movie } from "../config/useMovie";

interface Props {
  movie: Movie;
}
export const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
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
          {/* <h4 className="text-light mb-5">
            {format(new Date(movie.), "yyyy", {
              locale: ptBR,
            })}{" "}
            | {season.episode_count} episódios
          </h4> */}
          {movie.overview && (
            <p className="text-text-light mt-2">{movie.overview}</p>
          )}
        </a>
      </div>
    </div>
  );
};

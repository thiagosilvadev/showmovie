import React from "react";
import Card from "./Card";
import { Movie } from "../config/useMovie";
import { Tv } from "../config/TvController";
interface Props {
  movies?: Array<Movie>;
  shows?: Array<Tv>;
}

const Grid: React.FC<Props> = ({ movies, shows }) => {
  return (
    <div className="flex flex-shrink-0 overflow-x-auto">
      {movies
        ? movies.map((movie) => <Card key={movie.id} movie={movie} />)
        : shows.map((show) => <Card key={show.id} show={show} />)}
    </div>
  );
};

export default Grid;

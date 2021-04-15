import React from "react";
import Card from "./Card";
import { Movie } from "../config/MovieController";
import { Tv } from "../config/TvController";
interface Props {
  movies?: Array<Movie>;
  shows?: Array<Tv>;
}

const Grid: React.FC<Props> = ({ movies, shows }) => {
  return (
    <div className="grid grid-cols-7">
      {movies
        ? movies
            .slice(0, 7)
            .map((movie) => <Card key={movie.id} movie={movie} />)
        : shows.slice(0, 7).map((show) => <Card key={show.id} show={show} />)}
    </div>
  );
};

export default Grid;

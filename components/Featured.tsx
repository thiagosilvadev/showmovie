import React from "react";
import Grid from "./Grid";

import { Movie } from "../config/useMovie";
import { Tv } from "../config/useTv";
import LoadSpinner from "./LoadSpinner";

interface FeaturedProps {
  heading: string;
  loading: boolean;
  movies?: Array<Movie>;
  shows?: Array<Tv>;
}

const Featured = ({ movies, loading, shows, heading }: FeaturedProps) => {
  return (
    <div className="my-10 relative px-2 md:px-0">
      <h2 className="font-bold font-heading text-4xl mb-8 text-dark">
        {heading}
      </h2>
      {loading ? <LoadSpinner /> : <Grid movies={movies} shows={shows} />}
    </div>
  );
};

export default Featured;

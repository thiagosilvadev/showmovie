import React from "react";
import Grid from "./Grid";

import { Movie } from "../config/useMovie";
import { Tv } from "../config/TvController";

interface FeaturedProps {
  heading: string;
  loading: boolean;
  movies?: Array<Movie>;
  shows?: Array<Tv>;
}

const Featured = ({ movies, loading, shows, heading }: FeaturedProps) => {
  return (
    <div className="my-10 relative">
      <h2 className="font-bold font-heading text-4xl mb-8 text-dark">
        {heading}
      </h2>
      {loading ? (
        <svg
          className="animate-spin  h-12 w-12 absolute top-full left-2/4 text-light"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <Grid movies={movies} shows={shows} />
      )}
    </div>
  );
};

export default Featured;

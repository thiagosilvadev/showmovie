import useSWR from "swr";
import fetcher, { Config } from "./fetcher";
import React from "react";

///////////////Interfaces
type optString = string | null;

export interface Movie {
  title: string;
  original_title: string;
  id: number;
  poster_path: optString;
  overview: string;
  backdrop_path: optString;
}

export interface MovieDetail extends Movie, Credits {
  genres: Array<{ id: number; name: string }>;
  release_date: string;
  tagline: optString;
  runtime: number | null;
}

export interface People {
  name: string;
  id: number;
  profile_path: string | null;
  known_for_department: string;
}

export interface Cast extends People {
  order: number;
  character: string;
}

interface Crew extends People {
  job: string;
  department: string;
}
interface Credits {
  cast: Array<Cast>;
  crew: Array<Crew>;
}
export interface Res {
  isLoading: boolean;
  isError: Error;
}
export interface ResMovies extends Res {
  movies: Movie[];
}

export interface ResMovieDetail extends Res {
  movie: MovieDetail;
}

export interface DataMovies {
  page: number;
  results: Array<Movie>;
  total_results: number;
  total_pages: number;
}

////////////////////

////////////Hooks///////////////
export function useMovies(): ResMovies {
  const config: Config = {
    endpoint: "movie/popular",
    language: "pt-BR",
    page: "1",
  };

  const { data, error } = useSWR<DataMovies, Error>(
    `${config.endpoint}?&language=${config.language}&page=${config.page}`,
    fetcher
  );
  let movies: Movie[];

  if (data) {
    movies = data.results.slice(0, 15).map(
      (movie): Movie => {
        return {
          title: movie.title,
          original_title: movie.original_title,
          id: movie.id,
          poster_path: movie.poster_path,
          overview: movie.overview,
          backdrop_path: movie.backdrop_path,
        };
      }
    );
  }

  return {
    movies,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useMovieDetail(id): ResMovieDetail {
  let shouldFetch = true;

  if (id === undefined || id === "") shouldFetch = false;

  const config: Config = {
    endpoint: `movie/${id}`,
    language: "pt-BR",
  };

  const { data, error } = useSWR<MovieDetail, Error>(
    () =>
      shouldFetch ? `${config.endpoint}?&language=${config.language}` : null,
    fetcher
  );
  const { data: creditsData, error: creditsError } = useSWR<Credits, Error>(
    `${config.endpoint}/credits?&language=${config.language}`,
    fetcher
  );
  let movie: MovieDetail;

  if (!error && data && creditsData && !creditsError) {
    movie = {
      id: data.id,
      title: data.title,
      poster_path: data.poster_path,
      backdrop_path: data.backdrop_path,
      genres: data.genres,
      original_title: data.original_title,
      overview: data.overview,
      release_date: data.release_date,
      runtime: data.runtime,
      tagline: data.tagline,
      cast: creditsData.cast.map(
        (actor): Cast => {
          return {
            id: actor.id,
            name: actor.name,
            character: actor.character,
            known_for_department: actor.known_for_department,
            order: actor.order,
            profile_path: actor.profile_path,
          };
        }
      ),

      crew: creditsData.crew.filter(
        (worker): Crew => {
          if (worker.job === "Director" || worker.job === "Screenplay") {
            return {
              id: worker.id,
              name: worker.name,
              known_for_department: worker.known_for_department,
              profile_path: worker.profile_path,
              department: worker.department,
              job: worker.job,
            };
          }
        }
      ),
    };
  }
  return {
    movie,

    isLoading: !error && !data,
    isError: error,
  };
}

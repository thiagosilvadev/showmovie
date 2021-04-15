import Head from "next/head";
import React from "react";
import { useMovieDetail, useMovies } from "../config/MovieController";
import { useTvDetail, useTvShows } from "../config/TvController";

import Featured from "../components/Featured";

import Header from "../components/Header";
import HeroForm from "../components/HeroForm";

export default function Home() {
  const { movies, isLoading: movieLoading } = useMovies();
  const { tvshows, isLoading: tvLoading } = useTvShows();

  return (
    <div className="">
      <Head>
        <title>ShowMovie</title>
      </Head>
      <Header />
      <div className="container mx-auto">
        <HeroForm />

        <Featured
          loading={movieLoading}
          movies={movies}
          heading="Filmes em Destaque"
        />
        <Featured
          loading={tvLoading}
          shows={tvshows}
          heading="Séries em Destaque"
        />
      </div>
    </div>
  );
}

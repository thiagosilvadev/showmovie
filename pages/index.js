import Head from "next/head";
import React from "react";
import useMovies from "../api/api";

import Featured from "../components/Featured";

import Header from "../components/Header";
import HeroForm from "../components/HeroForm";

export default function Home() {
  const { movies, isLoading, isError } = useMovies("movie/popular");

  return (
    <div className="">
      <Head>
        <title>ShowMovie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container mx-auto">
        <HeroForm />

        {isLoading && <p>Carregando...</p>}
        {movies && (
          <Featured items={movies.results} heading="Filmes em Destaque" />
        )}
      </div>
    </div>
  );
}

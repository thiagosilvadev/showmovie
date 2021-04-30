import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Card from "../components/Card";
import LoadSpinner from "../components/LoadSpinner";
import fetcher from "../config/fetcher";
import { Movie, DataMovies, usePopularMovies } from "../config/useMovie";

interface Props {}

export default function Movies({}: Props) {
  const router = useRouter();
  const { movies, isLoading } = usePopularMovies("1");

  return (
    <div>
      <div className="container mt-8 mx-auto">
        <Head>
          <title>Filmes em Destaque | ShowMovie</title>
        </Head>
        <h2 className="mb-8 text-3xl font-heading font-semibold text-dark ">
          Filmes em Destaque
        </h2>

        <div className="grid w-full grid-cols-6">
          {movies && movies.map((movie) => <Card movie={movie} />)}
        </div>
      </div>
    </div>
  );
}

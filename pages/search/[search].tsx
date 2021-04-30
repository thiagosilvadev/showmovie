import { NextRouter, useRouter } from "next/router";
import React, { useState } from "react";
import useSWR from "swr";
import { DetailCard } from "../../components/DetailCard";

import fetcher from "../../config/fetcher";
import { DataMovies } from "../../config/useMovie";
import { DataTv } from "../../config/useTv";
import Head from "next/head";

interface Props {}

const Search = (props: Props) => {
  const router: NextRouter = useRouter();

  const [type, setType] = useState("movies");

  const { data: movies, error: movieError } = useSWR<DataMovies, Error>(
    () =>
      router.query.search
        ? `search/movie?&query=${router.query.search}&language=pt-BR`
        : null,
    fetcher
  );

  const { data: tvshows, error: tvError } = useSWR<DataTv, Error>(
    () =>
      router.query.search
        ? `search/tv?&query=${router.query.search}&language=pt-BR`
        : null,
    fetcher
  );

  React.useEffect(() => {
    console.log(`/search/tv?&query=${router.query.search}&language=pt-BR`);
  }, [router]);

  React.useEffect(() => {
    console.log(movies);
  }, [type]);

  return (
    <div className="container mt-8 mx-auto">
      <Head>
        <title>Pesquisa: {router.query.search}</title>
      </Head>
      <h2 className="mb-8 text-3xl font-heading font-semibold text-dark ">
        Resultados para a pesquisa:{" "}
        <span className="italic font-normal">{router.query.search}</span>
      </h2>
      <div className="relative flex">
        <aside className="w-3/12 h-full  shadow mr-5 bg-white p-6 rounded-lg sticky top-5 ">
          <h3 className="font-medium text-2xl">Filtrar</h3>
          <div className="flex flex-col justify-start items-start">
            <button
              onClick={(e) => setType("movies")}
              className={`${
                type === "movies"
                  ? "bg-light text-white "
                  : "bg-transparent text-text-color border-light"
              } mb-5 border-transparent border-2 px-6 py-3 transition-colors rounded-full`}
            >
              Filmes{" "}
              <span className="opacity-95">
                {movies && movies.total_results}
              </span>
            </button>

            <button
              onClick={(e) => setType("tvshows")}
              className={`${
                type === "tvshows"
                  ? "bg-light text-white "
                  : "bg-transparent text-text-color border-light"
              } mb-5 border-transparent border-2 px-6 py-3 transition-colors rounded-full`}
            >
              Séries{" "}
              <span className="opacity-95">
                {tvshows && tvshows.total_results}
              </span>
            </button>
          </div>
        </aside>
        <div className="w-9/12">
          {type == "movies" &&
            movies &&
            movies.results.map((movie) => <DetailCard movie={movie} />)}
          {type == "tvshows" &&
            tvshows &&
            tvshows.results.map((tvshow) => <DetailCard tvshow={tvshow} />)}
        </div>
      </div>
    </div>
  );
};

export default Search;

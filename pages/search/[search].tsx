import { NextRouter, useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { MovieCard } from "../../components/MovieCard";
import fetcher from "../../config/fetcher";
import { DataMovies } from "../../config/useMovie";

interface Props {}

const Search = (props: Props) => {
  const router: NextRouter = useRouter();
  const { data: movies, error } = useSWR<DataMovies, Error>(
    () =>
      router.query.search
        ? `search/movie?&query=${router.query.search}&language=pt-BR`
        : null,
    fetcher
  );
  React.useEffect(() => {
    console.log(`/search/movie?&query=${router.query.search}&language=pt-BR`);
  }, [router]);
  React.useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="container relative mt-8 mx-auto flex">
      <aside className="w-3/12 h-full  shadow mr-5 bg-white p-6 rounded-lg sticky top-5 ">
        Filtrar
      </aside>
      <div className="w-9/12">
        {movies && movies.results.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;

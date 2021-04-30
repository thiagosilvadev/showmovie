import React from "react";
import Head from "next/head";
import { useRouter, NextRouter } from "next/router";

import { useMovieDetail } from "../../config/useMovie";

import { Cast } from "../../components/Cast";
import LoadSpinner from "../../components/LoadSpinner";

const Movie = () => {
  const router: NextRouter = useRouter();
  const [year, setYear] = React.useState("");

  const { movie, isLoading } = useMovieDetail(router.query.id);

  React.useEffect(() => {
    if (movie) {
      const date = new Date(movie.release_date);

      setYear(date.getFullYear().toString());
    }
  }, [movie]);

  return (
    <>
      <Head>{movie && <title>{movie.title} | ShowMovie</title>}</Head>

      <div className="container mt-8 mx-auto">
        {isLoading ? (
          <div className="h-screen .relative">
            <LoadSpinner />
          </div>
        ) : (
          movie && (
            <main className="movie">
              <div className="flex justify-start">
                <div className="img w-6/12 mr-11 md:w-3/12">
                  <img
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                    alt=""
                    className="w-80 rounded-lg"
                  />
                </div>
                <div className="info w-6/12 md:w-9/12">
                  <h1 className="font-semibold text-dark text-4xl mb-4">
                    {movie.title}
                  </h1>
                  <ul className="flex text-text-light list-disc list-inside">
                    <li className="list-none mr-2">{year}</li>
                    <li className="mr-2">
                      {movie.genres.length > 1
                        ? movie.genres.map((genre, index) => {
                            let item = `${genre.name}, `;
                            if (index === movie.genres.length - 1) {
                              item = genre.name;
                            }
                            return item;
                          })
                        : movie.genres[0].name}
                    </li>
                    <li className="">{movie.runtime}min</li>
                  </ul>

                  <h4 className="text-light italic mt-4">{movie.tagline}</h4>
                  <div className="overview mt-10">
                    <h2 className="font-semibold text-dark text-3xl mb-5">
                      Sinopse
                    </h2>
                    <p className="text-text-light">{movie.overview}</p>
                  </div>

                  <div className="credits mt-10">
                    <div className="flex">
                      {movie.crew.map((crew) => (
                        <div className="mr-8">
                          <p className="text-dark font-medium">{crew.name}</p>
                          <p className="text-text-light mt-2 italic">
                            {crew.job}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="cast mt-16">
                <h2 className="font-semibold text-dark text-4xl mb-14">
                  Elenco principal
                </h2>
                <div className="grid gap-5 md:grid-cols-8 grid-cols-3 mb-20">
                  {movie.cast.slice(0, 8).map((cast) => (
                    <Cast key={cast.id} cast={cast} />
                  ))}
                </div>
              </div>
            </main>
          )
        )}
      </div>
    </>
  );
};

export default Movie;

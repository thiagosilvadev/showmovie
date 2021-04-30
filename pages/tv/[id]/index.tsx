import React from "react";
import { useRouter, NextRouter } from "next/router";
import format from "date-fns/format";
import { ptBR } from "date-fns/locale";

import { useTvDetail, Season } from "../../../config/useTv";

import { Cast } from "../../../components/Cast";
import { SeasonCard } from "../../../components/SeasonCard";
import LoadSpinner from "../../../components/LoadSpinner";
import Head from "next/head";
import Link from "next/link";

const Tv = () => {
  const router: NextRouter = useRouter();
  const [year, setYear] = React.useState("");
  const [season, setSeason] = React.useState<Season>();

  const { tvshow, isLoading } = useTvDetail(router.query.id);

  React.useEffect(() => {
    if (tvshow) {
      const date = format(new Date(tvshow.first_air_date), "yyyy", {
        locale: ptBR,
      });

      setYear(date);
      setSeason(tvshow.seasons[tvshow.seasons.length - 1]);
    }
  }, [tvshow]);

  return (
    <>
      <Head>{tvshow && <title>{tvshow.name} | ShowMovie</title>}</Head>
      <div className="container mt-8 mx-auto">
        {isLoading ? (
          <div className="h-screen .relative">
            <LoadSpinner />
          </div>
        ) : (
          tvshow && (
            <main className="tv">
              <div className="flex justify-start">
                <div className="img mr-11  w-3/12">
                  <img
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${tvshow.poster_path}`}
                    alt=""
                    className="w-80 rounded-lg"
                  />
                </div>
                <div className="info w-9/12">
                  <h1 className="font-semibold text-dark text-4xl mb-4">
                    {tvshow.name}
                  </h1>
                  <ul className="flex text-text-light list-disc list-inside">
                    <li className="list-none mr-2">{year}</li>
                    <li className="mr-2">
                      {tvshow.genres.length > 1
                        ? tvshow.genres.map((genre, index) => {
                            let item = `${genre.name}, `;
                            if (index === tvshow.genres.length - 1) {
                              item = genre.name;
                            }
                            return item;
                          })
                        : tvshow.genres[0].name}
                    </li>
                    <li className="mr-2">{tvshow.episode_run_time}min</li>
                    <li>
                      {tvshow.number_of_seasons} Temporada
                      {tvshow.number_of_seasons > 1 && "s"}
                    </li>
                  </ul>

                  <h4 className="text-light italic mt-4">{tvshow.tagline}</h4>
                  <div className="overview mt-10">
                    <h2 className="font-semibold text-dark text-3xl mb-5">
                      Sinopse
                    </h2>
                    <p className="text-text-light">{tvshow.overview}</p>
                  </div>

                  <div className="credits mt-10">
                    <div className="flex">
                      {tvshow.created_by.map((crew) => (
                        <div className="mr-8">
                          <p className="text-dark font-medium">{crew.name}</p>
                          <p className="text-text-light mt-2 italic">
                            Showrunner
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="cast mt-16">
                <h2 className="font-semibold text-dark text-4xl mb-14">
                  Última temporada
                </h2>
                {season && (
                  <div className=" w-9/12">
                    <SeasonCard
                      season={season}
                      path={`${router.query.id}/seasons`}
                      tvshowName={tvshow.name}
                    />
                  </div>
                )}
                <Link href={`${router.query.id}/seasons/`}>
                  <a className="mt-5 text-dark hover:text-light font-medium">
                    Ver todas as temporadas
                  </a>
                </Link>
              </div>

              <div className="cast mt-16">
                <h2 className="font-semibold text-dark text-4xl mb-14">
                  Elenco principal
                </h2>
                <div className="grid gap-5 md:grid-cols-8 grid-cols-3 mb-20">
                  {tvshow.cast &&
                    tvshow.cast
                      .slice(0, 8)
                      .map((cast) => <Cast key={cast.id} cast={cast} />)}
                </div>
              </div>
            </main>
          )
        )}
      </div>
    </>
  );
};

export default Tv;

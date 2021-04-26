import { NextRouter, useRouter } from "next/router";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSeasonDetail } from "../../../../config/TvController";
import Link from "next/link";

const Season = () => {
  const router: NextRouter = useRouter();
  const { season, isError, isLoading } = useSeasonDetail(
    router.query.id,
    router.query.season
  );
  React.useEffect(() => {
    console.log(season);
  }, [season]);
  return (
    <>
      <div className="mt-8 container mx-auto">
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <>
            <Link href={`/tv/${router.query.id}`}>
              <a className=" text-xl font-medium text-text-light">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                Voltar
              </a>
            </Link>
            <h2 className="mt-8 font-semibold text-4xl mb-2 text-dark">
              {season.name}
            </h2>
            <h3 className="text-light">{season.episodes.length} episódios</h3>
            <div className="mt-6">
              {season.episodes.map((episode) => (
                <div className="flex mb-5 border-2 border-transparent transition-colors hover:border-light cursor-pointer shadow rounded-lg bg-white p-4">
                  <div className="w-60 mr-6">
                    <img
                      src={`https://www.themoviedb.org/t/p/w227_and_h127_bestv2${episode.still_path}`}
                      className="w-full cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold mb-1 text-dark text-2xl">
                      {episode.name}
                    </h3>

                    {episode.overview ? (
                      <p className="text-text-light mt-2">{episode.overview}</p>
                    ) : (
                      <p className="text-text-light mt-2">
                        {episode.name} foi exibido em {episode.air_date}.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Season;

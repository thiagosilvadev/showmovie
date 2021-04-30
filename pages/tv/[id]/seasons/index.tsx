import { NextRouter, useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import React from "react";

import { useSeasons } from "../../../../config/useTv";
import { SeasonCard } from "../../../../components/SeasonCard";
import Head from "next/head";
import LoadSpinner from "../../../../components/LoadSpinner";

const Seasons = () => {
  const router: NextRouter = useRouter();
  const { seasons, number_of_seasons, id, name, isLoading } = useSeasons(
    router.query.id
  );
  React.useEffect(() => {
    console.log(router.query.id);
  }, [seasons]);
  return (
    <>
      <Head>{name && <title>{name}: Temporadas | ShowMovie</title>} </Head>
      <div className="mt-8 container mx-auto">
        {isLoading ? (
          <LoadSpinner />
        ) : (
          <>
            <a
              className=" text-xl font-medium text-text-light"
              href={`/tv/${router.query.id}`}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Voltar
            </a>
            <h2 className="mt-8 font-semibold text-4xl mb-2 text-dark">
              {name}
            </h2>
            <h3 className="text-light">{number_of_seasons} Temporadas</h3>
            <div className="mt-6">
              {seasons.map((season) => (
                <SeasonCard
                  key={season.id}
                  season={season}
                  path={`/tv/${router.query.id}/seasons`}
                  tvshowName={name}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Seasons;

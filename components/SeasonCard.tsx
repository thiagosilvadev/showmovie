import React from "react";
import Link from "next/link";
import format from "date-fns/format";
import { ptBR } from "date-fns/locale";

import { Season } from "../config/TvController";

interface Props {
  season: Season;
  path: string;
  tvshowName: string;
}
export const SeasonCard: React.FC<Props> = ({ tvshowName, season, path }) => {
  return (
    <div className="flex mb-5 border-2 border-transparent transition-colors hover:border-light cursor-pointer shadow rounded-lg bg-white p-4">
      <div className="w-36 mr-6">
        <Link href={`${path}/${season.season_number}`}>
          <a className="w-36 block">
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${season.poster_path}`}
              className="w-full cover rounded-lg"
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        <Link href={`${path}/${season.season_number}`}>
          <a>
            <h3 className="font-semibold mb-1 text-dark text-2xl">
              {season.name}
            </h3>
            <h4 className="text-light mb-5">
              {season.air_date} | {season.episode_count} episódios
            </h4>
            {season.overview ? (
              <p className="text-text-light mt-2">{season.overview}</p>
            ) : (
              <p className="text-text-light mt-2">
                A {season.season_number}ª temporada de {tvshowName} começou a
                ser exibida em{" "}
                {format(new Date(season.air_date), "d 'de' MMMM 'de' yyyy", {
                  locale: ptBR,
                })}
                .
              </p>
            )}
          </a>
        </Link>
      </div>
    </div>
  );
};

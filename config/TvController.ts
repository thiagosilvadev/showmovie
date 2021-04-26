import useSWR from "swr";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import fetcher, { Config } from "./fetcher";
///////////////Interfaces

export interface Tv {
  name: string;
  original_name: string;
  id: number;
  poster_path: string | null;
  overview: string;
  backdrop_path: string | null;
}
export interface Season {
  id: number;
  air_date: string;
  episode_count: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface SeasonDetail extends Season {
  episodes: {
    air_date: string;
    episode_number: number;
    name: string;
    overview: string;
    still_path: string;
  }[];
}

export interface TvDetail extends Tv {
  genres: Array<{ id: number; name: string }>;
  first_air_date: string;
  tagline: string | null;
  episode_run_time: Array<number>;
  created_by: Array<{ id: number; name: string; profile_path: string | null }>;
  networks: Array<{ id: number; name: string; logo_path: string }>;
  number_of_episodes: number;
  number_of_seasons: number;
  cast: Array<Cast>;
  seasons: Array<Season>;
}

interface People {
  name: string;
  id: number;
  profile_path: string | null;
  known_for_department: string;
}

interface Cast extends People {
  order: number;
  character: string;
}

interface Crew extends People {
  job: string;
  department: string;
}
interface Credits {
  cast: Array<Cast>;
  crew: Array<Crew>;
}

interface Res {
  isLoading: boolean;
  isError: Error;
}
interface ResTv extends Res {
  tvshows: Tv[];
}

interface ResTvDetail extends Res {
  tvshow: TvDetail;
}
interface ResSeason extends Res {
  name: string;
  id: number;
  number_of_seasons: number;
  seasons: Season[];
}
interface ResSeasonDetail extends Res {
  season: SeasonDetail;
}

interface DataTv {
  page: number;
  results: Array<Tv>;
  total_results: number;
  total_pages: number;
}

////////////////////

////////////Hooks///////////////
export function useTvShows(): ResTv {
  const config: Config = {
    endpoint: "tv/popular",
    language: "pt-BR",
    page: "1",
  };

  const { data, error } = useSWR<DataTv, Error>(
    `${config.endpoint}?&language=${config.language}&page=${config.page}`,
    fetcher
  );
  let tvshows: Tv[];

  if (data) {
    tvshows = data.results.slice(0, 15).map(
      (tv): Tv => {
        return {
          name: tv.name,
          original_name: tv.name,
          id: tv.id,
          poster_path: tv.poster_path,
          overview: tv.overview,
          backdrop_path: tv.backdrop_path,
        };
      }
    );
  }

  return {
    tvshows,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useTvDetail(id): ResTvDetail {
  let shouldFetch = true;

  if (id === undefined || id === "") shouldFetch = false;
  const config: Config = {
    endpoint: `tv/${id}`,
    language: "pt-BR",
  };

  const { data, error } = useSWR<TvDetail, Error>(
    () =>
      shouldFetch ? `${config.endpoint}?&language=${config.language}` : null,
    fetcher
  );
  const { data: creditsData, error: creditsError } = useSWR<Credits, Error>(
    () =>
      shouldFetch
        ? `${config.endpoint}/credits?&language=${config.language}`
        : null,
    fetcher
  );
  let tvshow: TvDetail;

  if (!error && data && creditsData && !creditsError) {
    tvshow = {
      id: data.id,
      name: data.name,
      poster_path: data.poster_path,
      backdrop_path: data.backdrop_path,
      genres: data.genres,
      original_name: data.original_name,
      overview: data.overview,
      tagline: data.tagline,
      cast: creditsData.cast.map(
        (actor): Cast => {
          return {
            id: actor.id,
            name: actor.name,
            character: actor.character,
            known_for_department: actor.known_for_department,
            order: actor.order,
            profile_path: actor.profile_path,
          };
        }
      ),
      created_by: data.created_by,
      episode_run_time: data.episode_run_time,
      first_air_date: data.first_air_date,
      networks: data.networks,
      number_of_episodes: data.number_of_episodes,
      number_of_seasons: data.number_of_seasons,
      seasons: data.seasons.map((season) => {
        return {
          air_date: format(new Date(season.air_date), "yyyy", {
            locale: ptBR,
          }),
          episode_count: season.episode_count,
          id: season.id,
          name: season.name,
          overview: season.overview,
          poster_path: season.poster_path,
          season_number: season.season_number,
        };
      }),
    };
  }
  return {
    tvshow,

    isLoading: !error && !data,
    isError: error,
  };
}

export function useSeasons(id): ResSeason {
  let shouldFetch = true;

  if (id === undefined || id === "") shouldFetch = false;
  const config: Config = {
    endpoint: `tv/${id}`,
    language: "pt-BR",
  };

  const { data, error } = useSWR<TvDetail, Error>(
    () =>
      shouldFetch ? `${config.endpoint}?&language=${config.language}` : null,
    fetcher
  );

  let seasons: Season[];
  let name: string;
  let idTv: number;
  let number_of_seasons: number;

  if (!error && data) {
    seasons = data.seasons;
    name = data.name;
    idTv = data.id;
    number_of_seasons = data.number_of_seasons;
  }
  return {
    seasons,
    name,
    id: idTv,
    number_of_seasons,
    isLoading: !error && !data,
    isError: error,
  };
}
export function useSeasonDetail(tvshowId, seasonNumber): ResSeasonDetail {
  let shouldFetch = true;

  if (!tvshowId || tvshowId === "" || !seasonNumber || seasonNumber == "")
    shouldFetch = false;
  const config: Config = {
    endpoint: `tv/${tvshowId}/season/${seasonNumber}`,
    language: "pt-BR",
  };

  const { data, error } = useSWR<SeasonDetail, Error>(
    () =>
      shouldFetch ? `${config.endpoint}?&language=${config.language}` : null,
    fetcher
  );

  let season: SeasonDetail;

  if (!error && data) {
    season = {
      id: data.id,
      air_date: data.air_date,
      episode_count: data.episode_count,
      name: data.name,
      overview: data.overview,
      poster_path: data.poster_path,
      season_number: data.season_number,
      episodes: data.episodes.map((episode) => {
        return {
          name: episode.name,
          air_date: format(
            new Date(episode.air_date),
            "d 'de' MMMM 'de' yyyy",
            {
              locale: ptBR,
            }
          ),
          episode_number: episode.episode_number,
          overview: episode.overview,
          still_path: episode.still_path,
        };
      }),
    };
  }
  return {
    season,
    isLoading: !error && !data,
    isError: error,
  };
}

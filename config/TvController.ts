import useSWR from "swr";
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
    tvshows = data.results.map(
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

export function useTvDetail(id: string): ResTvDetail {
  const config: Config = {
    endpoint: `tv/${id}`,
    language: "pt-BR",
  };

  const { data, error } = useSWR<TvDetail, Error>(
    `${config.endpoint}?&language=${config.language}`,
    fetcher
  );
  const { data: creditsData, error: creditsError } = useSWR<Credits, Error>(
    `${config.endpoint}/credits?&language=${config.language}`,
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
    };
  }
  return {
    tvshow,

    isLoading: !error && !data,
    isError: error,
  };
}

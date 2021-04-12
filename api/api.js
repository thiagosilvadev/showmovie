import useSWR from "swr";

const fetcher = (args) =>
  fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${args}?&language=pt-BR&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then((res) => res.json());

function useMovies(endpoint) {
  const { data, error } = useSWR(endpoint, fetcher);

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useMovies;

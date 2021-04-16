export interface Config {
  endpoint: string;
  language: string;
  page?: string;
}

const fetcher = (args: string) =>
  fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${args}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then((res) => res.json());

export default fetcher;

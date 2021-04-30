import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";
const HeroForm = () => {
  const [query, setQuery] = React.useState("");
  const router = useRouter();

  function search(e) {
    e.preventDefault();
    if (query !== "") router.push(`/search/${encodeURI(query)}`);
    // console.log(query);
  }
  return (
    <div className="relative w-full h-72 flex items-center justify-center mt-7">
      <div className="z-20 w-10/12 rounded text-white">
        <h1 className="font-semibold text-xl md:text-3xl">
          Bem vindo(a) ao ShowMovie!
        </h1>
        <h2 className="font-medium text-lg md:text-2xl">
          Encontre milhares de filmes e séries, faça a sua pesquisa:
        </h2>

        <form
          action=""
          className="text-dark mt-8 md:mt-10 w-full flex"
          onSubmit={search}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-l-full px-2 py-2 text-sm md:text-base md:px-4 w-full md:py-2 focus:outline-none border-2 border-white  focus:border-light transition"
            placeholder="Ex: Breaking Bad"
          />
          <button
            type="submit"
            className="bg-purple transition hover:bg-light focus:bg-light border-2 border-purple hover:border-light focus:border-light inline-block px-2 py-2 text-sm md:text-base md:px-4 rounded-full font-normal text-white -ml-5"
          >
            Pesquisar
          </button>
        </form>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="rounded w-full h-full absolute top-0 left-0 bg-light bg-opacity-30 z-10"></div>
        <img
          src="https://www.themoviedb.org/t/p/original/34OGjFEbHj0E3lE2w0iTUVq0CBz.jpg"
          alt=""
          className="rounded w-full h-full absolute top-0 left-0 object-cover z-0"
        />
      </div>
    </div>
  );
};
export default HeroForm;

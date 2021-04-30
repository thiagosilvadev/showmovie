import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

import { useRouter } from "next/router";
import Button from "./Button";

export const navBase = [
  {
    name: "Início",
    path: "/",
    active: false,
  },
  {
    name: "Filmes",
    path: "/movies",
    active: false,
  },
  {
    name: "Séries",
    path: "/tv",
    active: false,
  },
];

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = React.useState("");

  const router = useRouter();

  function search(e) {
    e.preventDefault();
    if (query !== "") router.push(`/search/${encodeURI(query)}`);
    setSearchOpen(false);
  }

  return (
    <header className="bg-dark relative w-full p-6">
      <div className="container mx-auto flex flex-col md:flex-row  justify-between items-center text-white">
        <a className="mb-4 md:mb-0" href="/">
          <Logo />
        </a>
        <Nav navItems={navBase}>
          <button onClick={(e) => setSearchOpen(!searchOpen)}>
            {searchOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            )}
          </button>
        </Nav>
      </div>
      {searchOpen && (
        <div
          className={`${
            !searchOpen ? "translate-y-2/4" : "translate-y-full"
          } absolute bottom-0 z-30 left-0 transform transition-transform duration-200 bg-dark text-white w-full`}
        >
          <div className="container px-2 md:p-0  mx-auto py-8">
            <h2 className="font-medium text-base md:text-lg">
              Faça a sua pesquisa:
            </h2>

            <form
              action=""
              className="text-dark mt-4 w-full flex"
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
        </div>
      )}
    </header>
  );
}

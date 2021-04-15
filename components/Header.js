import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const navItems = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Filmes",
    path: "/filmes",
  },
  {
    name: "Séries",
    path: "/series",
  },
];

export default function Header() {
  return (
    <header className="bg-dark w-full p-6">
      <div className="container mx-auto flex justify-between items-center text-white">
        <a className="flex justify-start" href="/">
          <Logo />
        </a>
        <Nav navItems={navItems} />
      </div>
    </header>
  );
}

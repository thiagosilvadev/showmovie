import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

export const navBase = [
  {
    name: "Início",
    path: "/",
    active: false,
  },
  {
    name: "Filmes",
    path: "/filmes",
    active: false,
  },
  {
    name: "Séries",
    path: "/series",
    active: false,
  },
];

export function Header() {
  // const [navItems, setNavItems] = React.useState<typeof navBase>([]);

  return (
    <header className="bg-dark w-full p-6">
      <div className="container mx-auto flex justify-between items-center text-white">
        <a className="flex justify-start" href="/">
          <Logo />
        </a>
        <Nav navItems={navBase} />
      </div>
    </header>
  );
}

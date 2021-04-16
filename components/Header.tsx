import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

interface Props {
  active: string;
}

const navBase = [
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

const Header: React.FC<Props> = ({ active }) => {
  const [navItems, setNavItems] = React.useState<typeof navBase>([]);
  React.useEffect(() => {
    setNavItems(
      navBase.map((item) => {
        if (item.name === active) {
          item.active = true;
        }
        return item;
      })
    );
  }, [active]);

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
};

export default Header;

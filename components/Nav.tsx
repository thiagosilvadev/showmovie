import React from "react";
import Link from "next/link";
import { SearchIcon } from "./icons/SearchIcon";

interface Props {
  navItems: {
    name: string;
    path: string;
    active: boolean;
  }[];
}

const Nav: React.FC<Props> = ({ navItems }) => {
  return (
    <nav className="flex items-center">
      <ul className="flex mr-12 items-center">
        {navItems.map((navItem) => (
          <li
            className={`${
              navItem.active && "active"
            } nav-item ml-8 opacity-75 transition-opacity hover:opacity-100 duration-100`}
            key={navItem.path}
          >
            <Link href={navItem.path}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
      <SearchIcon />
    </nav>
  );
};

export default Nav;

import React from "react";
import { SearchIcon } from "./icons/SearchIcon";

export default function Nav({ navItems }) {
  return (
    <nav className="flex items-center">
      <ul className="flex mr-12 items-center">
        {navItems.map((navItem) => (
          <li
            className="nav-item ml-8 opacity-75 transition-opacity hover:opacity-100 duration-100"
            key={navItem.path}
          >
            <a href={navItem.path}>{navItem.name}</a>
          </li>
        ))}
      </ul>
      <SearchIcon />
    </nav>
  );
}

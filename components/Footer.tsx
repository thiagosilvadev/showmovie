import Logo from "./Logo";
import { navBase } from "./Header";

export function Footer() {
  return (
    <footer className="bg-dark mt-8 text-white">
      <div className="container mx-auto py-6 px-24">
        <div className="flex justify-between">
          <div>
            <Logo />
            <nav>
              <ul className="flex mt-9">
                {navBase.map((item) => (
                  <li
                    className="nav-item mr-4 opacity-75 transition-opacity hover:opacity-100 duration-100"
                    key={item.path}
                  >
                    <a href={item.path}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <a href="#">Voltar ao topo</a>
        </div>

        <div className="pt-11 pb-4 text-center">
          <p className="text-sm">
            2021 - Dados providos por{" "}
            <a
              className="text-light"
              href="https://developers.themoviedb.org/3/"
            >
              themoviedb.org
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

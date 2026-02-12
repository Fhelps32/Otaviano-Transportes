import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logoTransportadora.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "px-3 py-2 rounded-xl text-md font-medium transition w-full md:w-auto text-center",
      isActive
        ? "bg-black/10 text-black pointer-events-none"
        : "text-black/70 hover:text-black hover:bg-black/5",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-sm">
      <div className="relative flex h-16 w-full items-center justify-between px-6">
        <div className="flex w-full items-center justify-between md:w-60 md:justify-start">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <img src={logo} alt="logo" className="h-9 w-auto md:h-10.5" />
          </Link>

          {/* Botão Hamburger (Apenas Mobile) */}
          <button
            className="p-2 text-black md:hidden"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* 2. Centro: Navegação (Centralizada no Desktop) */}
        <nav
          className={`
            absolute top-16 left-0 w-full border-b border-black/5 bg-white p-6 transition-all duration-300 
            md:static md:flex md:flex-1 md:items-center md:justify-center md:border-none md:bg-transparent md:p-0
            ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto"}
          `}
        >
          <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2">
            <li>
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/servicos"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rastreio"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Rastreio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contato"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Contato
              </NavLink>
            </li>

            <li className="mt-4 w-full md:hidden">
              <Link
                to="/fretebot"
                onClick={() => setIsOpen(false)}
                className="flex h-12 items-center justify-center rounded-xl bg-black font-bold text-white"
              >
                Cotação Online
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex md:w-60 items-center justify-end">
          <Link
            to="/fretebot"
            className="rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 active:scale-[0.99]"
          >
            Cotação Online
          </Link>
        </div>
      </div>
    </header>
  );
}

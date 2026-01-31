import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logoTransportadora.png";

export default function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "px-3 py-2 rounded-xl text-md font-medium transition",
      isActive ?
        "bg-black/10 text-black pointer-events-none"
      : "text-black/70 hover:text-black hover:bg-black/5",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-sm backdrop-brightness-200">
      <div className="relative flex h-16 w-full items-center px-6 max-[820px]:px-4">
        {/* Logo */}
        <div className="w-55 flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10.5 w-auto" />
          </Link>
        </div>

        {/* Nav */}
        <nav
          className="flex-1 max-[820px]:hidden"
          aria-label="Navegação principal"
        >
          <ul className="flex items-center justify-center gap-2">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobre" className={navLinkClass}>
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/servicos" className={navLinkClass}>
                Serviços
              </NavLink>
            </li>
            <li>
              <NavLink to="/rastreio" className={navLinkClass}>
                Rastreio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contato" className={navLinkClass}>
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Button */}
        <div className="w-55 flex items-center justify-end">
          <Link
            to="/fretebot"
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 active:scale-[0.99]"
          >
            Cotação Online
          </Link>
        </div>
      </div>
    </header>
  );
}

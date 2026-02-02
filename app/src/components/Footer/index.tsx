import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* FALE CONOSCO */}
          <div>
            <h4 className="mb-6 text-md font-extrabold text-black">
              Fale Conosco
            </h4>

            <ul className="space-y-4 text-sm text-black/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-black/90"></Phone>
                <span>(24) 98146-4694</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-black/90"></Mail>
                <span>otaviano.comercial@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-black/90"></MapPin>
                <span>
                  R. Nossa Sra. de Fátima - Fátima
                  <br />
                  Barra do Piraí - RJ, 27163-430
                </span>
              </li>
            </ul>
          </div>

          {/* SERVIÇOS */}
          <div>
            <h4 className="mb-6 text-md font-extrabold text-black">Serviços</h4>

            <ul className="space-y-3 text-sm text-black/70">
              <li>Carga Fracionada</li>
              <li>Carga Lotação</li>
              <li>Logística Integrada</li>
              <li>Cotação Online</li>
            </ul>
          </div>

          {/* INSTITUCIONAL */}
          <div>
            <h4 className="mb-6 text-md font-extrabold text-black">
              Institucional
            </h4>

            <ul className="space-y-3 text-sm text-black/70">
              <li>
                <Link to="/trabalheconosco">Trabalhe Conosco</Link>
              </li>
              <li>Política de Privacidade</li>
              <li>Termos de Uso</li>
            </ul>
          </div>

          {/* SOBRE + CTA */}
          <div>
            <h4 className="mb-6 text-md font-extrabold text-black">
              Otaviano Transportes
            </h4>

            <p className="mb-6 text-sm leading-relaxed text-black/70">
              Mais de 5 anos de experiência em logística e transporte,
              conectando o Brasil com segurança e eficiência.
            </p>

            <a
              href="/fretebot"
              className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110 active:scale-[0.98]"
            >
              Solicitar Cotação
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-black/10 py-6 text-center text-xs text-black/50">
        © Otaviano Transportes Ltda. Todos os direitos reservados. CNPJ:
        39.278.343/0001-58
      </div>
    </footer>
  );
}

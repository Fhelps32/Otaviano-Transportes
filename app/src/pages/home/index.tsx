import HeroCarousel from "../../components/Carousel";
import {
  Clock3,
  Shield,
  Truck,
  Heart,
  Eye,
  Target,
  Package,
  Wrench,
  Search,
  MessageCircle,
  PackageCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const heroImages = [
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1485575301924-6891ef935dcd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1745956983820-6e960f7e8472?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <main className="w-full">
      {/* SECTION 1 */}
      <section id="inicio" className="relative w-full overflow-hidden">
        <div className="relative min-h-140 w-full">
          {/* BACKGROUND CAROUSEL */}
          <HeroCarousel images={heroImages} intervalMs={4500} />

          {/* overlays */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20" />

          {/* CONTENT */}
          <div className="relative mx-auto grid min-h-140 max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2">
            {/* LEFT */}
            <div className="text-white">
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                Logística de Confiança
              </h1>

              <h2 className="mt-3 text-3xl font-extrabold text-white/80 sm:text-4xl">
                Otaviano Transportes Ltda
              </h2>

              <p className="mt-6 max-w-xl text-xl leading-relaxed text-white/90">
                Seu parceiro especialista em transporte de cargas fracionadas e
                lotação, garantindo segurança e pontualidade em todo o país.
              </p>

              <ul className="mt-8 flex flex-wrap items-center gap-8 text-md text-white/90">
                <li className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-stone-300" />
                  Segurança Reforçada
                </li>
                <li className="flex items-center gap-2">
                  <Clock3 className="h-6 w-6 text-stone-300" />
                  Entregas Pontuais
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="h-6 w-6 text-stone-300" />
                  Frota Moderna
                </li>
              </ul>

              <div className="links flex gap-10">
                <Link
                  to="/fretebot"
                  className="mt-10 inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-md font-bold text-white backdrop-blur-sm transition hover:bg-white/15 active:scale-[0.98]"
                >
                  Solicitar Cotação
                </Link>

                <Link
                  to="/rastreio"
                  className="mt-10 inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-md font-bold text-white backdrop-blur-sm transition hover:bg-white/15 active:scale-[0.98]"
                >
                  Rastrear Encomenda
                </Link>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-full">
              <div className="rounded-2xl bg-white p-6 shadow-2xl">
                <h3 className="text-xl font-extrabold text-black">
                  Cotação Expressa (24h)
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-black/70">
                      CEP Origem
                    </label>
                    <input
                      className="h-11 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none placeholder:text-black/50 focus:border-black/30 focus:ring-4 focus:ring-black/10"
                      placeholder="00000-000"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-black/70">
                      CEP Destino
                    </label>
                    <input
                      className="h-11 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none placeholder:text-black/50 focus:border-black/30 focus:ring-4 focus:ring-black/50"
                      placeholder="00000-000"
                    />
                  </div>

                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className="text-xs font-semibold text-black/70">
                      Peso (Kg)
                    </label>
                    <input
                      className="h-11 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none placeholder:text-black/30 focus:border-black/30 focus:ring-4 focus:ring-black/10"
                      placeholder="Ex: 100"
                    />
                  </div>

                  <button className="mt-2 h-11 w-full rounded-xl bg-black text-sm font-bold text-white transition hover:brightness-110 active:scale-[0.99] sm:col-span-2">
                    Calcular Frete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 2 */}
      <section className="mx-auto max-w-7xl px-6 py-20" id="sobre">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-black md:text-4xl">
            A Solidez que Move Sua Carga
          </h2>
          <p className="mt-5 text-base text-black md:text-lg">
            Fundada em 2020, a Otaviano Transportes Ltda é sinônimo de
            excelência e comprometimento no mercado logístico. Nossa estrutura é
            desenhada para oferecer soluções que superam as expectativas, focada
            na segurança e na tecnologia.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-black/5 p-10 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold">Missão</h3>
            <p className="mt-4 text-sm leading-relaxed text-black/80">
              Transportar mercadorias com a máxima segurança, minimizando prazos
              e fornecendo informações precisas em tempo real.
            </p>
          </div>

          <div className="rounded-2xl bg-black/5 p-10 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold">Visão</h3>
            <p className="mt-4 text-sm leading-relaxed text-black/80">
              Ser a transportadora referência nacional em eficiência,
              reconhecida pela excelência operacional e pela parceria com
              clientes.
            </p>
          </div>

          <div className="rounded-2xl bg-black/5 p-10 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold">Valores</h3>
            <p className="mt-4 text-sm leading-relaxed text-black/80">
              Ética inegociável, comprometimento com resultados e inovação
              contínua em todos os nossos processos.
            </p>
          </div>
        </div>
      </section>
      {/* SECTION 3 */}
      <section id="servicos" className="w-full bg-black/3 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-black md:text-4xl">
              Nossas Soluções Logísticas
            </h2>
            <p className="mt-5 text-base text-black/70 md:text-lg">
              Oferecemos serviços completos de transporte com tecnologia
              avançada e atendimento personalizado.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* CARD 1 */}
            <div className="group rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-white">
                  <Package className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black">
                    Carga Fracionada
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">
                    Distribuição eficiente de pequenos e médios volumes, com
                    coleta e entrega programada em 14 estados.
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-black/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/60" />
                      Coleta programada
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/60" />
                      Rastreamento em tempo real
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/60" />
                      Seguro incluso
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-white">
                  <Truck className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black">
                    Carga Lotação
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">
                    Veículo dedicado e exclusivo para sua mercadoria, com rotas
                    otimizadas e maior agilidade no transporte.
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-black/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/60" />
                      Veículo exclusivo
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/60" />
                      Roteiros otimizados
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/60" />
                      Maior agilidade
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-white">
                  <Wrench className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black">
                    Logística Integrada
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">
                    Serviços door-to-door, gestão de estoque e soluções
                    personalizadas para demandas de grande volume e
                    complexidade.
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-black/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/60" />
                      Soluções personalizadas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/60" />
                      Gestão de estoque
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/60" />
                      Consultoria logística
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 mt-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold text-black md:text-4xl">
              Abrangência Nacional
            </h2>
            <p className="mt-5 text-base text-black/70 md:text-lg">
              Atendemos mais de 3.600 cidades em 14 estados brasileiros, com
              unidades operacionais estrategicamente posicionadas para garantir
              a sua entrega.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="rounded-2xl border border-black/10 bg-white p-10 shadow-md">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {/* LEFT */}
              <div>
                <h3 className="text-lg font-extrabold text-black">
                  Estados Atendidos
                </h3>

                <ul className="mt-6 grid grid-cols-1 gap-y-3 text-sm text-black/80 sm:grid-cols-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Rio de Janeiro
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    São Paulo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Minas Gerais
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Espírito Santo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Bahia
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Goiás
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Distrito Federal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Paraná
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Santa Catarina
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Rio Grande do Sul
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Mato Grosso
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Mato Grosso do Sul
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Tocantins
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Sergipe
                  </li>
                </ul>
              </div>

              {/* RIGHT */}
              <div>
                <h3 className="text-lg font-extrabold text-black">
                  Principais Rotas
                </h3>

                <ul className="mt-6 space-y-3 text-sm text-black/80">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Rio de Janeiro ↔ São Paulo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Belo Horizonte ↔ Vitória
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Salvador ↔ Brasília
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Curitiba ↔ Porto Alegre
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
                    Goiânia ↔ Campo Grande
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/70" />E
                    muitas outras rotas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section id="rastreio" className="relative w-full py-20">
        {/* background */}
        <div className="absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.25]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-black/70 shadow-sm backdrop-blur">
              <PackageCheck className="h-4 w-4" />
              Rastreamento em tempo real
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-black md:text-5xl">
              Rastreie sua Encomenda
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-black/60 md:text-lg">
              Acompanhe sua carga em tempo real com nosso sistema de
              rastreamento avançado e atualizações rápidas.
            </p>
          </div>

          {/* card */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 p-6 shadow-xl backdrop-blur md:p-10">
              {/* glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl" />

              <div className="relative flex flex-col gap-4 md:flex-row md:items-center">
                {/* input */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/40" />
                  <input
                    className="h-12 w-full rounded-2xl border border-black/10 bg-white pl-12 pr-4 text-sm outline-none placeholder:text-black/40 focus:border-black/30 focus:ring-4 focus:ring-black/10"
                    placeholder="Digite o número da Nota Fiscal ou CT-e"
                  />
                </div>

                {/* button */}
                <Link
                  to="/rastreio"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-black px-6 text-sm font-extrabold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
                >
                  <Search className="h-5 w-5" />
                  Acompanhar Envio
                </Link>
              </div>

              {/* helper text */}
              <div className="relative mt-6 text-center text-sm text-black/60">
                Você também pode rastrear pelo WhatsApp:{" "}
                <a
                  href="https://wa.me/5524981463045"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black"
                >
                  <MessageCircle className="h-4 w-4" />
                  (24) 98146-3045
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

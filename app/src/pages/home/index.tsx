import HeroCarousel from "../../components/Carousel";
import { useState } from "react";
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
  ChevronDown,
  PackageCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import api from "../../api/apiClient";

export function AbrangenciaSection() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    if (window.innerWidth < 768) {
      setOpenAccordion(openAccordion === id ? null : id);
    }
  };

  const estados = [
    "Rio de Janeiro",
    "São Paulo",
    "Minas Gerais",
    "Espírito Santo",
    "Bahia",
    "Goiás",
    "Distrito Federal",
    "Paraná",
    "Santa Catarina",
    "Rio Grande do Sul",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Tocantins",
    "Sergipe",
  ];

  const rotas = [
    "Rio de Janeiro ↔ São Paulo",
    "Belo Horizonte ↔ Vitória",
    "Salvador ↔ Brasília",
    "Curitiba ↔ Porto Alegre",
    "Goiânia ↔ Campo Grande",
    "E muitas outras rotas",
  ];

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-black md:text-4xl">
            Abrangência Nacional
          </h2>
          <p className="mt-5 text-base text-black/70 md:text-lg">
            Atendemos mais de 3.600 cidades em 14 estados brasileiros, com
            unidades operacionais estrategicamente posicionadas.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-black/5">
            {/* ACORDEÃO 1: ESTADOS */}
            <div className="flex flex-col border-b md:border-b-0 border-black/5">
              <button
                onClick={() => toggleAccordion("estados")}
                className="flex w-full items-center justify-between p-6 text-left md:pointer-events-none"
              >
                <h3 className="text-lg font-extrabold text-black">
                  Estados Atendidos
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-black/40 transition-transform duration-300 md:hidden ${
                    openAccordion === "estados" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 md:max-h-none ${
                  openAccordion === "estados"
                    ? "max-h-125"
                    : "max-h-0 md:max-h-full"
                }`}
              >
                <ul className="grid grid-cols-1 gap-y-3 p-6 pt-0 text-sm text-black/80 sm:grid-cols-2">
                  {estados.map((estado) => (
                    <li key={estado} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black/70" />
                      {estado}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ACORDEÃO 2: ROTAS */}
            <div className="flex flex-col">
              <button
                onClick={() => toggleAccordion("rotas")}
                className="flex w-full items-center justify-between p-6 text-left md:pointer-events-none"
              >
                <h3 className="text-lg font-extrabold text-black">
                  Principais Rotas
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-black/40 transition-transform duration-300 md:hidden ${
                    openAccordion === "rotas" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 md:max-h-none ${
                  openAccordion === "rotas"
                    ? "max-h-125"
                    : "max-h-0 md:max-h-full"
                }`}
              >
                <ul className="space-y-3 p-6 pt-0 text-sm text-black/80">
                  {rotas.map((rota) => (
                    <li key={rota} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black/70" />
                      {rota}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const heroImages = [
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1485575301924-6891ef935dcd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1745956983820-6e960f7e8472?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    cepOrigem: "",
    cepDestino: "",
    cargaPeso: "",
    email: "",
    valorNota: "",
  });

  const [notaFiscal, setNotaFiscal] = useState("");

  const handleRastrearEnvio = async (e: React.MouseEvent) => {
    e.preventDefault(); // Evita a navegação do Link se o campo estiver vazio

    if (!notaFiscal) {
      alert("Por favor, digite o número da Nota Fiscal ou CT-e.");
      return;
    }

    try {
      const response = await api.post("/enviar-rastreio", {
        notaFiscal: notaFiscal,
      });

      if (response.data.success) {
        alert(
          "Solicitação de rastreio enviada! Verifique seu e-mail em breve.",
        );
        setNotaFiscal("");
      }
    } catch (error) {
      console.error("Erro ao solicitar rastreio:", error);
      alert("Erro ao processar o rastreio. Tente novamente mais tarde.");
    }
  };

  // Função para atualizar os campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCalcularFrete = async () => {
    try {
      // O endpoint mapeado no seu Laravel é /enviar-expresso
      const response = await api.post("/enviar-expresso", {
        cepOrigem: formData.cepOrigem,
        cepDestino: formData.cepDestino,
        cargaPeso: parseFloat(formData.cargaPeso),
        valorNota: formData.valorNota,
        email: formData.email,
      });

      if (response.data.success) {
        alert("Solicitação de cotação enviada com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao enviar cotação:", error);
      alert(
        "Falha ao enviar a cotaation. Verifique os dados e tente novamente.",
      );
    }
  };

  return (
    <main className="w-full">
      {/* SECTION 1 */}
      <section id="inicio" className="relative w-full overflow-hidden">
        <div className="relative min-h-140 w-full">
          {/* BACKGROUND CAROUSEL */}
          <HeroCarousel images={heroImages} intervalMs={4500} />

          {/* overlays */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/25" />

          {/* CONTENT */}
          <div className="relative mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:min-h-160 lg:grid-cols-2">
            {/* LEFT */}
            <div className="text-white">
              <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                Logística de Confiança
              </h1>

              <h2 className="mt-3 text-2xl font-extrabold text-white/80 sm:text-4xl">
                Otaviano Transportes Ltda
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-xl">
                Seu parceiro especialista em transporte de cargas fracionadas e
                lotação, garantindo segurança e pontualidade em todo o país.
              </p>

              {/* FEATURES */}
              <ul className="mt-7 flex flex-wrap gap-3 text-sm text-white/90 sm:gap-4">
                <li className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  <Shield className="h-4 w-4 text-stone-200" />
                  Segurança Reforçada
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  <Clock3 className="h-4 w-4 text-stone-200" />
                  Entregas Pontuais
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                  <Truck className="h-4 w-4 text-stone-200" />
                  Frota Moderna
                </li>
              </ul>

              {/* BOTÕES */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
                <Link
                  to="/fretebot"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-black shadow-lg transition hover:brightness-95 active:scale-[0.98] sm:w-auto"
                >
                  Solicitar Cotação
                </Link>

                <Link
                  to="/rastreio"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur-sm transition hover:bg-white/15 active:scale-[0.98] sm:w-auto"
                >
                  Rastrear Encomenda
                </Link>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="hidden w-full lg:block">
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
                      name="cepOrigem"
                      value={formData.cepOrigem}
                      onChange={handleChange}
                      type="text"
                      className="h-11 rounded-xl border border-black/10
                  bg-white px-4 text-sm outline-none placeholder:text-black/50
                  focus:border-black/30 focus:ring-4 focus:ring-black/15"
                      placeholder="00000-000"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-black/70">
                      CEP Destino
                    </label>
                    <input
                      name="cepDestino"
                      value={formData.cepDestino}
                      onChange={handleChange}
                      type="text"
                      className="h-11 rounded-xl border border-black/10
                  bg-white px-4 text-sm outline-none placeholder:text-black/50
                  focus:border-black/30 focus:ring-4 focus:ring-black/15"
                      placeholder="00000-000"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-black/70">
                      Peso (Kg)
                    </label>
                    <input
                      name="cargaPeso"
                      value={formData.cargaPeso}
                      onChange={handleChange}
                      type="number"
                      className="h-11 rounded-xl border border-black/10
                  bg-white px-4 text-sm outline-none placeholder:text-black/50
                  focus:border-black/30 focus:ring-4 focus:ring-black/15"
                      placeholder="Ex: 100"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-black/70">
                      Email
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="h-11 rounded-xl border border-black/10
                  bg-white px-4 text-sm outline-none placeholder:text-black/50
                  focus:border-black/30 focus:ring-4 focus:ring-black/15"
                      placeholder="email@exemplo.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className="text-xs font-semibold text-black/70">
                      Nota Fiscal
                    </label>
                    <input
                      name="valorNota"
                      value={formData.valorNota}
                      onChange={handleChange}
                      type="number"
                      className="h-11 rounded-xl border border-black/10
                  bg-white px-4 text-sm outline-none placeholder:text-black/50
                  focus:border-black/30 focus:ring-4 focus:ring-black/15"
                      placeholder="Ex: 123.456.789"
                    />
                  </div>

                  <button
                    onClick={handleCalcularFrete}
                    className="mt-2 h-11 w-full rounded-xl bg-black text-sm font-bold text-white transition hover:brightness-110 active:scale-[0.99] sm:col-span-2"
                  >
                    Calcular Frete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE: COTAÇÃO ABAIXO DO HERO */}
      <section className="mx-auto mt-10 max-w-7xl px-4 pb-10 lg:hidden">
        <div className="rounded-2xl bg-white p-6 shadow-2xl">
          <h3 className="text-lg font-extrabold text-black">
            Cotação Expressa (24h)
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-black/70">
                CEP Origem
              </label>
              <input
                type="number"
                className="h-11 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none placeholder:text-black/50 focus:border-black/30 focus:ring-4 focus:ring-black/15"
                placeholder="00000-000"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-black/70">
                CEP Destino
              </label>
              <input
                type="number"
                className="h-11 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none placeholder:text-black/50 focus:border-black/30 focus:ring-4 focus:ring-black/15"
                placeholder="00000-000"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-black/70">
                Peso (Kg)
              </label>
              <input
                type="number"
                className="h-11 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none placeholder:text-black/30 focus:border-black/30 focus:ring-4 focus:ring-black/15"
                placeholder="Ex: 100"
              />
            </div>

            <button className="h-11 w-full rounded-xl bg-black text-sm font-bold text-white transition hover:brightness-110 active:scale-[0.99]">
              Calcular Frete
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="mx-auto my-7 max-w-7xl px-6 py-20" id="sobre">
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
              <Target className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-bold">Missão</h3>
            <p className="mt-4 text-sm leading-relaxed text-black/80">
              Transportar mercadorias com a máxima segurança, minimizando prazos
              e fornecendo informações precisas em tempo real.
            </p>
          </div>

          <div className="rounded-2xl bg-black/5 p-10 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
              <Eye className="h-8 w-8" />
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
              <Heart className="h-8 w-8" />
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
            <div className="group rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
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
            <div className="group rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
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
            <div className="group rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
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

        <AbrangenciaSection />
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
                    value={notaFiscal}
                    onChange={(e) => setNotaFiscal(e.target.value)}
                    className="h-12 w-full rounded-2xl border border-black/10 bg-white pl-12 pr-4 text-sm outline-none placeholder:text-black/40 focus:border-black/30 focus:ring-4 focus:ring-black/15 focus:placeholder:text-black/70 hidden lg:block"
                    placeholder="Digite o número da Nota Fiscal ou CT-e"
                  />
                  <input
                    value={notaFiscal}
                    onChange={(e) => setNotaFiscal(e.target.value)}
                    className="h-12 w-full rounded-2xl border border-black/10 bg-white pl-12 pr-4 text-sm outline-none placeholder:text-black/40 focus:border-black/30 focus:ring-4 focus:ring-black/15 focus:placeholder:text-black/70 lg:hidden"
                    placeholder="Digite a Nota Fiscal ou CT-e"
                  />
                </div>

                {/* button */}
                <button
                  onClick={handleRastrearEnvio}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-black px-6 text-sm font-extrabold text-white shadow-lg transition hover:brightness-110 active:scale-[0.99]"
                >
                  <Search className="h-5 w-5" />
                  Acompanhar Envio
                </button>
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

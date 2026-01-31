import {
  Package,
  Truck,
  Wrench,
  CheckCircle2,
  BadgeDollarSign,
  Phone,
  Calculator,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <main className="w-full bg-white">
      {/* SECTION 1 */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-extrabold text-black md:text-5xl">
            Nossos Serviços
          </h1>
          <p className="mt-4 text-lg text-black/60">
            Soluções completas em transporte e logística para atender todas as
            suas necessidades.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-black md:text-4xl">
            Nossas Soluções Logísticas
          </h2>
          <p className="mt-4 text-black/60">
            Oferecemos serviços completos de transporte com tecnologia avançada
            e atendimento personalizado.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* CARGA FRACIONADA */}
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
              <Package className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-black">
              Carga Fracionada
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-black/70">
              Distribuição eficiente de pequenos e médios volumes. Coleta e
              entrega programada com abrangência em 14 estados.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Coleta programada",
                "Rastreamento em tempo real",
                "Seguro incluso",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-black/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-black/40" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CARGA LOTAÇÃO */}
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-black">Carga Lotação</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/70">
              Veículo dedicado e exclusivo para sua mercadoria. Roteiros
              otimizados para redução de transit time.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Veículo exclusivo",
                "Roteiros otimizados",
                "Maior agilidade",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-black/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-black/40" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* LOGÍSTICA INTEGRADA */}
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
              <Wrench className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-black">
              Logística Integrada
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-black/70">
              Serviços door-to-door, gestão de estoque e soluções personalizadas
              para demandas de grande volume.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Soluções personalizadas",
                "Gestão de estoque",
                "Consultoria logística",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-black/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-black/40" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-black">
            Como Trabalhamos
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Cotação",
                desc: "Solicite sua cotação online ou por telefone",
                icon: BadgeDollarSign,
              },
              {
                step: "2",
                title: "Coleta",
                desc: "Agendamos a coleta no local e horário desejado",
                icon: Package,
              },
              {
                step: "3",
                title: "Transporte",
                desc: "Sua carga é transportada com segurança total",
                icon: Truck,
              },
              {
                step: "4",
                title: "Entrega",
                desc: "Entrega no prazo com comprovante assinado",
                icon: CheckCircle2,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white text-xl font-bold">
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-[10px] text-black">
                    {item.step}
                  </span>
                  <item.icon className="h-7 w-7" />
                </div>
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="mt-2 text-sm text-black/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-gray-50 p-10 md:p-16">
          <h2 className="text-center text-3xl font-extrabold text-black">
            Por que Escolher a Otaviano?
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                title: "Cobertura Nacional",
                desc: "Atendemos todo o território brasileiro",
                icon: CheckCircle2,
              },
              {
                title: "Rastreamento Online",
                desc: "Acompanhe sua carga em tempo real",
                icon: CheckCircle2,
              },
              {
                title: "Seguro Incluso",
                desc: "Proteção total da sua mercadoria",
                icon: CheckCircle2,
              },
              {
                title: "Prazos Garantidos",
                desc: "Compromisso com pontualidade",
                icon: CheckCircle2,
              },
              {
                title: "Suporte 24h",
                desc: "Atendimento sempre disponível",
                icon: CheckCircle2,
              },
              {
                title: "Preços Competitivos",
                desc: "Melhor custo-benefício do mercado",
                icon: CheckCircle2,
              },
            ].map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <benefit.icon className="h-6 w-6 shrink-0 text-black" />
                <div>
                  <h4 className="font-bold text-black">{benefit.title}</h4>
                  <p className="text-sm text-black/60">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-black">
          Pronto para Começar?
        </h2>
        <p className="mt-4 text-black/60">
          Solicite sua cotação agora e descubra por que somos a escolha de
          milhares de empresas.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/fretebot"
            className="flex h-12 items-center gap-2 rounded-xl bg-black px-8 font-bold text-white transition hover:brightness-110"
          >
            <Calculator className="h-5 w-5" />
            Cotação Online
          </Link>
          <a
            href="tel:24974011054"
            className="flex h-12 items-center gap-2 rounded-xl border border-black/10 px-8 font-bold text-black transition hover:bg-black/5"
          >
            <Phone className="h-5 w-5" />
            (24) 97401-1054
          </a>
        </div>
      </section>
    </main>
  );
}

import {
  Target,
  Eye,
  Heart,
  MapPin,
  Calendar,
  Users,
  Award,
  Zap,
  Shield,
  Headphones,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* SECTION 1 */}
      <section className="relative w-full bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold text-black md:text-5xl">
            Sobre a Otaviano Transportes
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-black/70 md:text-lg">
            Mais de 5 anos conectando o Brasil com excelência, segurança e
            inovação em logística.
          </p>
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
      <section id="servicos" className="w-full bg-black/3 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-black md:text-4xl">
              Nossa Trajetória
            </h2>
            <p className="mt-5 text-base text-black/70 md:text-lg">
              Uma história construída com dedicação, crescimento sustentável e
              compromisso com a excelência.
            </p>
          </div>

          {/* LINHA DO TEMPO */}
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* 2020 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <Calendar className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold">2020</h3>
              <p className="mt-1 font-semibold">Fundação</p>
              <p className="mt-2 text-sm text-black/70">
                Marco do início das atividades em Barra do Piraí, RJ, com foco,
                ainda, no transporte regional.
              </p>
            </div>

            {/* 2022 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold">2022</h3>
              <p className="mt-1 font-semibold">Expansão Nacional</p>
              <p className="mt-2 text-sm text-black/70">
                Ampliação da cobertura para 14 estados, consolidando presença
                nacional.
              </p>
            </div>

            {/* 2023 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold">2023</h3>
              <p className="mt-1 font-semibold">Certificações</p>
              <p className="mt-2 text-sm text-black/70">
                Conquista de certificações ISO e implementação de sistemas de
                qualidade.
              </p>
            </div>

            {/* 2024 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold">2024</h3>
              <p className="mt-1 font-semibold">Liderança</p>
              <p className="mt-2 text-sm text-black/70">
                3 bases dentro da região sudeste, trabalhando com mais 50
                colaboradores, trazendo eficiencia e inovações.
              </p>
            </div>
          </div>

          {/* CARD DE NÚMEROS */}
          <div className="mt-20 rounded-2xl bg-white px-8 py-12 shadow-md">
            <h3 className="text-center text-2xl font-extrabold">
              Otaviano em Números
            </h3>

            <div className="mt-10 grid grid-cols-1 gap-8 text-center md:grid-cols-4">
              <div>
                <p className="text-3xl font-extrabold">5+</p>
                <p className="mt-1 text-sm text-black/70">
                  Anos de Experiência
                </p>
              </div>

              <div>
                <p className="text-3xl font-extrabold">3.600+</p>
                <p className="mt-1 text-sm text-black/70">Cidades Atendidas</p>
              </div>

              <div>
                <p className="text-3xl font-extrabold">14</p>
                <p className="mt-1 text-sm text-black/70">
                  Estados de Cobertura
                </p>
              </div>

              <div>
                <p className="text-3xl font-extrabold">3+</p>
                <p className="mt-1 text-sm text-black/70">
                  Unidades Operacionais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* TÍTULO */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-black md:text-4xl">
              Nossos Diferenciais
            </h2>
            <p className="mt-5 text-base text-black/70 md:text-lg">
              O que nos torna únicos no mercado de transporte e logística.
            </p>
          </div>

          {/* DIFERENCIAIS */}
          <div className="mt-16 grid grid-cols-1 gap-12 text-center md:grid-cols-4">
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-bold">Segurança Reforçada</h3>
              <p className="mt-3 text-sm text-black/70">
                Monitoramento 24h, seguro total da carga e protocolos rigorosos
                de segurança.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <Headphones className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-bold">Atendimento Personalizado</h3>
              <p className="mt-3 text-sm text-black/70">
                Equipe especializada disponível para atender suas necessidades
                específicas.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-bold">Tecnologia Avançada</h3>
              <p className="mt-3 text-sm text-black/70">
                Sistemas de rastreamento em tempo real e plataformas digitais
                modernas.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-bold">Equipe Experiente</h3>
              <p className="mt-3 text-sm text-black/70">
                Profissionais qualificados com vasta experiência em logística e
                transporte.
              </p>
            </div>
          </div>

          {/* CERTIFICAÇÕES */}
          <div className="mt-20 rounded-2xl bg-zinc-50 px-8 py-14 shadow-sm">
            <h3 className="text-center text-2xl font-extrabold">
              Certificações e Qualidade
            </h3>

            {/* CERTIFICAÇÕES ISO */}
            <div className="mt-10 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              {/* ISO 9001 */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <img
                  src="/certificates/iso-9001.png"
                  alt="ISO 9001"
                  className="mx-auto h-40 object-contain"
                />
                <p className="mt-4 text-lg font-bold">ISO 9001</p>
              </div>

              {/* ISO 14001 */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <img
                  src="/certificates/iso-14001.png"
                  alt="ISO 14001"
                  className="mx-auto h-40 object-contain"
                />
                <p className="mt-4 text-lg font-bold">ISO 14001</p>
              </div>

              {/* SASSMAQ */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <img
                  src="/certificates/sassmaq.png"
                  alt="SASSMAQ"
                  className="mx-auto h-40 object-contain"
                />
                <p className="mt-4 text-lg font-bold">SASSMAQ</p>
              </div>
            </div>

            {/* LICENÇAS AMBIENTAIS */}
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <a
                href="/certificates/inea.pdf"
                download
                className="w-64 rounded-xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-lg font-bold">INEA</p>
                <p className="mt-2 text-xs text-black/60">Clique para baixar</p>
              </a>

              <a
                href="/certificates/ibama.pdf"
                download
                className="w-64 rounded-xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-lg font-bold">IBAMA</p>
                <p className="mt-2 text-xs text-black/60">Clique para baixar</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import {
  Users,
  TrendingUp,
  Heart,
  Award,
  MapPin,
  Mail,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Motorista Carreteiro",
      location: "Barra do Piraí - RJ",
      type: "CLT",
      requirements: [
        "CNH categoria E",
        "Experiência comprovada",
        "Disponibilidade para viagens",
      ],
    },
    {
      title: "Auxiliar de Logística",
      location: "São Paulo - SP",
      type: "CLT",
      requirements: [
        "Ensino médio completo",
        "Conhecimento em Excel",
        "Experiência em logística",
      ],
    },
    {
      title: "Analista de Frota",
      location: "Rio de Janeiro - RJ",
      type: "CLT",
      requirements: [
        "Superior em Logística",
        "Experiência com gestão de frota",
        "Conhecimento em sistemas",
      ],
    },
  ];

  const benefits = [
    "Plano de Saúde",
    "Plano Odontológico",
    "Vale Alimentação",
    "Vale Transporte",
    "Seguro de Vida",
    "Participação nos Lucros",
    "Treinamentos",
    "Auxílio Educação",
    "Ambiente Climatizado",
  ];

  return (
    <main className="w-full bg-white">
      {/* SECTION 1 */}
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl font-extrabold text-black md:text-5xl">
          Trabalhe Conosco
        </h1>
        <p className="mt-4 text-lg text-black/60 max-w-3xl mx-auto">
          Faça parte da equipe Otaviano Transportes e construa uma carreira
          sólida no setor de logística. Oferecemos oportunidades de crescimento
          e um ambiente de trabalho colaborativo.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-center text-3xl font-extrabold mb-16">
          Por que Trabalhar na Otaviano?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center text-white mb-6">
              <Users className="h-7 w-7" />
            </div>
            <h4 className="font-bold text-lg mb-2">Equipe Unida</h4>
            <p className="text-sm text-black/60">
              Ambiente colaborativo com foco no desenvolvimento de cada
              profissional
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center text-white mb-6">
              <TrendingUp className="h-7 w-7" />
            </div>
            <h4 className="font-bold text-lg mb-2">Crescimento</h4>
            <p className="text-sm text-black/60">
              Oportunidades reais de crescimento profissional e desenvolvimento
              de carreira
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center text-white mb-6">
              <Heart className="h-7 w-7" />
            </div>
            <h4 className="font-bold text-lg mb-2">Benefícios</h4>
            <p className="text-sm text-black/60">
              Pacote completo de benefícios incluindo plano de saúde e
              vale-alimentação
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center text-white mb-6">
              <Award className="h-7 w-7" />
            </div>
            <h4 className="font-bold text-lg mb-2">Reconhecimento</h4>
            <p className="text-sm text-black/60">
              Programas de reconhecimento e valorização dos nossos colaboradores
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-extrabold mb-12">
          Vagas Disponíveis
        </h2>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="rounded-2xl border border-black/10 p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center group hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <span className="bg-gray-100 text-[10px] px-2 py-1 rounded font-bold text-black/40">
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-black/40 text-sm mb-4">
                  <MapPin className="h-4 w-4" /> {job.location}
                </div>
                <div>
                  <h5 className="text-sm font-bold mb-2">Requisitos:</h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                    {job.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="text-sm text-black/60 flex items-center gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />{" "}
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a href="https://wa.me/5524981463045" target="_blank">
                <button className="mt-6 md:mt-0 bg-black text-white px-8 py-3 rounded-xl hover:cursor-pointer font-bold hover:brightness-110 transition active:scale-[0.98]">
                  Candidatar-se
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl bg-gray-50 p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold">Nossos Benefícios</h2>
            <p className="text-black/40 mt-2">
              Oferecemos um pacote completo de benefícios para nossos
              colaboradores
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-black" />
                <span className="text-sm font-medium text-black/70">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <div className="rounded-3xl border border-black/10 p-12 shadow-sm">
          <h2 className="text-2xl font-extrabold mb-4">
            Não Encontrou a Vaga Ideal?
          </h2>
          <p className="text-black/40 mb-2">
            Envie seu currículo e faça parte do nosso banco de talentos
          </p>
          <p className="text-sm text-black/60 max-w-2xl mx-auto mb-10">
            Mesmo que não tenhamos uma vaga específica no momento, estamos
            sempre em busca de profissionais qualificados para integrar nossa
            equipe.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5524981463045"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-xl font-bold hover:brightness-110 transition"
            >
              <Mail className="h-5 w-5" /> Enviar Currículo por E-mail
            </a>
            <a
              href="https://wa.me/5524981463045"
              target="_blank"
              className="flex items-center justify-center gap-2 border border-black/10 px-8 py-3 rounded-xl font-bold hover:bg-black/5 transition"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp RH
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import FaqSection from "../../components/Faqcontact";

export default function ContactPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      {/* SECTION 1 */}
      <section className="py-20 text-center bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-extrabold text-black md:text-5xl">
            Entre em Contato
          </h1>
          <p className="mt-4 text-lg text-black/60 max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco através
            dos canais abaixo ou envie uma mensagem.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* COLUNA ESQUERDA: TELEFONES */}
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm h-full">
            <div className="flex items-center gap-3 mb-8">
              <Phone className="h-6 w-6 text-black" />
              <h2 className="text-xl font-bold">Telefones de Contato</h2>
            </div>

            {/* COMERCIAL */}
            <div className="mb-8 border-b border-black/5 pb-8">
              <p className="text-xs font-semibold text-black/40 uppercase tracking-wider">
                Comercial
              </p>
              <h3 className="text-2xl font-extrabold mt-1">(24) 98146-4694</h3>
              <p className="text-sm text-black/60 mb-4">Vendas e cotações</p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:24981464694"
                  className="flex h-11 items-center justify-center rounded-xl bg-black text-white text-sm font-bold transition hover:brightness-110"
                >
                  Ligar Comercial
                </a>
                <a
                  href="https://wa.me/5524981464694"
                  className="flex h-11 items-center justify-center gap-2 rounded-xl border border-black/10 text-sm font-bold hover:bg-black/5 transition"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Comercial
                </a>
              </div>
            </div>

            {/* ADMINISTRATIVO */}
            <div>
              <p className="text-xs font-semibold text-black/40 uppercase tracking-wider">
                Administrativo
              </p>
              <h3 className="text-2xl font-extrabold mt-1">(24) 97401-1054</h3>
              <p className="text-sm text-black/60 mb-4">
                Suporte e administração
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:24974011054"
                  className="flex h-11 items-center justify-center rounded-xl border border-black/10 text-sm font-bold hover:bg-black/5 transition"
                >
                  Ligar Administrativo
                </a>
                <a
                  href="https://wa.me/5524974011054"
                  className="flex h-11 items-center justify-center gap-2 rounded-xl border border-black/10 text-sm font-bold hover:bg-black/5 transition"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Administrativo
                </a>
              </div>
            </div>

            <p className="mt-6 text-xs text-black/40 text-center">
              Atendimento de segunda a sexta, das 8h às 18h
            </p>
          </div>

          {/* COLUNA DIREITA: E-MAIL (Substituindo o Formulário) */}
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm flex flex-col justify-center text-center lg:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <Mail className="h-8 w-8 text-black" />
              <h2 className="text-2xl font-bold">E-mail</h2>
            </div>

            <p className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-1">
              Endereço de E-mail
            </p>
            <p className="text-2xl font-extrabold mb-2 break-all">
              otaviano.comercial@gmail.com
            </p>
            <p className="text-base text-black/60 mb-8">
              Entre em contato conosco por e-mail. <br />
              Garantimos uma resposta em até 24 horas úteis.
            </p>

            <a
              href="https://mail.google.com/mail/?authuser=0&to=otaviano.comercial@gmail.com&view=cm&fs=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center rounded-xl bg-black text-white text-lg font-bold transition hover:brightness-110 w-full"
            >
              Enviar E-mail Agora
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            {/* MATRIZ */}
            <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-black" />
                <h2 className="text-xl font-bold">Matriz</h2>
              </div>
              <p className="font-bold">
                BR-393, KM 281 - S/N - Califórnia da Barra - Fátima
              </p>
              <p className="text-black/60">Barra do Piraí - RJ</p>
              <p className="text-black/60">CEP: 27163-430</p>
            </div>

            {/* HORÁRIO */}
            <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-black" />
                <h2 className="text-xl font-bold">Horário de Funcionamento</h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-black/60">Segunda a Sexta:</span>
                  <span className="font-bold">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/60">Sábado:</span>
                  <span className="font-bold">8h às 12h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/60">Domingo:</span>
                  <span className="text-red-500 font-bold">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div className="lg:col-span-2 rounded-3xl border border-black/10 bg-white p-4 shadow-sm flex flex-col">
            <div className="p-4">
              <h2 className="text-xl font-bold">Nossa Localização</h2>
              <p className="text-sm text-black/60">
                Venha nos visitar ou utilize o mapa para traçar sua rota
              </p>
            </div>
            <div className="flex-1 bg-gray-100 rounded-2xl min-h-75 relative overflow-hidden">
              {/* Placeholder para o Mapa do Google */}
              <iframe
                src="https://www.google.com/maps?q=BR-393,+KM+281,+Califórnia+da+Barra,+Barra+do+Piraí+-+RJ,+27163-430&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-1 gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=BR-393,+KM+281,+Califórnia+da+Barra,+Barra+do+Piraí+-+RJ,+27163-430"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-black text-white text-sm font-bold"
              >
                <MapPin className="h-4 w-4" /> Traçar Rota no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-black/10 bg-white p-10 shadow-sm">
          <h2 className="text-xl font-bold mb-8">Informações Adicionais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-3">Cotações</h4>
              <p className="text-sm text-black/60 leading-relaxed">
                Para cotações rápidas, utilize nosso FreteBot ou entre em
                contato diretamente pelo WhatsApp.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Suporte Técnico</h4>
              <p className="text-sm text-black/60 leading-relaxed">
                Problemas com rastreamento ou dúvidas sobre sua encomenda? Nossa
                equipe está pronta para ajudar.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Parcerias</h4>
              <p className="text-sm text-black/60 leading-relaxed">
                Interessado em parcerias comerciais? Entre em contato para
                conhecer nossas oportunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <FaqSection />

      <button>Trabalhe Conosco</button>
    </main>
  );
}

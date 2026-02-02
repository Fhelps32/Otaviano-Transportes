import {
  Search,
  MessageCircle,
  Phone,
  MapPin,
  Bell,
  FileText,
} from "lucide-react";

export default function TrackPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      {/* SECTION 1 */}
      <section className="py-16 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-extrabold text-black md:text-5xl">
            Rastreamento de Cargas
          </h1>
          <p className="mt-4 text-lg text-black/60">
            Acompanhe sua encomenda em tempo real com nosso sistema de
            rastreamento
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-5 w-5 text-black" />
            <h2 className="text-lg font-bold text-black">Consultar Envio</h2>
          </div>
          <p className="text-sm text-black/60 mb-6">
            Digite o número da sua Nota Fiscal, CT-e ou código de rastreamento
          </p>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Ex: OT2024001234, 12345678901 ou NF123456"
              className="flex-1 h-12 rounded-xl border border-black/10 bg-gray-50 px-4 text-sm outline-none focus:border-black/30 focus:ring-4 focus:ring-black/5 transition-all"
            />
            <button className="h-12 px-8 rounded-xl bg-black text-white font-bold transition hover:brightness-110 active:scale-[0.98]">
              Rastrear
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="mx-auto max-w-4xl px-6 mt-8">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-bold text-black mb-8">
            Precisa de Ajuda?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-black mb-2">
                Não encontrou seu código?
              </h3>
              <p className="text-sm text-black/60 mb-6 leading-relaxed">
                O código de rastreamento é fornecido após a coleta da
                mercadoria. Verifique seu e-mail ou entre em contato conosco.
              </p>
              <a
                href="tel:24981463045"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-black/10 px-5 text-sm font-bold text-black hover:bg-black/5 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Ligar: (24) 98146-3045
              </a>
            </div>

            {/* WhatsApp */}
            <div>
              <h3 className="font-bold text-black mb-2">
                Atendimento WhatsApp
              </h3>
              <p className="text-sm text-black/60 mb-6 leading-relaxed">
                Fale diretamente com nossa equipe pelo WhatsApp para
                esclarecimentos sobre sua encomenda.
              </p>
              <a
                href="https://wa.me/5524981463045"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-black/10 px-5 text-sm font-bold text-black hover:bg-black/5 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-2xl font-extrabold text-black mb-12">
          Como Rastrear
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Passo 1 */}
          <div className="rounded-2xl bg-gray-50 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm mb-6">
              <FileText className="h-6 w-6 text-black" />
            </div>
            <h4 className="font-bold text-black mb-3">
              1. Código de Rastreamento
            </h4>
            <p className="text-xs text-black/60 leading-relaxed">
              Use o código fornecido no e-mail de confirmação ou na nota fiscal
            </p>
          </div>

          {/* Passo 2 */}
          <div className="rounded-2xl bg-gray-50 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm mb-6">
              <MapPin className="h-6 w-6 text-black" />
            </div>
            <h4 className="font-bold text-black mb-3">
              2. Acompanhe em Tempo Real
            </h4>
            <p className="text-xs text-black/60 leading-relaxed">
              Veja a localização atual e o histórico completo da sua carga
            </p>
          </div>

          {/* Passo 3 */}
          <div className="rounded-2xl bg-gray-50 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm mb-6">
              <Bell className="h-6 w-6 text-black" />
            </div>
            <h4 className="font-bold text-black mb-3">
              3. Receba Notificações
            </h4>
            <p className="text-xs text-black/60 leading-relaxed">
              Seja notificado sobre mudanças de status por e-mail ou SMS
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

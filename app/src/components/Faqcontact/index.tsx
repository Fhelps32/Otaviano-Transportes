import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Qual o prazo de resposta para cotações?",
      a: "Respondemos cotações em até 2 horas durante o horário comercial. Para urgências, recomendamos o contato via WhatsApp.",
    },
    {
      q: "Vocês fazem transporte para todo o Brasil?",
      a: "Sim! Realizamos transporte de cargas para todas as regiões do Brasil, com cobertura nacional e frota própria.",
    },
    {
      q: "Como posso rastrear minha carga?",
      a: "Você pode rastrear sua carga através da nossa página de rastreamento, informando o código de rastreio fornecido no momento da coleta.",
    },
    {
      q: "Quais tipos de carga vocês transportam?",
      a: "Transportamos cargas secas, refrigeradas, fracionadas e lotação completa. Entre em contato para verificar a disponibilidade para seu tipo de carga.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 mb-20">
      <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="h-6 w-6 text-black" />
          <h2 className="text-xl font-bold">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-black/5 last:border-0 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-4 text-left transition-all hover:cursor-pointer"
              >
                <span className="font-bold text-lg pr-4">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-black/40 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-black/60 leading-relaxed pb-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

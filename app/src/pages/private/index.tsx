export default function PrivatePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Cabeçalho da Página */}
        <div className="bg-zinc-900 p-8 text-white border-b-4 border-zinc-700">
          <h1 className="text-3xl font-bold tracking-tight uppercase">
            Política de Privacidade
          </h1>
          <p className="mt-2 text-zinc-400 font-medium">
            Otaviano Transportes Ltda
          </p>
        </div>

        <div className="p-8 space-y-8 leading-relaxed">
          {/* Informações Corporativas */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-md border border-gray-200">
            <div>
              <p className="text-sm font-bold uppercase text-gray-500">
                Empresa
              </p>
              <p className="font-semibold text-lg text-zinc-800">
                Otaviano Transportes Ltda
              </p>
              <p className="text-sm italic">CNPJ: 39.278.343/0001-58</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase text-gray-500">
                Localização
              </p>
              <p className="text-sm">
                BR-393, KM 281 - S/N - Califórnia da Barra - Fátima
              </p>
              <p className="text-sm uppercase">
                Barra do Piraí - RJ - CEP: 27163-430
              </p>
            </div>
            <div className="md:col-span-2 pt-4 border-t border-gray-200">
              <p className="text-sm font-bold uppercase text-gray-500">
                Contato DPO (Encarregado)
              </p>
              <p className="text-sm font-medium">
                E-mail:{" "}
                <a
                  href="mailto:OtavianoTransportes@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  OtavianoTransportes@gmail.com
                </a>
              </p>
              <p className="text-sm font-medium">Telefone: (24) 98146-3045</p>
              <p className="text-xs mt-2 text-gray-400">
                Última atualização: Março de 2026
              </p>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* 1. Quem Somos */}
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-3 underline decoration-zinc-400 underline-offset-4">
              1. QUEM SOMOS
            </h2>
            <p>
              A <strong>Otaviano Transportes Ltda</strong> é a controladora dos
              dados pessoais tratados no exercício de suas atividades de
              transporte e logística. Atuamos com transparência e
              responsabilidade no manejo de suas informações.
            </p>
          </section>

          {/* 2. Dados Coletados */}
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-3 underline decoration-zinc-400 underline-offset-4">
              2. DADOS COLETADOS
            </h2>
            <div className="space-y-4">
              <div className="pl-4 border-l-4 border-zinc-200">
                <h3 className="font-bold text-zinc-700 uppercase text-sm">
                  Clientes / Remetentes / Destinatários:
                </h3>
                <p className="text-sm">
                  Nome, CPF/CNPJ, endereço completo, telefone, e-mail e dados de
                  pagamento.
                </p>
              </div>
              <div className="pl-4 border-l-4 border-zinc-200">
                <h3 className="font-bold text-zinc-700 uppercase text-sm">
                  Motoristas / Agregados:
                </h3>
                <p className="text-sm">
                  Nome, CPF, CNH, dados do veículo, endereço, PIS/NIT e dados de
                  rastreamento.
                </p>
              </div>
              <div className="pl-4 border-l-4 border-zinc-200">
                <h3 className="font-bold text-zinc-700 uppercase text-sm">
                  Dados Automáticos:
                </h3>
                <p className="text-sm">
                  Endereço IP, cookies e dados de navegação no site.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Finalidade */}
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-3 underline decoration-zinc-400 underline-offset-4">
              3. FINALIDADE DO TRATAMENTO
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Emissão de CT-e e NF-e.</li>
              <li>Realização de transporte e entrega de mercadorias.</li>
              <li>Rastreamento de cargas em tempo real.</li>
              <li>Cumprimento de obrigações legais, fiscais e trabalhistas.</li>
              <li>Garantia da segurança e prevenção a fraudes.</li>
            </ul>
          </section>

          {/* 4. Compartilhamento */}
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-3 underline decoration-zinc-400 underline-offset-4">
              4. COMPARTILHAMENTO
            </h2>
            <p>
              Os dados poderão ser compartilhados com autoridades fiscais,
              seguradoras, parceiros logísticos, gerenciadoras de risco e
              instituições financeiras, sempre observando as diretrizes da{" "}
              <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
            </p>
          </section>

          {/* 5. Segurança */}
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-3 underline decoration-zinc-400 underline-offset-4">
              5. SEGURANÇA DOS DADOS
            </h2>
            <p>
              Adotamos medidas técnicas e administrativas rigorosas, como
              controle restrito de acesso, armazenamento em servidores seguros e
              criptografia nos processos onde se faz necessário.
            </p>
          </section>

          {/* 6. Direitos do Titular */}
          <section className="bg-zinc-50 p-6 rounded-md border border-zinc-100">
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              6. DIREITOS DO TITULAR
            </h2>
            <p className="mb-2 text-sm">
              Conforme o <strong>Art. 18 da LGPD</strong>, o titular poderá
              solicitar a qualquer momento:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs font-bold uppercase text-zinc-600">
              <span className="p-2 border border-zinc-200 bg-white rounded">
                Acesso
              </span>
              <span className="p-2 border border-zinc-200 bg-white rounded">
                Correção
              </span>
              <span className="p-2 border border-zinc-200 bg-white rounded">
                Anonimização
              </span>
              <span className="p-2 border border-zinc-200 bg-white rounded">
                Eliminação
              </span>
              <span className="p-2 border border-zinc-200 bg-white rounded">
                Revogação de Consentimento
              </span>
            </div>
          </section>

          {/* 7. Retenção */}
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-3 underline decoration-zinc-400 underline-offset-4">
              7. RETENÇÃO DOS DADOS
            </h2>
            <p>
              Os dados serão mantidos pelo tempo estritamente necessário para
              cumprir as finalidades descritas ou conforme prazos legais (ex: 5
              anos para documentos fiscais).
            </p>
          </section>

          {/* 8. Atualizações */}
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-3 underline decoration-zinc-400 underline-offset-4">
              8. ATUALIZAÇÕES
            </h2>
            <p>
              Esta política poderá ser atualizada periodicamente para atender
              alterações legais ou operacionais. Recomendamos a consulta regular
              a este documento.
            </p>
          </section>
        </div>

        {/* Rodapé Interno */}
        <div className="bg-gray-100 p-6 text-center text-xs text-gray-500">
          <p>
            © 2026 Otaviano Transportes Ltda - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}

import {
  Calculator,
  MapPin,
  Package,
  User,
  Send,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import api from "../../api/apiClient";

type FormData = {
  cepOrigem: string;
  cepDestino: string;
  cargaPeso: string;
  cubagem: string;
  qtdVolumes: string;
  valorNota: string;
  tipo: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
};

const maskCEP = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/^(\d{5})(\d)/, "$1-$2")
    .slice(0, 9);

const maskCPFCNPJ = (value: string) => {
  const cleanValue = value.replace(/\D/g, "");
  if (cleanValue.length <= 11) {
    return cleanValue
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
      .slice(0, 14);
  }
  return cleanValue
    .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5")
    .slice(0, 18);
};

const maskPhone = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
};

const maskCurrency = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d)(\d{2})$/, "$1,$2")
    .replace(/(?=(\d{3})+(\D))\B/g, ".");
};

export default function FreteBotPage() {
  const [form, setForm] = useState<FormData>({
    cepOrigem: "",
    cepDestino: "",
    cargaPeso: "",
    cubagem: "",
    qtdVolumes: "",
    valorNota: "",
    tipo: "",
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    let maskedValue = value;

    // Aplica a restrição baseada no nome do campo
    if (name === "cepOrigem" || name === "cepDestino")
      maskedValue = maskCEP(value);
    if (name === "cpf") maskedValue = maskCPFCNPJ(value);
    if (name === "telefone") maskedValue = maskPhone(value);
    if (name === "valorNota") maskedValue = maskCurrency(value);
    if (name === "cargaPeso" || name === "qtdVolumes")
      maskedValue = value.replace(/[^0-9.,]/g, "");

    setForm({ ...form, [name]: maskedValue });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const rawData = {
      ...form,
      cepOrigem: form.cepOrigem.replace(/\D/g, ""),
      cepDestino: form.cepDestino.replace(/\D/g, ""),
      cpf: form.cpf.replace(/\D/g, ""),
      telefone: form.telefone.replace(/\D/g, ""),
      valorNota: form.valorNota.replace(/\./g, "").replace(",", "."),
      cargaPeso: form.cargaPeso.replace(",", "."),
    };

    const requiredFields: (keyof FormData)[] = [
      "cepOrigem",
      "cepDestino",
      "cargaPeso",
      "valorNota",
      "nome",
      "cpf",
      "email",
      "telefone",
      "tipo",
    ];

    const emptyFields = requiredFields.filter((field) => !form[field]);

    if (emptyFields.length > 0) {
      alert(
        "Preencha todos os campos obrigatórios para calcular o seguro e o frete.",
      );
      return;
    }

    if (rawData.cepOrigem.length !== 8 || rawData.cepDestino.length !== 8) {
      alert("O CEP deve conter 8 dígitos.");
      return;
    }

    if (rawData.cpf.length < 11) {
      alert("Documento (CPF/CNPJ) inválido.");
      return;
    }

    if (!form.email.includes("@")) {
      alert("Informe um e-mail de contato válido.");
      return;
    }

    setLoading(true);

    try {
      await api.post("/enviar-cotacao", rawData);

      alert("Cotação enviada com sucesso! Nossa equipe entrará em contato.");

      setForm({
        cepOrigem: "",
        cepDestino: "",
        cargaPeso: "",
        cubagem: "",
        qtdVolumes: "",
        valorNota: "",
        tipo: "",
        nome: "",
        cpf: "",
        email: "",
        telefone: "",
      });
    } catch (err: any) {
      console.error("Erro no envio:", err);
      const errorMsg =
        err.response?.data?.message || "Erro ao conectar com o servidor.";
      alert(`Falha ao enviar cotação: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="w-full bg-gray-50/30 min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6">
        {/* SECTION 1 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-slate-50 rounded-2xl mb-4">
            <Calculator className="h-8 w-8 text-slate-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            FreteBot: Cotação Imediata
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Preencha os dados abaixo para que a Otaviano Transportes Ltda
            calcule o frete exato, incluindo valor de seguro e especificações da
            mercadoria.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 1. LOCALIDADE */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-8 py-4 border-b border-slate-200 flex items-center gap-3">
              <MapPin className="h-5 w-5 text-slate-600" />
              <div>
                <h2 className="font-bold text-slate-800">1. Localidade</h2>
                <p className="text-xs text-slate-500">
                  Informe os CEPs de origem e destino da sua carga
                </p>
              </div>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  CEP de Origem *
                </label>
                <input
                  name="cepOrigem"
                  value={form.cepOrigem}
                  onChange={handleChange}
                  type="text"
                  placeholder="00000-000"
                  className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  CEP de Destino *
                </label>
                <input
                  name="cepDestino"
                  value={form.cepDestino}
                  onChange={handleChange}
                  type="text"
                  placeholder="00000-000"
                  className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-50"
                />
              </div>
            </div>
          </div>

          {/* 2. DETALHES DA CARGA */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-8 py-4 border-b border-slate-200 flex items-center gap-3">
              <Package className="h-5 w-5 text-slate-600" />
              <div>
                <h2 className="font-bold text-slate-800">
                  2. Detalhes da Carga
                </h2>
                <p className="text-xs text-slate-500">
                  Informações sobre peso, dimensões, valor e tipo da mercadoria
                </p>
              </div>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Peso Total (em KG) *
                </label>
                <input
                  name="cargaPeso"
                  value={form.cargaPeso}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ex: 100"
                  className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Cubagem (m³) ou Dimensões (AxLxC)
                </label>
                <input
                  name="cubagem"
                  value={form.cubagem}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ex: 2,5 m³ ou 100x50x50cm"
                  className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Quantidade de Volumes *
                </label>
                <input
                  name="qtdVolumes"
                  value={form.qtdVolumes}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ex: 5"
                  className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Valor da Nota Fiscal (NF) em R$ *
                </label>
                <input
                  name="valorNota"
                  value={form.valorNota}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ex: 1.500,00"
                  className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-50"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-700">
                  Tipo de Mercadoria *
                </label>
                <select
                  name="tipo"
                  value={form.tipo}
                  onChange={handleChange}
                  className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-500 appearance-none"
                >
                  <option value="">Selecione o tipo de mercadoria</option>
                  <option value="eletronicos">Eletrônicos</option>
                  <option value="moveis">Móveis / Decoração</option>
                  <option value="alimentos">Alimentos (Não perecíveis)</option>
                  <option value="textil">Têxtil / Vestuário</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>
          </div>

          {/* 3. CONTATO */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-8 py-4 border-b border-slate-200 flex items-center gap-3">
              <User className="h-5 w-5 text-slate-600" />
              <div>
                <h2 className="font-bold text-slate-800">3. Contato</h2>
                <p className="text-xs text-slate-500">
                  Dados para contato e envio da cotação
                </p>
              </div>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Nome Completo ou Razão Social *
                </label>
                <input
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  type="text"
                  placeholder="Seu nome ou empresa"
                  className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  CNPJ/CPF *
                </label>
                <input
                  name="cpf"
                  value={form.cpf}
                  onChange={handleChange}
                  type="text"
                  placeholder="000.000.000-00 ou 00.000.000/0001-00"
                  className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  E-mail *
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Telefone (WhatsApp) *
                </label>
                <input
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  type="text"
                  placeholder="(00) 00000-0000"
                  className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-50"
                />
              </div>
            </div>
          </div>

          {/* BOTÃO */}
          <div className="text-center space-y-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-slate-600 px-10 text-base font-bold text-white shadow-lg shadow-slate-200 transition hover:bg-slate-700 active:scale-[0.98]"
            >
              <Send className="h-5 w-5" />
              {loading ? "Enviando..." : "Solicitar Cotação Agora"}
            </button>

            <p className="text-xs text-slate-400">
              Ao enviar, você concorda com nossos termos de uso e política de
              privacidade.
            </p>
          </div>
        </form>

        {/* SECTION 2 */}
        <div className="mt-16 bg-white rounded-3xl border border-slate-200 p-10 text-center shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            Prefere falar conosco?
          </h3>
          <p className="text-slate-600 mb-8">
            Entre em contato diretamente pelo WhatsApp para atendimento imediato
          </p>
          <a
            href="https://wa.me/5524981463045"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl border-2 border-slate-500 px-8 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp: (24) 98146-3045
          </a>
        </div>
      </div>
    </main>
  );
}

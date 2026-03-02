import { useState } from "react";
import api from "../../api/apiClient";

function Expressoform() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validarFormulario = () => {
    const novosErros: Record<string, string> = {};

    if (!/^\d{5}-\d{3}$/.test(formData.cepOrigem)) {
      novosErros.cepOrigem = "CEP de origem inválido. Use o formato 00000-000.";
    }

    if (!/^\d{5}-\d{3}$/.test(formData.cepDestino)) {
      novosErros.cepDestino =
        "CEP de destino inválido. Use o formato 00000-000.";
    }

    const peso = parseFloat(formData.cargaPeso);
    if (!peso || peso <= 0) {
      novosErros.cargaPeso = "Informe um peso válido maior que zero.";
    }

    if (peso > 1000000) {
      novosErros.cargaPeso = "Peso acima do limite permitido.";
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      novosErros.email = "Email inválido.";
    }

    const nota = parseFloat(formData.valorNota);
    if (!nota || nota <= 0) {
      novosErros.valorNota = "Valor da nota fiscal inválido.";
    }

    setErrors(novosErros);

    return Object.keys(novosErros).length === 0;
  };

  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    cepOrigem: "",
    cepDestino: "",
    cargaPeso: "",
    email: "",
    valorNota: "",
  });

  // Função para atualizar os campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCalcularFrete = async () => {
    if (!validarFormulario()) return;

    try {
      await api.post("/enviar-expresso", formData);

      alert("Cotação enviada com sucesso! Verifique seu email.");
    } catch (error: unknown) {
      if (error instanceof Error && "response" in error) {
        const axiosError = error as Error & {
          response?: { data?: { message?: string } };
        };
        if (axiosError.response?.data?.message) {
          alert(axiosError.response.data.message);
        } else {
          alert(
            "Erro inesperado ao enviar cotação. Tente novamente em alguns minutos.",
          );
        }
      } else {
        alert(
          "Erro inesperado ao enviar cotação. Tente novamente em alguns minutos.",
        );
      }
    }
  };

  return (
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
              onChange={(e) => {
                let v = e.target.value.replace(/\D/g, "").slice(0, 8);
                if (v.length > 5) v = v.replace(/^(\d{5})(\d)/, "$1-$2");
                setFormData({ ...formData, cepOrigem: v });
              }}
              inputMode="numeric"
              placeholder="00000-000"
              className="h-11 rounded-xl border border-black/10
  bg-white px-4 text-sm outline-none placeholder:text-black/50
  focus:border-black/30 focus:ring-4 focus:ring-black/15"
              required
            />
            {errors.cepOrigem && (
              <span className="text-xs text-red-600">{errors.cepOrigem}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-black/70">
              CEP Destino
            </label>
            <input
              name="cepDestino"
              value={formData.cepDestino}
              onChange={(e) => {
                let v = e.target.value.replace(/\D/g, "").slice(0, 8);
                if (v.length > 5) v = v.replace(/^(\d{5})(\d)/, "$1-$2");
                setFormData({ ...formData, cepDestino: v });
              }}
              inputMode="numeric"
              placeholder="00000-000"
              className="h-11 rounded-xl border border-black/10
  bg-white px-4 text-sm outline-none placeholder:text-black/50
  focus:border-black/30 focus:ring-4 focus:ring-black/15"
              required
            />
            {errors.cepDestino && (
              <span className="text-xs text-red-600">{errors.cepDestino}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-black/70">
              Peso (Kg)
            </label>
            <input
              name="cargaPeso"
              value={formData.cargaPeso}
              onChange={(e) => {
                const v = e.target.value.replace(",", ".");
                if (!/^\d*\.?\d*$/.test(v)) return;
                if (parseFloat(v) > 1000000) return;
                setFormData({ ...formData, cargaPeso: v });
              }}
              type="text"
              placeholder="Ex: 23134.32"
              className="h-11 rounded-xl border border-black/10
  bg-white px-4 text-sm outline-none placeholder:text-black/50
  focus:border-black/30 focus:ring-4 focus:ring-black/15"
              required
            />
            {errors.cargaPeso && (
              <span className="text-xs text-red-600">{errors.cargaPeso}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-black/70">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value.replace(/\s/g, "").toLowerCase(),
                })
              }
              type="email"
              maxLength={120}
              placeholder="email@exemplo.com"
              className="h-11 rounded-xl border border-black/10
  bg-white px-4 text-sm outline-none placeholder:text-black/50
  focus:border-black/30 focus:ring-4 focus:ring-black/15"
              required
            />
            {errors.email && (
              <span className="text-xs text-red-600">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-xs font-semibold text-black/70">
              Nota Fiscal
            </label>
            <input
              name="valorNota"
              value={formData.valorNota}
              onChange={handleChange}
              type="text"
              required
              className="h-11 rounded-xl border border-black/10
                  bg-white px-4 text-sm outline-none placeholder:text-black/50
                  focus:border-black/30 focus:ring-4 focus:ring-black/15"
              placeholder="Ex: 98370.07"
            />
            {errors.valorNota && (
              <span className="text-xs text-red-600">{errors.valorNota}</span>
            )}
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
  );
}

function ExpressoformMobile() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validarFormulario = () => {
    const novosErros: Record<string, string> = {};

    if (!/^\d{5}-\d{3}$/.test(formData.cepOrigem)) {
      novosErros.cepOrigem = "CEP de origem inválido. Use o formato 00000-000.";
    }

    if (!/^\d{5}-\d{3}$/.test(formData.cepDestino)) {
      novosErros.cepDestino =
        "CEP de destino inválido. Use o formato 00000-000.";
    }

    const peso = parseFloat(formData.cargaPeso);
    if (!peso || peso <= 0) {
      novosErros.cargaPeso = "Informe um peso válido maior que zero.";
    }

    if (peso > 1000000) {
      novosErros.cargaPeso = "Peso acima do limite permitido.";
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      novosErros.email = "Email inválido.";
    }

    const nota = parseFloat(formData.valorNota);
    if (!nota || nota <= 0) {
      novosErros.valorNota = "Valor da nota fiscal inválido.";
    }

    setErrors(novosErros);

    return Object.keys(novosErros).length === 0;
  };

  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    cepOrigem: "",
    cepDestino: "",
    cargaPeso: "",
    email: "",
    valorNota: "",
  });

  const handleCalcularFrete = async () => {
    if (!validarFormulario()) return;

    try {
      await api.post("/enviar-expresso", formData);

      alert("Cotação enviada com sucesso! Verifique seu email.");
    } catch (error: unknown) {
      if (error instanceof Error && "response" in error) {
        const axiosError = error as Error & {
          response?: { data?: { message?: string } };
        };
        if (axiosError.response?.data?.message) {
          alert(axiosError.response.data.message);
        } else {
          alert(
            "Erro inesperado ao enviar cotação. Tente novamente em alguns minutos.",
          );
        }
      } else {
        alert(
          "Erro inesperado ao enviar cotação. Tente novamente em alguns minutos.",
        );
      }
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-2xl">
      <h3 className="text-lg font-extrabold text-black">
        Cotação Expressa (24h)
      </h3>

      <div className="mt-6 grid grid-cols-1 gap-4">
        {/* CEP ORIGEM */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-black/70">
            CEP Origem
          </label>
          <input
            name="cepOrigem"
            value={formData.cepOrigem}
            onChange={(e) => {
              let v = e.target.value.replace(/\D/g, "").slice(0, 8);
              if (v.length > 5) v = v.replace(/^(\d{5})(\d)/, "$1-$2");
              setFormData({ ...formData, cepOrigem: v });
            }}
            inputMode="numeric"
            placeholder="00000-000"
            className="h-11 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 focus:ring-4 focus:ring-black/15"
          />
          {errors.cepOrigem && (
            <span className="text-xs text-red-600">{errors.cepOrigem}</span>
          )}
        </div>

        {/* CEP DESTINO */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-black/70">
            CEP Destino
          </label>
          <input
            name="cepDestino"
            value={formData.cepDestino}
            onChange={(e) => {
              let v = e.target.value.replace(/\D/g, "").slice(0, 8);
              if (v.length > 5) v = v.replace(/^(\d{5})(\d)/, "$1-$2");
              setFormData({ ...formData, cepDestino: v });
            }}
            inputMode="numeric"
            placeholder="00000-000"
            className="h-11 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 focus:ring-4 focus:ring-black/15"
          />
          {errors.cepDestino && (
            <span className="text-xs text-red-600">{errors.cepDestino}</span>
          )}
        </div>

        {/* PESO */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-black/70">
            Peso (Kg)
          </label>
          <input
            name="cargaPeso"
            value={formData.cargaPeso}
            onChange={(e) => {
              const v = e.target.value.replace(",", ".");
              if (!/^\d*\.?\d*$/.test(v)) return;
              if (parseFloat(v) > 1000000) return;
              setFormData({ ...formData, cargaPeso: v });
            }}
            placeholder="Ex: 23134.32"
            className="h-11 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 focus:ring-4 focus:ring-black/15"
          />
          {errors.cargaPeso && (
            <span className="text-xs text-red-600">{errors.cargaPeso}</span>
          )}
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-black/70">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value.replace(/\s/g, "").toLowerCase(),
              })
            }
            type="email"
            placeholder="email@exemplo.com"
            className="h-11 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 focus:ring-4 focus:ring-black/15"
          />
          {errors.email && (
            <span className="text-xs text-red-600">{errors.email}</span>
          )}
        </div>

        {/* NOTA FISCAL */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-black/70">
            Nota Fiscal
          </label>
          <input
            name="valorNota"
            value={formData.valorNota}
            onChange={(e) => {
              let v = e.target.value.replace(/\D/g, "");
              v = (Number(v) / 100).toFixed(2);
              setFormData({ ...formData, valorNota: v });
            }}
            placeholder="Ex: 98370.07"
            className="h-11 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 focus:ring-4 focus:ring-black/15"
          />
          {errors.valorNota && (
            <span className="text-xs text-red-600">{errors.valorNota}</span>
          )}
        </div>

        <button
          onClick={handleCalcularFrete}
          className="h-11 w-full rounded-xl bg-black text-sm font-bold text-white transition hover:brightness-110 active:scale-[0.99]"
        >
          Calcular Frete
        </button>
      </div>
    </div>
  );
}

export { ExpressoformMobile, Expressoform };

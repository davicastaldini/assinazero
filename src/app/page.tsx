import Link from "next/link";

const highlights = [
  { label: "Assinaturas rastreadas", value: "+12" },
  { label: "Cortes por mês", value: "R$ 186" },
  { label: "Cobranças evitadas", value: "97%" },
];

const features = [
  {
    title: "Descubra cobranças invisíveis",
    desc: "Detecta assinaturas esquecidas e renovações automáticas antes de virarem surpresa.",
  },
  {
    title: "Alerta antes de cobrar",
    desc: "Notifica 3, 7 e 14 dias antes de cada pagamento.",
  },
  {
    title: "Cancelamento guiado",
    desc: "Passo a passo por serviço com tempo estimado e links diretos.",
  },
  {
    title: "Resumo mensal simples",
    desc: "Mostra onde seu dinheiro foi e o que pode cortar agora.",
  },
  {
    title: "Metas de gasto",
    desc: "Defina um teto e receba alerta se estourar.",
  },
  {
    title: "Privacidade total",
    desc: "Seus dados não são vendidos. Você controla tudo.",
  },
];

const steps = [
  {
    title: "Conectar",
    desc: "Importe suas assinaturas do e‑mail ou adicione manualmente.",
  },
  {
    title: "Organizar",
    desc: "O AssinaZero categoriza, soma e cria alertas automáticos.",
  },
  {
    title: "Cortar",
    desc: "Receba sugestões de economia e cancele em poucos cliques.",
  },
];

const faqs = [
  {
    q: "Preciso conectar meu banco?",
    a: "Não. Você pode importar por e‑mail ou adicionar manualmente.",
  },
  {
    q: "Funciona no Brasil?",
    a: "Sim. Temos guias de cancelamento para os serviços mais usados aqui.",
  },
  {
    q: "Quanto custa?",
    a: "R$19/mês com 7 dias grátis. Cancela quando quiser.",
  },
];

const testimonials = [
  {
    name: "Bruna S.",
    role: "Designer",
    quote: "Descobri 3 assinaturas esquecidas. Economizei R$ 120 no mês.",
  },
  {
    name: "Rafael M.",
    role: "Analista",
    quote: "Os alertas me salvaram da renovação anual sem perceber.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-zinc-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-10">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-200">
                AZ
              </div>
              <span className="text-lg font-semibold">AssinaZero</span>
            </div>
            <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
              <a href="#features" className="hover:text-white">
                Produto
              </a>
              <a href="#workflow" className="hover:text-white">
                Como funciona
              </a>
              <a href="#pricing" className="hover:text-white">
                Preço
              </a>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </div>
            <button className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-cyan-300">
              Começar por R$19
            </button>
          </header>

          <section className="grid gap-12 py-20 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-medium text-cyan-200">
                Assinaturas sob controle
              </span>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Pare de pagar por coisas que você nem usa.
              </h1>
              <p className="text-lg text-zinc-300">
                O AssinaZero encontra cobranças esquecidas, avisa antes de renovar e te ajuda a cancelar sem stress.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-cyan-300">
                  Testar 7 dias grátis
                </button>
                <Link
                  href="/app/dashboard"
                  className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-400"
                >
                  Ver app
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                <span>🔔 Alertas antes de cobrar</span>
                <span>✂️ Cortes sugeridos</span>
                <span>🔒 Privacidade total</span>
              </div>
              <div className="mt-6 grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-xs text-zinc-400">Economia média nos primeiros 30 dias</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-lg font-semibold text-white">{item.value}</p>
                      <p className="text-[11px] text-zinc-400">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-[#10131a] p-4">
                  <p className="text-xs text-zinc-400">Resumo do mês</p>
                  <p className="mt-2 text-sm font-semibold">R$ 486 em assinaturas</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    3 serviços sem uso detectados. Economia possível de R$ 128.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#10131a] p-4">
                  <p className="text-xs text-zinc-400">Renovações próximas</p>
                  <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                    <li>✅ Spotify • 3 dias</li>
                    <li>✅ Adobe • 7 dias</li>
                    <li>⏳ Gympass • 14 dias</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#10131a] p-4">
                  <p className="text-xs text-zinc-400">Ação recomendada</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Cancelar Adobe (sem uso há 60 dias) — economia R$ 89/mês.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <section className="grid gap-6 border-y border-white/10 py-12 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">O dinheiro vai embora sem você perceber</h2>
            <p className="text-sm text-zinc-400">
              Assinaturas ocultas e renovações automáticas são o novo "vazamento" do seu bolso.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-zinc-400">Antes</p>
              <p className="mt-2 text-sm text-zinc-300">Cobranças surpresa e cancelamentos difíceis.</p>
            </div>
            <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-4">
              <p className="text-xs text-cyan-200">Depois</p>
              <p className="mt-2 text-sm text-cyan-100">Alertas claros e economia real mês a mês.</p>
            </div>
          </div>
        </section>

        <section id="features" className="space-y-10 py-16">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">O que o AssinaZero faz por você</h2>
            <p className="text-zinc-300">
              Tudo que você precisa para controlar assinaturas em um só lugar.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="workflow" className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Como funciona</h2>
            <p className="text-zinc-300">
              Em 3 passos você já começa a economizar.
            </p>
            <button className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-400">
              Ver exemplo real
            </button>
          </div>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/20 text-sm font-semibold text-cyan-200">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-12 md:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-zinc-200">“{item.quote}”</p>
              <p className="mt-4 text-xs text-zinc-400">
                {item.name} • {item.role}
              </p>
            </div>
          ))}
        </section>

        <section id="pricing" className="space-y-10 py-16">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Preço simples</h2>
            <p className="text-zinc-300">R$19/mês com 7 dias grátis.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-cyan-400 bg-cyan-400/10 p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">AssinaZero</h3>
                <p className="text-3xl font-semibold">R$ 19</p>
                <p className="text-sm text-zinc-300">Tudo incluso, sem pegadinhas.</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                <li>• Assinaturas ilimitadas</li>
                <li>• Alertas antes de cobrar</li>
                <li>• Templates de cancelamento</li>
                <li>• Metas de gasto</li>
              </ul>
              <button className="mt-6 w-full rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-zinc-950">
                Começar agora
              </button>
            </div>
          </div>
        </section>

        <section id="faq" className="grid gap-10 py-16 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold">Perguntas frequentes</h2>
            <p className="mt-3 text-zinc-300">Quer mais detalhes? Respondemos em até 24h.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <h3 className="text-base font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-zinc-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-cyan-400/40 bg-cyan-400/10 p-10 text-center">
          <h2 className="text-3xl font-semibold">Pronto para cortar gastos invisíveis?</h2>
          <p className="mt-3 text-zinc-900">Teste grátis por 7 dias e veja suas assinaturas escondidas.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white">
              Testar grátis
            </button>
            <button className="rounded-full border border-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-950">
              Ver demo
            </button>
          </div>
        </section>

        <footer className="py-10 text-xs text-zinc-500">
          © 2026 AssinaZero. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}

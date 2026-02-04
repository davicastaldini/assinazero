import Link from "next/link";

const highlights = [
  { label: "Assinaturas rastreadas", value: "+12" },
  { label: "Cortes por mês", value: "R$ 186" },
  { label: "Cobranças evitadas", value: "97%" },
];

const missions = [
  {
    title: "Missão 1 — Detectar",
    desc: "Descobrir assinaturas invisíveis e renovações automáticas.",
    reward: "+20 XP",
  },
  {
    title: "Missão 2 — Organizar",
    desc: "Agrupar por categoria e definir alertas inteligentes.",
    reward: "+30 XP",
  },
  {
    title: "Missão 3 — Cortar",
    desc: "Cancelar o que não usa com guia passo a passo.",
    reward: "+50 XP",
  },
];

const badges = [
  { name: "Caçador de Vazamentos", icon: "🕵️" },
  { name: "Mestre do Cancelamento", icon: "✂️" },
  { name: "Guardião do Orçamento", icon: "🛡️" },
  { name: "Nível 3 Desbloqueado", icon: "🏆" },
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
              <a href="#missions" className="hover:text-white">
                Missões
              </a>
              <a href="#badges" className="hover:text-white">
                Conquistas
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
                Jogo do dinheiro invisível
              </span>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Pare de pagar por coisas que você nem usa.
              </h1>
              <p className="text-lg text-zinc-300">
                O AssinaZero transforma suas assinaturas em uma jornada simples: detectar vazamentos, organizar gastos e cortar o que não faz sentido.
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
                <span>🎯 Missões claras</span>
                <span>🏆 Conquistas</span>
              </div>

              <div className="mt-6 grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-xs text-zinc-400">Seu placar do mês</p>
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
                  <p className="text-xs text-zinc-400">Nível atual</p>
                  <p className="mt-2 text-2xl font-semibold">Explorador — 180 XP</p>
                  <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                    <div className="h-2 w-2/3 rounded-full bg-cyan-400" />
                  </div>
                  <p className="mt-2 text-xs text-zinc-400">Próximo nível em 40 XP</p>
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
        <section id="missions" className="space-y-10 py-16">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Missões do mês</h2>
            <p className="text-zinc-300">Complete etapas simples e ganhe XP real (economia real).</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {missions.map((mission) => (
              <div key={mission.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">{mission.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{mission.desc}</p>
                <span className="mt-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                  {mission.reward}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="badges" className="grid gap-6 border-y border-white/10 py-12 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Conquistas desbloqueáveis</h2>
            <p className="text-sm text-zinc-400">
              Cada economia vira uma medalha. Você vê o progresso e mantém o ritmo.
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span key={badge.name} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                  {badge.icon} {badge.name}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-6">
            <p className="text-xs text-cyan-200">Ranking pessoal</p>
            <p className="mt-2 text-2xl font-semibold text-white">Você economizou R$ 186 este mês</p>
            <p className="mt-2 text-sm text-cyan-100">Top 12% dos usuários AssinaZero.</p>
            <div className="mt-4 h-2 w-full rounded-full bg-white/20">
              <div className="h-2 w-4/5 rounded-full bg-white" />
            </div>
          </div>
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
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
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

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const missions = [
  {
    id: "detectar",
    title: "Detectar vazamentos",
    desc: "Mapear cobranças invisíveis e renovações automáticas.",
    reward: "+20 XP",
  },
  {
    id: "organizar",
    title: "Organizar por categoria",
    desc: "Agrupar gastos e definir alertas inteligentes.",
    reward: "+30 XP",
  },
  {
    id: "cortar",
    title: "Cortar o que não usa",
    desc: "Cancelar com guia passo a passo e reduzir o custo mensal.",
    reward: "+50 XP",
  },
];

const badges = [
  { id: "hunter", name: "Caçador de vazamentos" },
  { id: "cancel", name: "Mestre do cancelamento" },
  { id: "guardian", name: "Guardião do orçamento" },
  { id: "level", name: "Nível 3 desbloqueado" },
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
  const [done, setDone] = useState<string[]>([]);

  const progress = useMemo(() =>
    Math.round((done.length / missions.length) * 100)
  , [done.length]);

  const xp = useMemo(() => {
    return done.reduce((acc, id) => {
      if (id === "detectar") return acc + 20;
      if (id === "organizar") return acc + 30;
      if (id === "cortar") return acc + 50;
      return acc;
    }, 0);
  }, [done]);

  const level = xp >= 100 ? 3 : xp >= 50 ? 2 : 1;

  function toggleMission(id: string) {
    setDone((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  const unlockedBadges = useMemo(() => {
    const unlocked = new Set<string>();
    if (done.includes("detectar")) unlocked.add("hunter");
    if (done.includes("cortar")) unlocked.add("cancel");
    if (done.length >= 2) unlocked.add("guardian");
    if (level >= 3) unlocked.add("level");
    return unlocked;
  }, [done, level]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0F172A]">
            AZ
          </div>
          <span className="text-sm uppercase tracking-[0.35em] text-[#0F172A]">AssinaZero</span>
        </div>
        <button className="rounded-full bg-[#CA8A04] px-5 py-2 text-xs font-semibold text-white">
          Começar por R$19
        </button>
      </header>

      <main className="mx-auto grid max-w-5xl gap-16 px-6 pb-20">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#1E3A8A]">
              Editorial de finanças pessoais
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-[#020617] sm:text-5xl">
              Controle elegante para as assinaturas que drenam seu dinheiro.
            </h1>
            <p className="text-base leading-relaxed text-[#334155]">
              AssinaZero transforma cobranças invisíveis em um painel claro. Detecte vazamentos, organize gastos e corte o que não usa — com alertas antes de renovar.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-[#CA8A04] px-6 py-3 text-sm font-semibold text-white">
                Testar grátis por 7 dias
              </button>
              <Link
                href="/app/dashboard"
                className="rounded-full border border-[#0F172A] px-6 py-3 text-sm font-semibold text-[#0F172A]"
              >
                Ver app
              </Link>
            </div>
            <div className="flex items-center gap-4 text-xs text-[#475569]">
              <span>Sem cartão</span>
              <span>Cancelamento em 1 clique</span>
              <span>Privacidade total</span>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#E2E8F0] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#94A3B8]">Resumo do mês</p>
                <p className="mt-2 text-2xl font-semibold text-[#0F172A]">R$ 486 em assinaturas</p>
                <p className="mt-2 text-sm text-[#475569]">Economia possível: R$ 128 se cancelar 2 serviços.</p>
              </div>
              <div className="border-t border-[#E2E8F0] pt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#94A3B8]">Progresso</p>
                <div className="mt-3 h-1 w-full rounded-full bg-[#E2E8F0]">
                  <div className="h-1 rounded-full bg-[#1E3A8A]" style={{ width: `${progress}%` }} />
                </div>
                <p className="mt-2 text-xs text-[#64748B]">Nível {level} · {xp} XP</p>
              </div>
              <div className="grid gap-3 text-sm text-[#0F172A]">
                <div className="flex items-center justify-between">
                  <span>Spotify</span>
                  <span className="text-[#1E3A8A]">3 dias</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Adobe</span>
                  <span className="text-[#CA8A04]">7 dias</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="missions" className="grid gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-[#0F172A]">Missões do mês</h2>
            <p className="text-sm text-[#475569]">Cada missão concluída libera XP e aumenta sua economia real.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {missions.map((mission) => {
              const isDone = done.includes(mission.id);
              return (
                <div key={mission.title} className="rounded-[28px] border border-[#E2E8F0] bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#64748B]">Missão</span>
                    <span className="text-xs text-[#CA8A04]">{mission.reward}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#0F172A]">{mission.title}</h3>
                  <p className="mt-2 text-sm text-[#475569]">{mission.desc}</p>
                  <button
                    onClick={() => toggleMission(mission.id)}
                    className={`mt-6 w-full rounded-full px-4 py-2 text-xs font-semibold ${
                      isDone ? "bg-[#0F172A] text-white" : "border border-[#0F172A] text-[#0F172A]"
                    }`}
                  >
                    {isDone ? "Concluída" : "Concluir missão"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <section id="badges" className="grid gap-6 border-y border-[#E2E8F0] py-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0F172A]">Conquistas elegantes</h2>
            <p className="text-sm text-[#475569]">
              Medimos sua evolução com selos de progresso. Sem barulho, só clareza.
            </p>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => {
                const unlocked = unlockedBadges.has(badge.id);
                return (
                  <span
                    key={badge.name}
                    className={`rounded-full border px-3 py-1 text-xs ${
                      unlocked
                        ? "border-[#1E3A8A] bg-[#E0E7FF] text-[#1E3A8A]"
                        : "border-[#CBD5F5] text-[#94A3B8]"
                    }`}
                  >
                    {badge.name}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#64748B]">Seu ranking</p>
            <p className="mt-3 text-2xl font-semibold text-[#0F172A]">R$ 186 economizados em 30 dias</p>
            <p className="mt-2 text-sm text-[#475569]">Você está no top 12% dos usuários.</p>
            <div className="mt-5 h-1 w-full rounded-full bg-[#E2E8F0]">
              <div className="h-1 w-4/5 rounded-full bg-[#1E3A8A]" />
            </div>
          </div>
        </section>

        <section id="pricing" className="grid gap-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-[#0F172A]">Preço simples</h2>
            <p className="text-sm text-[#475569]">R$19/mês com 7 dias grátis.</p>
          </div>
          <div className="rounded-[32px] border border-[#0F172A] bg-white p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#64748B]">AssinaZero</p>
                <p className="mt-3 text-4xl font-semibold text-[#0F172A]">R$ 19</p>
                <p className="mt-2 text-sm text-[#475569]">Tudo incluso, sem pegadinhas.</p>
              </div>
              <div className="text-sm text-[#475569]">
                <p>Assinaturas ilimitadas</p>
                <p>Alertas antes de cobrar</p>
                <p>Templates de cancelamento</p>
                <p>Metas de gasto</p>
              </div>
              <button className="rounded-full bg-[#CA8A04] px-6 py-3 text-sm font-semibold text-white">
                Começar agora
              </button>
            </div>
          </div>
        </section>

        <section id="faq" className="grid gap-10 py-12 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-[#0F172A]">Perguntas frequentes</h2>
            <p className="mt-3 text-sm text-[#475569]">Quer mais detalhes? Respondemos em até 24h.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-[24px] border border-[#E2E8F0] bg-white p-5">
                <h3 className="text-base font-semibold text-[#0F172A]">{faq.q}</h3>
                <p className="mt-2 text-sm text-[#475569]">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-[#1E3A8A] bg-[#0F172A] p-10 text-center text-white">
          <h2 className="text-3xl font-semibold">Pronto para cortar gastos invisíveis?</h2>
          <p className="mt-3 text-sm text-[#CBD5F5]">Teste grátis por 7 dias e veja suas assinaturas escondidas.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="rounded-full bg-[#CA8A04] px-6 py-3 text-sm font-semibold text-white">
              Testar grátis
            </button>
            <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white">
              Ver demo
            </button>
          </div>
        </section>

        <footer className="py-10 text-xs text-[#64748B]">
          © 2026 AssinaZero. Todos os direitos reservados.
        </footer>
      </main>
    </div>
  );
}

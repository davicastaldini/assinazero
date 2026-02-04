import Link from 'next/link'

import { listSubs } from '@/src/server/store'

function statusBadge(status: string) {
  switch (status) {
    case 'ativa':
      return 'border-emerald-400/30 text-emerald-200'
    case 'a_cancelar':
      return 'border-amber-400/30 text-amber-200'
    case 'cancelada':
      return 'border-white/20 text-white/60'
    default:
      return 'border-white/20 text-white/60'
  }
}

function statusLabel(status: string) {
  switch (status) {
    case 'ativa':
      return 'Ativa'
    case 'a_cancelar':
      return 'A cancelar'
    case 'cancelada':
      return 'Cancelada'
    default:
      return status
  }
}

const insights = [
  { title: 'Assinaturas duplicadas', value: '2 serviços', detail: 'Economia possível: R$ 34/mês' },
  { title: 'Renovações nos próximos 7 dias', value: '4 cobranças', detail: 'R$ 152 no total' },
  { title: 'Serviços sem uso', value: '3 ativos', detail: 'Potencial de corte: R$ 89/mês' },
]

export default async function DashboardPage() {
  const subs = await listSubs()
  const total = subs.length
  const aCancelar = subs.filter((s) => s.status === 'a_cancelar').length
  const canceladas = subs.filter((s) => s.status === 'cancelada').length

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Visão geral financeira</h1>
          <p className="text-sm text-white/60">Seu fluxo de assinaturas, alertas e oportunidades de corte.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80">
            Exportar CSV
          </button>
          <Link href="/app/subs/new" className="rounded-full bg-[#2563EB] px-5 py-2 text-xs font-semibold text-white">
            Nova assinatura
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs text-white/60">Assinaturas ativas</p>
          <p className="mt-2 text-3xl font-semibold">{total}</p>
          <p className="mt-3 text-xs text-emerald-300">+2 este mês</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs text-white/60">A cancelar</p>
          <p className="mt-2 text-3xl font-semibold">{aCancelar}</p>
          <p className="mt-3 text-xs text-amber-300">R$ 87/mês em risco</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs text-white/60">Economia estimada</p>
          <p className="mt-2 text-3xl font-semibold">R$ 128</p>
          <p className="mt-3 text-xs text-cyan-300">Meta: R$ 200</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs text-white/60">Canceladas</p>
          <p className="mt-2 text-3xl font-semibold">{canceladas}</p>
          <p className="mt-3 text-xs text-white/50">Últimos 90 dias</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-[#0F1423] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Fluxo mensal</h2>
            <span className="text-xs text-white/50">Jan — Fev</span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs text-white/60">Gasto total</p>
              <p className="mt-2 text-2xl font-semibold">R$ 486</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs text-white/60">Gastos ocultos</p>
              <p className="mt-2 text-2xl font-semibold">R$ 128</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-xs text-white/60">Próxima renovação</p>
              <p className="mt-2 text-2xl font-semibold">3 dias</p>
            </div>
          </div>
          <div className="mt-6 h-[200px] rounded-2xl bg-gradient-to-r from-[#2563EB]/40 via-[#22D3EE]/20 to-[#0EA5E9]/30 p-4">
            <div className="flex h-full items-end gap-3">
              {['45%', '58%', '40%', '75%', '64%', '88%', '55%'].map((h, i) => (
                <div key={i} className="flex-1 rounded-xl bg-white/70" style={{ height: h }} />
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0F1423] p-6">
          <h2 className="text-lg font-semibold">Insights acionáveis</h2>
          <div className="mt-6 space-y-4">
            {insights.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50">{item.title}</p>
                <p className="mt-2 text-lg font-semibold">{item.value}</p>
                <p className="mt-2 text-xs text-white/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-[#0F1423] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Assinaturas críticas</h2>
            <Link href="/app/subs" className="text-xs font-semibold text-cyan-300">
              Ver todas
            </Link>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 border-b border-white/10 bg-white/5 px-4 py-3 text-xs text-white/60">
              <span>Serviço</span>
              <span>Valor</span>
              <span>Renova</span>
              <span>Status</span>
            </div>
            {subs.slice(0, 5).map((sub) => (
              <div key={sub.id} className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 border-b border-white/5 px-4 py-3 text-sm">
                <span className="font-semibold">{sub.name}</span>
                <span>{sub.price}</span>
                <span>{sub.nextCharge}</span>
                <span className={`rounded-full border px-2 py-0.5 text-xs ${statusBadge(sub.status)}`}>
                  {statusLabel(sub.status)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0F1423] p-6">
          <h2 className="text-lg font-semibold">Atividade recente</h2>
          <div className="mt-6 space-y-4 text-sm text-white/70">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-white/80">Spotify marcado para cancelar</p>
              <p className="mt-2 text-xs text-white/50">Hoje • 14:05</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-white/80">Adobe alertado — renova em 2 dias</p>
              <p className="mt-2 text-xs text-white/50">Ontem • 09:22</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-white/80">Plano Netflix ajustado</p>
              <p className="mt-2 text-xs text-white/50">2 dias atrás</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from 'next/link'

import { listSubs } from '@/src/server/store'

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

export default async function DashboardPage() {
  const subs = await listSubs()
  const total = subs.length
  const aCancelar = subs.filter((s) => s.status === 'a_cancelar').length
  const canceladas = subs.filter((s) => s.status === 'cancelada').length

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard financeiro</h1>
          <p className="text-sm text-white/60">Simulação premium para entender onde o dinheiro está indo.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80">
            Exportar relatório
          </button>
          <Link
            href="/app/subs/new"
            className="rounded-full bg-[#22D3EE] px-5 py-2 text-xs font-semibold text-[#0B0F1A]"
          >
            Nova assinatura
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs text-white/60">Assinaturas ativas</p>
          <p className="mt-2 text-3xl font-semibold">{total}</p>
          <p className="mt-3 text-xs text-emerald-300">+2 adicionadas este mês</p>
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

      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-[#0F1423] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Fluxo mensal</h2>
            <span className="text-xs text-white/50">Atualizado hoje</span>
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

          <div className="mt-6 h-[180px] rounded-2xl bg-gradient-to-r from-[#2563EB]/30 via-[#22D3EE]/20 to-[#0EA5E9]/30 p-4">
            <div className="flex h-full items-end gap-3">
              {['40%', '55%', '35%', '70%', '60%', '80%', '50%'].map((h, i) => (
                <div key={i} className="flex-1 rounded-xl bg-white/70" style={{ height: h }} />
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0F1423] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Alertas críticos</h2>
            <Link href="/app/subs" className="text-xs font-semibold text-cyan-300">
              Ver lista
            </Link>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-4">
              <p className="text-sm font-semibold">Adobe</p>
              <p className="text-xs text-amber-200">Renova em 2 dias • R$ 89</p>
            </div>
            <div className="rounded-xl border border-pink-400/20 bg-pink-400/10 p-4">
              <p className="text-sm font-semibold">Streaming Plus</p>
              <p className="text-xs text-pink-200">Sem uso há 28 dias</p>
            </div>
            <div className="rounded-xl border border-indigo-400/20 bg-indigo-400/10 p-4">
              <p className="text-sm font-semibold">Backup Cloud</p>
              <p className="text-xs text-indigo-200">Preço subiu 14% este mês</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-[#0F1423] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Próximas cobranças</h2>
            <Link href="/app/subs" className="text-xs font-semibold text-cyan-300">
              Ver tudo
            </Link>
          </div>
          <div className="mt-6 grid gap-3">
            {subs.slice(0, 5).map((sub) => (
              <div key={sub.id} className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold">
                    {sub.name} · {sub.price}
                  </p>
                  <p className="text-xs text-white/60">Próxima cobrança: {sub.nextCharge}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                    {statusLabel(sub.status)}
                  </span>
                  <Link href={`/app/subs/${sub.id}`} className="text-xs font-semibold text-white">
                    Ver detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0F1423] p-6">
          <h2 className="text-lg font-semibold">Saúde financeira</h2>
          <div className="mt-6 space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Controle de assinaturas</span>
                <span>72%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[72%] rounded-full bg-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Alertas configurados</span>
                <span>54%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[54%] rounded-full bg-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Economia potencial</span>
                <span>80%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[80%] rounded-full bg-indigo-400" />
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
              Você pode economizar R$ 128/mês cortando duas assinaturas agora.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

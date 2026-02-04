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

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500">Visão rápida das suas cobranças do mês.</p>
        </div>
        <Link
          href="/app/subs/new"
          className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300"
        >
          Nova assinatura
        </Link>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-medium text-slate-500">Assinaturas</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">{total}</p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-xs font-medium text-amber-600">A cancelar</p>
          <p className="mt-2 text-3xl font-semibold text-amber-900">{aCancelar}</p>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="text-xs font-medium text-emerald-700">Economia estimada</p>
          <p className="mt-2 text-3xl font-semibold text-emerald-900">R$ 128</p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Próximas cobranças</h2>
          <Link href="/app/subs" className="text-sm font-medium text-cyan-600 hover:text-cyan-500">
            Ver tudo
          </Link>
        </div>
        <div className="grid gap-3">
          {subs.slice(0, 5).map((sub) => (
            <div key={sub.id} className="flex flex-col gap-2 rounded-2xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {sub.name} · {sub.price}
                </p>
                <p className="text-xs text-slate-500">Próxima cobrança: {sub.nextCharge}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  {statusLabel(sub.status)}
                </span>
                <Link href={`/app/subs/${sub.id}`} className="text-xs font-semibold text-cyan-600">
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

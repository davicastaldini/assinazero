import Link from 'next/link'

import { listSubs } from '@/src/server/store'

function statusColor(status: string) {
  switch (status) {
    case 'ativa':
      return 'bg-emerald-100 text-emerald-700'
    case 'a_cancelar':
      return 'bg-amber-100 text-amber-700'
    case 'cancelada':
      return 'bg-slate-100 text-slate-600'
    default:
      return 'bg-slate-100 text-slate-600'
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

export default async function SubsPage() {
  const subs = await listSubs()

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Assinaturas</h1>
          <p className="text-sm text-slate-500">Todas as cobranças em um só lugar.</p>
        </div>
        <Link
          href="/app/subs/new"
          className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300"
        >
          Adicionar assinatura
        </Link>
      </header>

      <div className="grid gap-3">
        {subs.map((sub) => (
          <div key={sub.id} className="rounded-2xl border border-slate-200 p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {sub.name} · {sub.price}
                </p>
                <p className="text-xs text-slate-500">
                  Próxima cobrança: {sub.nextCharge}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor(sub.status)}`}>
                  {statusLabel(sub.status)}
                </span>
                <Link href={`/app/subs/${sub.id}`} className="text-xs font-semibold text-cyan-600">
                  Abrir
                </Link>
                <Link href={`/app/subs/${sub.id}/edit`} className="text-xs font-semibold text-slate-500">
                  Editar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

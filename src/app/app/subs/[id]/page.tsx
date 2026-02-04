import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getSub } from '@/src/server/store'

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

export default async function SubDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const sub = await getSub(id)
  if (!sub) return notFound()

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs text-slate-500">Assinatura</p>
          <h1 className="text-2xl font-semibold text-slate-900">
            {sub.name} · {sub.price}
          </h1>
          <p className="text-sm text-slate-500">Próxima cobrança: {sub.nextCharge}</p>
        </div>
        <Link href="/app/subs" className="text-sm font-medium text-cyan-600">
          Voltar para lista
        </Link>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-4">
          <p className="text-xs text-slate-500">Status atual</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{statusLabel(sub.status)}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-4">
          <p className="text-xs text-slate-500">Criado em</p>
          <p className="mt-2 text-sm text-slate-700">{new Date(sub.createdAt).toLocaleString('pt-BR')}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-4">
          <p className="text-xs text-slate-500">Atualizado</p>
          <p className="mt-2 text-sm text-slate-700">{new Date(sub.updatedAt).toLocaleString('pt-BR')}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 p-5">
        <h2 className="text-sm font-semibold text-slate-900">Notas</h2>
        <p className="mt-2 text-sm text-slate-600">{sub.notes || 'Sem notas adicionais.'}</p>
      </section>

      <section className="rounded-2xl border border-slate-200 p-5">
        <h2 className="text-sm font-semibold text-slate-900">Atualizar status</h2>
        <form
          action={`/api/subs/${sub.id}/status`}
          method="post"
          className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <select name="status" className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
            <option value="ativa">Ativa</option>
            <option value="a_cancelar">A cancelar</option>
            <option value="cancelada">Cancelada</option>
          </select>
          <button className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300" type="submit">
            Salvar status
          </button>
        </form>
      </section>
    </div>
  )
}

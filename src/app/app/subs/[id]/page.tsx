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
          <p className="text-xs text-[#64748B]">Assinatura</p>
          <h1 className="text-2xl font-semibold">
            {sub.name} · {sub.price}
          </h1>
          <p className="text-sm text-[#64748B]">Próxima cobrança: {sub.nextCharge}</p>
        </div>
        <Link href="/app/subs" className="text-sm font-medium text-[#1D4ED8]">
          Voltar para lista
        </Link>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[22px] border border-[#E7E2DA] p-4">
          <p className="text-xs text-[#64748B]">Status atual</p>
          <p className="mt-2 text-lg font-semibold">{statusLabel(sub.status)}</p>
        </div>
        <div className="rounded-[22px] border border-[#E7E2DA] p-4">
          <p className="text-xs text-[#64748B]">Criado em</p>
          <p className="mt-2 text-sm text-[#475569]">{new Date(sub.createdAt).toLocaleString('pt-BR')}</p>
        </div>
        <div className="rounded-[22px] border border-[#E7E2DA] p-4">
          <p className="text-xs text-[#64748B]">Atualizado</p>
          <p className="mt-2 text-sm text-[#475569]">{new Date(sub.updatedAt).toLocaleString('pt-BR')}</p>
        </div>
      </section>

      <section className="rounded-[22px] border border-[#E7E2DA] p-5">
        <h2 className="text-sm font-semibold">Notas</h2>
        <p className="mt-2 text-sm text-[#475569]">{sub.notes || 'Sem notas adicionais.'}</p>
      </section>

      <section className="flex flex-wrap gap-3">
        <Link href={`/app/subs/${sub.id}/edit`} className="rounded-full border border-[#0F172A] px-4 py-2 text-sm">
          Editar
        </Link>
        <form
          action={`/api/subs/${sub.id}`}
          method="post"
          onSubmit={async (e) => {
            e.preventDefault()
            if (!confirm('Excluir assinatura?')) return
            const res = await fetch(`/api/subs/${sub.id}`, { method: 'DELETE' })
            if (res.ok) window.location.href = '/app/subs'
          }}
        >
          <button className="rounded-full bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white">
            Excluir
          </button>
        </form>
      </section>
    </div>
  )
}

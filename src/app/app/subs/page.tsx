import Link from 'next/link'

import { listSubs } from '@/src/server/store'

function statusColor(status: string) {
  switch (status) {
    case 'ativa':
      return 'bg-[#ECFDF3] text-[#166534]'
    case 'a_cancelar':
      return 'bg-[#FEF3C7] text-[#92400E]'
    case 'cancelada':
      return 'bg-[#F1F5F9] text-[#64748B]'
    default:
      return 'bg-[#F1F5F9] text-[#64748B]'
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
          <h1 className="text-2xl font-semibold">Assinaturas</h1>
          <p className="text-sm text-[#64748B]">Todas as cobranças em um só lugar.</p>
        </div>
        <Link
          href="/app/subs/new"
          className="rounded-full bg-[#0F172A] px-5 py-2 text-sm font-semibold text-white"
        >
          Adicionar assinatura
        </Link>
      </header>

      <div className="grid gap-3">
        {subs.map((sub) => (
          <div key={sub.id} className="rounded-[22px] border border-[#E7E2DA] p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold">
                  {sub.name} · {sub.price}
                </p>
                <p className="text-xs text-[#64748B]">
                  Próxima cobrança: {sub.nextCharge}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor(sub.status)}`}>
                  {statusLabel(sub.status)}
                </span>
                <Link href={`/app/subs/${sub.id}`} className="text-xs font-semibold text-[#0F172A]">
                  Abrir
                </Link>
                <Link href={`/app/subs/${sub.id}/edit`} className="text-xs font-semibold text-[#64748B]">
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

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
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-sm text-[#64748B]">Visão rápida das suas cobranças do mês.</p>
        </div>
        <Link
          href="/app/subs/new"
          className="rounded-full bg-[#0F172A] px-5 py-2 text-sm font-semibold text-white"
        >
          Nova assinatura
        </Link>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[22px] border border-[#E7E2DA] bg-[#FFF7ED] p-5">
          <p className="text-xs font-medium text-[#9A3412]">Assinaturas</p>
          <p className="mt-2 text-3xl font-semibold">{total}</p>
        </div>
        <div className="rounded-[22px] border border-[#E7E2DA] bg-[#EEF2FF] p-5">
          <p className="text-xs font-medium text-[#1D4ED8]">A cancelar</p>
          <p className="mt-2 text-3xl font-semibold">{aCancelar}</p>
        </div>
        <div className="rounded-[22px] border border-[#E7E2DA] bg-[#ECFDF3] p-5">
          <p className="text-xs font-medium text-[#166534]">Economia estimada</p>
          <p className="mt-2 text-3xl font-semibold">R$ 128</p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Próximas cobranças</h2>
          <Link href="/app/subs" className="text-sm font-medium text-[#1D4ED8]">
            Ver tudo
          </Link>
        </div>
        <div className="grid gap-3">
          {subs.slice(0, 5).map((sub) => (
            <div key={sub.id} className="flex flex-col gap-2 rounded-[22px] border border-[#E7E2DA] p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold">
                  {sub.name} · {sub.price}
                </p>
                <p className="text-xs text-[#64748B]">Próxima cobrança: {sub.nextCharge}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#E2E8F0] px-3 py-1 text-xs text-[#0F172A]">
                  {statusLabel(sub.status)}
                </span>
                <Link href={`/app/subs/${sub.id}`} className="text-xs font-semibold text-[#0F172A]">
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

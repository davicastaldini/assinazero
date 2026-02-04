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
          <p className="text-sm text-[#64748B]">Resumo inteligente das suas cobranças e alertas.</p>
        </div>
        <Link
          href="/app/subs/new"
          className="rounded-full bg-[#2563EB] px-5 py-2 text-sm font-semibold text-white"
        >
          Nova assinatura
        </Link>
      </header>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-[22px] border border-[#E7E2DA] bg-[#FFF7ED] p-5">
          <p className="text-xs font-medium text-[#9A3412]">Assinaturas ativas</p>
          <p className="mt-2 text-3xl font-semibold">{total}</p>
          <p className="mt-2 text-xs text-[#9A3412]">+2 neste mês</p>
        </div>
        <div className="rounded-[22px] border border-[#E7E2DA] bg-[#EEF2FF] p-5">
          <p className="text-xs font-medium text-[#1D4ED8]">A cancelar</p>
          <p className="mt-2 text-3xl font-semibold">{aCancelar}</p>
          <p className="mt-2 text-xs text-[#1D4ED8]">R$ 87/mês em risco</p>
        </div>
        <div className="rounded-[22px] border border-[#E7E2DA] bg-[#ECFDF3] p-5">
          <p className="text-xs font-medium text-[#166534]">Economia estimada</p>
          <p className="mt-2 text-3xl font-semibold">R$ 128</p>
          <p className="mt-2 text-xs text-[#166534]">Meta: R$ 200</p>
        </div>
        <div className="rounded-[22px] border border-[#E7E2DA] bg-white p-5">
          <p className="text-xs font-medium text-[#0F172A]">Canceladas</p>
          <p className="mt-2 text-3xl font-semibold">{canceladas}</p>
          <p className="mt-2 text-xs text-[#64748B]">Histórico 90 dias</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-[24px] border border-[#E7E2DA] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Fluxo do mês</h2>
            <span className="text-xs text-[#64748B]">Atualizado hoje</span>
          </div>
          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-[#F8FAFC] p-4">
              <p className="text-xs text-[#64748B]">Total gasto</p>
              <p className="mt-2 text-2xl font-semibold">R$ 486</p>
            </div>
            <div className="rounded-2xl bg-[#F8FAFC] p-4">
              <p className="text-xs text-[#64748B]">Gastos ocultos detectados</p>
              <p className="mt-2 text-2xl font-semibold">R$ 128</p>
            </div>
            <div className="rounded-2xl bg-[#F8FAFC] p-4">
              <p className="text-xs text-[#64748B]">Próxima renovação</p>
              <p className="mt-2 text-2xl font-semibold">Em 3 dias</p>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#E7E2DA] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Alertas críticos</h2>
            <Link href="/app/subs" className="text-xs font-semibold text-[#2563EB]">
              Ver lista
            </Link>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-[#FDE68A] bg-[#FFFBEB] p-4">
              <p className="text-sm font-semibold">Adobe</p>
              <p className="text-xs text-[#92400E]">Renova em 2 dias • R$ 89</p>
            </div>
            <div className="rounded-2xl border border-[#FBCFE8] bg-[#FFF1F2] p-4">
              <p className="text-sm font-semibold">Streaming Plus</p>
              <p className="text-xs text-[#9F1239]">Sem uso há 28 dias</p>
            </div>
            <div className="rounded-2xl border border-[#C7D2FE] bg-[#EEF2FF] p-4">
              <p className="text-sm font-semibold">Backup Cloud</p>
              <p className="text-xs text-[#3730A3]">Preço subiu 14% este mês</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Próximas cobranças</h2>
          <Link href="/app/subs" className="text-sm font-medium text-[#2563EB]">
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

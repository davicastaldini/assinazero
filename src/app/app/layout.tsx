import Link from 'next/link'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#F8F5F1] text-[#0F172A]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[260px_1fr]">
        <aside className="flex flex-col gap-6 rounded-[28px] border border-[#E7E2DA] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F172A] text-white">AZ</div>
            <div>
              <p className="text-sm font-semibold">AssinaZero</p>
              <p className="text-xs text-[#64748B]">Painel financeiro</p>
            </div>
          </div>

          <nav className="grid gap-2 text-sm">
            <Link className="rounded-xl px-3 py-2 text-[#0F172A] hover:bg-[#EEF2FF]" href="/app/dashboard">
              Dashboard
            </Link>
            <Link className="rounded-xl px-3 py-2 text-[#0F172A] hover:bg-[#EEF2FF]" href="/app/subs">
              Assinaturas
            </Link>
            <Link className="rounded-xl px-3 py-2 text-[#0F172A] hover:bg-[#EEF2FF]" href="/app/subs/new">
              Nova assinatura
            </Link>
          </nav>

          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] p-4 text-xs text-[#1E293B]">
            Status: Demo ativa • Base em memória
          </div>

          <Link href="/" className="text-xs font-semibold text-[#1D4ED8]">
            Ver site público
          </Link>
        </aside>

        <main className="rounded-[28px] border border-[#E7E2DA] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-6 border-b border-[#E7E2DA] px-6 py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#64748B]">Painel</p>
              <p className="text-lg font-semibold">Boa noite, Davi</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full border border-[#0F172A] px-4 py-2 text-xs font-semibold">
                Importar por e-mail
              </button>
              <button className="rounded-full bg-[#0F172A] px-4 py-2 text-xs font-semibold text-white">
                Gerar alerta
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

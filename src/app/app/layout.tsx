import Link from 'next/link'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#0B0F1A] text-white">
      <div className="flex min-h-dvh">
        <aside className="hidden w-[260px] flex-col border-r border-white/10 bg-[#0F1423] p-6 lg:flex">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1E40AF] text-white">AZ</div>
            <div>
              <p className="text-sm font-semibold">AssinaZero</p>
              <p className="text-xs text-white/60">Finanças pessoais</p>
            </div>
          </div>

          <nav className="mt-8 grid gap-2 text-sm">
            <Link className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/5" href="/app/dashboard">
              Dashboard
            </Link>
            <Link className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/5" href="/app/subs">
              Assinaturas
            </Link>
            <Link className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/5" href="/app/subs/new">
              Nova assinatura
            </Link>
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
            Demo ativa • Base em memória
          </div>
        </aside>

        <main className="flex-1">
          <div className="border-b border-white/10 bg-[#0F1423] px-6 py-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Painel</p>
                <p className="text-lg font-semibold">Boa noite, Davi</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white">
                  Importar por e-mail
                </button>
                <button className="rounded-full bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white">
                  Gerar alerta
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 lg:px-10">{children}</div>
        </main>
      </div>
    </div>
  )
}

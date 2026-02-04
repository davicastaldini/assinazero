import Link from 'next/link'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[240px_1fr]">
        <aside className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
              AZ
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">AssinaZero</p>
              <p className="text-xs text-slate-500">Seu painel</p>
            </div>
          </div>

          <nav className="grid gap-2 text-sm">
            <Link className="rounded-lg px-3 py-2 text-slate-600 hover:bg-cyan-50 hover:text-cyan-700" href="/app/dashboard">
              Dashboard
            </Link>
            <Link className="rounded-lg px-3 py-2 text-slate-600 hover:bg-cyan-50 hover:text-cyan-700" href="/app/subs">
              Assinaturas
            </Link>
            <Link className="rounded-lg px-3 py-2 text-slate-600 hover:bg-cyan-50 hover:text-cyan-700" href="/">
              Site público
            </Link>
          </nav>

          <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-xs text-cyan-700">
            Status: Demo ativa • Base em memória
          </div>
        </aside>

        <main className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

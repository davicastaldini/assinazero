import Link from 'next/link'

const navItems = [
  { href: '/app/dashboard', label: 'Overview' },
  { href: '/app/subs', label: 'Assinaturas' },
  { href: '/app/subs/new', label: 'Nova assinatura' },
  { href: '/', label: 'Site público' },
]

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#0B0F1A] text-white">
      <div className="flex min-h-dvh">
        <aside className="hidden w-[280px] flex-col border-r border-white/10 bg-[#0F1423] p-6 lg:flex">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB] text-white">
              AZ
            </div>
            <div>
              <p className="text-sm font-semibold">AssinaZero</p>
              <p className="text-xs text-white/60">Controle de assinaturas</p>
            </div>
          </div>

          <nav className="mt-8 grid gap-2 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-2 text-white/85 hover:bg-white/5">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
            Base demo • Atualização diária
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#2563EB]/20 via-transparent to-[#22D3EE]/10 p-4 text-xs">
            <p className="text-white/70">Economia potencial</p>
            <p className="mt-2 text-lg font-semibold">R$ 128/mês</p>
            <p className="mt-2 text-white/60">Ative 2 cancelamentos para atingir.</p>
          </div>
        </aside>

        <main className="flex-1">
          <div className="border-b border-white/10 bg-[#0F1423] px-6 py-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Dashboard</p>
                <p className="text-lg font-semibold">Boa noite, Davi</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60 md:flex">
                  <span>Últimos 30 dias</span>
                </div>
                <button className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white">
                  Importar por e-mail
                </button>
                <button className="rounded-full bg-[#22D3EE] px-4 py-2 text-xs font-semibold text-[#0B0F1A]">
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

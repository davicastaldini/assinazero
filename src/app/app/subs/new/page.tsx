'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewSubPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [nextCharge, setNextCharge] = useState('')
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState('ativa')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit() {
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('/api/subs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price, nextCharge, notes, status }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || 'Erro ao criar assinatura')
      router.push(`/app/subs/${json.id}`)
    } catch (e: any) {
      setError(e?.message || 'Erro ao criar assinatura')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">Nova assinatura</h1>
        <p className="text-sm text-slate-500">Adicione uma cobrança para acompanhar.</p>
      </header>

      <div className="rounded-2xl border border-slate-200 p-5">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Serviço</label>
            <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex.: Netflix" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Valor</label>
            <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Ex.: R$ 39,90" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Próxima cobrança</label>
            <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" value={nextCharge} onChange={(e) => setNextCharge(e.target.value)} placeholder="2026-02-20" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Status</label>
            <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="ativa">Ativa</option>
              <option value="a_cancelar">A cancelar</option>
              <option value="cancelada">Cancelada</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Notas</label>
            <textarea className="min-h-[120px] rounded-lg border border-slate-200 px-3 py-2 text-sm" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Motivo, observações..." />
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <div className="flex items-center justify-end gap-3">
            <button className="rounded-full border border-slate-200 px-4 py-2 text-sm" onClick={() => router.push('/app/subs')}>Cancelar</button>
            <button className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900" onClick={onSubmit} disabled={loading || !name || !price}>
              {loading ? 'Salvando…' : 'Salvar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EditSubPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [nextCharge, setNextCharge] = useState('')
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState('ativa')

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/subs/${params.id}`)
        const json = await res.json()
        if (!res.ok) throw new Error(json?.error || 'Erro ao carregar')
        setName(json.sub.name)
        setPrice(json.sub.price)
        setNextCharge(json.sub.nextCharge)
        setNotes(json.sub.notes || '')
        setStatus(json.sub.status)
      } catch (e: any) {
        setError(e?.message || 'Erro ao carregar')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [params.id])

  async function onSave() {
    setSaving(true)
    setError(null)
    try {
      const res = await fetch(`/api/subs/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price, nextCharge, notes, status }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || 'Erro ao salvar')
      router.push(`/app/subs/${params.id}`)
    } catch (e: any) {
      setError(e?.message || 'Erro ao salvar')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <p className="text-sm text-[#64748B]">Carregando...</p>
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">Editar assinatura</h1>
        <p className="text-sm text-[#64748B]">Atualize os dados da assinatura.</p>
      </header>

      <div className="rounded-[22px] border border-[#E7E2DA] p-5">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#0F172A]">Serviço</label>
            <input className="rounded-xl border border-[#E2E8F0] px-3 py-2 text-sm" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#0F172A]">Valor</label>
            <input className="rounded-xl border border-[#E2E8F0] px-3 py-2 text-sm" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#0F172A]">Próxima cobrança</label>
            <input className="rounded-xl border border-[#E2E8F0] px-3 py-2 text-sm" value={nextCharge} onChange={(e) => setNextCharge(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#0F172A]">Status</label>
            <select className="rounded-xl border border-[#E2E8F0] px-3 py-2 text-sm" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="ativa">Ativa</option>
              <option value="a_cancelar">A cancelar</option>
              <option value="cancelada">Cancelada</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#0F172A]">Notas</label>
            <textarea className="min-h-[120px] rounded-xl border border-[#E2E8F0] px-3 py-2 text-sm" value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <div className="flex items-center justify-end gap-3">
            <button className="rounded-full border border-[#0F172A] px-4 py-2 text-sm" onClick={() => router.push(`/app/subs/${params.id}`)}>
              Cancelar
            </button>
            <button className="rounded-full bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white" onClick={onSave} disabled={saving || !name || !price}>
              {saving ? 'Salvando…' : 'Salvar alterações'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

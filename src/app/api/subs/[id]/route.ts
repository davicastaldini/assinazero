import { NextResponse } from 'next/server'
import { z } from 'zod'

import { deleteSub, getSub, updateSub } from '@/src/server/store'

const schema = z.object({
  name: z.string().min(2),
  price: z.string().min(1),
  nextCharge: z.string().min(1),
  status: z.enum(['ativa', 'a_cancelar', 'cancelada']),
  notes: z.string().optional().default(''),
})

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const sub = await getSub(id)
  if (!sub) return NextResponse.json({ error: 'Assinatura não encontrada' }, { status: 404 })
  return NextResponse.json({ sub })
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await req.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 })
    }

    const updated = await updateSub(id, parsed.data)
    if (!updated) return NextResponse.json({ error: 'Assinatura não encontrada' }, { status: 404 })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const deleted = await deleteSub(id)
  if (!deleted) return NextResponse.json({ error: 'Assinatura não encontrada' }, { status: 404 })
  return NextResponse.json({ ok: true })
}

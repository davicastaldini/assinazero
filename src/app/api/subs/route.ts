import { NextResponse } from 'next/server'
import { z } from 'zod'

import { createSub, listSubs } from '@/src/server/store'

const schema = z.object({
  name: z.string().min(2),
  price: z.string().min(1),
  nextCharge: z.string().min(1),
  status: z.enum(['ativa', 'a_cancelar', 'cancelada']).default('ativa'),
  notes: z.string().optional().default(''),
})

export async function GET() {
  const subs = await listSubs()
  return NextResponse.json({ subs })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 })
    }

    const sub = await createSub(parsed.data)
    return NextResponse.json({ id: sub.id })
  } catch {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}

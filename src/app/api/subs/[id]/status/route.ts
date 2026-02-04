import { NextResponse } from 'next/server'
import { z } from 'zod'

import { updateSubStatus } from '@/src/server/store'

const schema = z.object({
  status: z.enum(['ativa', 'a_cancelar', 'cancelada']),
})

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const form = await req.formData()
    const status = form.get('status')
    const parsed = schema.safeParse({ status })
    if (!parsed.success) {
      return NextResponse.json({ error: 'Status inválido' }, { status: 400 })
    }

    const updated = await updateSubStatus(id, parsed.data.status)
    if (!updated) return NextResponse.json({ error: 'Assinatura não encontrada' }, { status: 404 })

    return NextResponse.redirect(new URL(`/app/subs/${id}`, req.url))
  } catch {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}

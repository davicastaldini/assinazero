import { randomUUID } from 'crypto'

export type SubscriptionStatus = 'ativa' | 'a_cancelar' | 'cancelada'

export type Subscription = {
  id: string
  name: string
  price: string
  nextCharge: string
  status: SubscriptionStatus
  notes: string
  createdAt: string
  updatedAt: string
}

const subs = new Map<string, Subscription>()

export async function listSubs() {
  ensureSeed()
  return Array.from(subs.values()).sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export async function getSub(id: string) {
  ensureSeed()
  return subs.get(id) || null
}

export async function createSub(payload: {
  name: string
  price: string
  nextCharge: string
  status: SubscriptionStatus
  notes: string
}) {
  const now = new Date().toISOString()
  const sub: Subscription = {
    id: randomUUID(),
    name: payload.name,
    price: payload.price,
    nextCharge: payload.nextCharge,
    status: payload.status,
    notes: payload.notes,
    createdAt: now,
    updatedAt: now,
  }
  subs.set(sub.id, sub)
  return sub
}

export async function updateSubStatus(id: string, status: SubscriptionStatus) {
  const sub = subs.get(id)
  if (!sub) return null
  const updated = { ...sub, status, updatedAt: new Date().toISOString() }
  subs.set(id, updated)
  return updated
}

export async function updateSub(
  id: string,
  payload: {
    name: string
    price: string
    nextCharge: string
    status: SubscriptionStatus
    notes: string
  }
) {
  const sub = subs.get(id)
  if (!sub) return null
  const updated = {
    ...sub,
    ...payload,
    updatedAt: new Date().toISOString(),
  }
  subs.set(id, updated)
  return updated
}

export async function deleteSub(id: string) {
  const sub = subs.get(id)
  if (!sub) return null
  subs.delete(id)
  return sub
}

function ensureSeed() {
  if (subs.size > 0) return
  const now = new Date().toISOString()
  const seed: Subscription[] = [
    {
      id: randomUUID(),
      name: 'Spotify',
      price: 'R$ 21,90',
      nextCharge: '2026-02-12',
      status: 'ativa',
      notes: 'Uso diário. Manter.',
      createdAt: now,
      updatedAt: now,
    },
    {
      id: randomUUID(),
      name: 'Adobe',
      price: 'R$ 89,00',
      nextCharge: '2026-02-10',
      status: 'a_cancelar',
      notes: 'Sem uso há 60 dias. Cancelar antes de renovar.',
      createdAt: now,
      updatedAt: now,
    },
    {
      id: randomUUID(),
      name: 'Gympass',
      price: 'R$ 139,00',
      nextCharge: '2026-02-19',
      status: 'ativa',
      notes: 'Renegociar plano no próximo mês.',
      createdAt: now,
      updatedAt: now,
    },
  ]

  seed.forEach((sub) => subs.set(sub.id, sub))
}

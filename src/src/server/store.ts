import { prisma } from './db'

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

function toSubscription(row: any): Subscription {
  return {
    id: row.id,
    name: row.name,
    price: row.price,
    nextCharge: row.nextCharge,
    status: row.status as SubscriptionStatus,
    notes: row.notes ?? '',
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  }
}

const seedSubs = [
  {
    name: 'Netflix',
    price: 'R$ 55,90',
    nextCharge: '2026-02-10',
    status: 'ativa' as const,
    notes: 'Plano padrão. Sem uso há 12 dias.',
  },
  {
    name: 'Spotify',
    price: 'R$ 34,90',
    nextCharge: '2026-02-08',
    status: 'a_cancelar' as const,
    notes: 'Marcar para cancelar após a próxima cobrança.',
  },
  {
    name: 'Adobe CC',
    price: 'R$ 89,00',
    nextCharge: '2026-02-06',
    status: 'a_cancelar' as const,
    notes: 'Equipe migrou para alternativa mais barata.',
  },
  {
    name: 'Notion',
    price: 'R$ 49,00',
    nextCharge: '2026-02-12',
    status: 'ativa' as const,
    notes: '',
  },
]

async function ensureSeed() {
  const count = await prisma.subscription.count()
  if (count > 0) return
  await prisma.subscription.createMany({ data: seedSubs })
}

export async function listSubs() {
  await ensureSeed()
  const rows = await prisma.subscription.findMany({ orderBy: { createdAt: 'desc' } })
  return rows.map(toSubscription)
}

export async function getSub(id: string) {
  await ensureSeed()
  const row = await prisma.subscription.findUnique({ where: { id } })
  return row ? toSubscription(row) : null
}

export async function createSub(data: {
  name: string
  price: string
  nextCharge: string
  status: SubscriptionStatus
  notes: string
}) {
  await ensureSeed()
  const row = await prisma.subscription.create({ data })
  return toSubscription(row)
}

export async function updateSubStatus(id: string, status: SubscriptionStatus) {
  await ensureSeed()
  const row = await prisma.subscription.update({ where: { id }, data: { status } })
  return toSubscription(row)
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
  await ensureSeed()
  const row = await prisma.subscription.update({ where: { id }, data: payload })
  return toSubscription(row)
}

export async function deleteSub(id: string) {
  await ensureSeed()
  const row = await prisma.subscription.delete({ where: { id } })
  return row ? toSubscription(row) : null
}

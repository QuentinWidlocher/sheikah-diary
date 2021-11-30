import { PrismaClient } from '@prisma/client'
let db = new PrismaClient()

async function seed() {
  await db.user.create({
    data: {
      username: 'anonymous',
      passwordHash:
        '$2y$10$nPCRkrfa/Du2/QiLXzPaYeJAiKdwUBMQE5.oSpIr3./Ou4BjLImB2', // anonymous
    },
  })
}

seed()

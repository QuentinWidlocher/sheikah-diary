import { PrismaClient } from '@prisma/client'
let db = new PrismaClient()

async function seed() {
  let anon = await db.user.create({
    data: {
      username: 'anonymous',
      passwordHash:
        '$2y$10$nPCRkrfa/Du2/QiLXzPaYeJAiKdwUBMQE5.oSpIr3./Ou4BjLImB2', // anonymous
    },
  })

  let entry = await db.entry.create({
    data: {
      slug: 'first-post',
      title: 'First Post',
      content: 'The first post ever here',
      userId: anon.id,
    },
  })

  await db.comment.create({
    data: {
      body: 'What a cool first post omg',
      entryId: entry.id,
      userId: anon.id,
    },
  })

  await db.comment.create({
    data: {
      body:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis suscipit laboriosam distinctio ullam recusandae voluptates impedit magnam nam? Quam voluptatibus quia excepturi reprehenderit explicabo ut eius ab saepe tempore aperiam!',
      entryId: entry.id,
      userId: anon.id,
    },
  })
}

seed()

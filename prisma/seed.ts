import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
    // const data = weatherImages.map(image => ({
    //     name: image.name,
    //     url: image.url,
    //     code: image.code
    // }))
    // await prisma.weatherImage.createMany({
    //     data 
    // })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
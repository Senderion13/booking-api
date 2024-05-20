import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.hotel.create({
    data: {
      title: '1',
      description: '',
      rooms: {
        create: [
          {
            price: 100,
            guests: 5,
            hasBar: true,
            hasBreakfast: true,
            hasParking: true,
            hasShower: true,
            hasWifi: true,
          },
          {
            price: 90,
            guests: 4,
            hasBar: true,
            hasBreakfast: false,
            hasParking: true,
            hasShower: true,
            hasWifi: true,
          },
          {
            price: 80,
            guests: 3,
            hasBar: false,
            hasBreakfast: true,
            hasParking: true,
            hasShower: true,
            hasWifi: true,
          },
          {
            price: 50,
            guests: 1,
            hasBar: true,
            hasBreakfast: true,
            hasParking: true,
            hasShower: true,
            hasWifi: true,
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

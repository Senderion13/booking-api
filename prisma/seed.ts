import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.hotel.create({
    data: {
      title: 'Margaritaville Resort Times Square',
      location: 'USA, New York',
      rating: 9.5,
      description: `Located in New York, a 6-minute walk from Bryant Park, Margaritaville Resort Times Square provides accommodations with a fitness center, private parking, a terrace and a restaurant. This 4-star hotel offers room service and a concierge service. The property is 600 yards from the city center and a 7-minute walk from Macy's.

      A continental breakfast is available daily at the hotel.
      
      Speaking Mandarin, German, English and Spanish at the reception, staff will be happy to provide guests with practical guidance on the area.
      
      Popular points of interest near Margaritaville Resort Times Square include Madison Square Garden, Times Square and Grand Central Station. The nearest airport is LaGuardia Airport, 7.5 miles from the accommodation.
      
      Couples in particular like the location – they rated it 9.5 for a two-person trip.`,
      HotelImages: {
        create: [
          { url: 'localhost:5000/images/1-1.jpg' },
          { url: 'localhost:5000/images/1-2.jpg' },
          { url: 'localhost:5000/images/1-3.jpg' },
        ],
      },
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
  await prisma.hotel.create({
    data: {
      title: 'Park Plaza Lodge',
      location: 'USA, Los Angeles',
      rating: 9.5,
      description: `Downtown in the vibrant city of Los Angeles, California, this hotel has convenient services in Hancock Park, which is also known as the Miracle Mile.

      Park Plaza has a helpful concierge service that can provides guests with tour arrangements, dinner reservations, spa appointments and transportation services. After a day of exploring the city, take a swim in the pool or check email using the wireless internet.
      
      Visit The Grove, just half a mile away, a Los Angeles hot spot with a multi-Cineplex and fine shopping opportunities. Rodeo Drive, Sunset Strip and CBS Studios are within 5 miles of the Park Plaza Lodge.
      
      Couples in particular like the location – they rated it 9.2 for a two-person trip.`,
      HotelImages: {
        create: [
          { url: 'localhost:5000/images/2-1.jpg' },
          { url: 'localhost:5000/images/2-2.jpg' },
          { url: 'localhost:5000/images/2-3.jpg' },
        ],
      },
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
  await prisma.hotel.create({
    data: {
      title: 'HighPark Berlin am Potsdamer Platz',
      location: 'Germany, Berlin',
      rating: 9.5,
      description: `HighPark Berlin am Potsdamer Platz is located just off Potsdamer Platz in Berlin’s central Mitte district. It is within a 15-minute walk of attractions such as the Brandenburg Gate, Holocaust Memorial and Topography of Terror.

      Occupying the first 3 floors of a modern building, HighPark Berlin am Potsdamer Platz offers high-end suites, studios and apartments with free WiFi and additional services. All units feature ergonomic furniture, comfortable beds with orthopedic mattresses, a small fully equipped kitchen as well as free toiletries. Most units also have a balcony.
      
      Many shops, cafes and restaurants can be found nearby.
      
      The nearby Potsdamer Platz offers excellent access to public transport across Berlin, by bus as well as the U2 underground line or suburban train routes.
      
      Checkpoint Charlie is a 20-minute walk from HighPark Berlin am Potsdamer Platz, and Tegel Airport is just 6.2 mi away.
      
      Couples in particular like the location – they rated it 9.4 for a two-person trip.`,
      HotelImages: {
        create: [
          { url: 'localhost:5000/images/3-1.jpg' },
          { url: 'localhost:5000/images/3-2.jpg' },
          { url: 'localhost:5000/images/3-3.jpg' },
        ],
      },
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

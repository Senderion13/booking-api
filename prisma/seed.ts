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
  await prisma.hotel.create({
    data: {
      title: 'Hotel Residence Foch',
      location: 'France, Paris',
      rating: 8.2,
      description: `All the guest rooms at Residence Foch are individually decorated and air-conditioned. The wooden furnishings give them a cozy feel. They come with a flat-screen TV and free Wi-Fi access. There is also a courtesy tray, a mini-bar and a private bathroom. Unlimited international phone calls are available in this property.

      Every morning a breakfast buffet is served. The bar area and breakfast lounge open out onto an inner garden, where guests can relax after a day's sightseeing.
      
      Ideally located in the heart of the16th arrondissement of Paris, the hotel is only a 45-minute drive from Charles de Gaulle airport. It is close to several metro stations with connections to Lines 1 and 2 and RER line C providing good access to the city's top tourist attractions.`,
      HotelImages: {
        create: [
          { url: 'localhost:5000/images/4-1.jpg' },
          { url: 'localhost:5000/images/4-2.jpg' },
          { url: 'localhost:5000/images/4-3.jpg' },
        ],
      },
      rooms: {
        create: [
          {
            price: 75,
            guests: 3,
            hasBar: true,
            hasBreakfast: false,
            hasParking: false,
            hasShower: true,
            hasWifi: true,
          },
          {
            price: 90,
            guests: 4,
            hasBar: true,
            hasBreakfast: true,
            hasParking: false,
            hasShower: true,
            hasWifi: true,
          },
          {
            price: 110,
            guests: 5,
            hasBar: true,
            hasBreakfast: true,
            hasParking: false,
            hasShower: true,
            hasWifi: true,
          },
          {
            price: 50,
            guests: 2,
            hasBar: true,
            hasBreakfast: false,
            hasParking: false,
            hasShower: true,
            hasWifi: true,
          },
        ],
      },
    },
  });
  await prisma.hotel.create({
    data: {
      title: 'Casaprisco',
      location: 'Netherlands, Putten',
      rating: 7.8,
      description: `Providing a garden, Casaprisco provides accommodations in Putten. The property is around 20 miles from Apenheul Primate Park, 23 miles from Huis Doorn, and 29 miles from Dinoland Zwolle. There's a sun terrace and guests have access to free Wifi, free private parking, and an electric vehicle charging station.

      Towels and bed linen are offered in the bed and breakfast. The property has an outdoor dining area.
      
      For guests with children, the bed and breakfast offers outdoor play equipment. The bed and breakfast also offers outdoor fireplace and a picnic area for a day outdoors.
      
      Sassenpoort is 30 miles from Casaprisco, while Kasteel Amerongen is 26 miles from the property. The nearest airport is Schiphol Airport, 45 miles from the accommodation.`,
      HotelImages: {
        create: [
          { url: 'localhost:5000/images/5-1.jpg' },
          { url: 'localhost:5000/images/5-2.jpg' },
          { url: 'localhost:5000/images/5-3.jpg' },
        ],
      },
      rooms: {
        create: [
          {
            price: 78,
            guests: 4,
            hasBar: false,
            hasBreakfast: true,
            hasParking: false,
            hasShower: true,
            hasWifi: true,
          },
          {
            price: 90,
            guests: 5,
            hasBar: false,
            hasBreakfast: true,
            hasParking: false,
            hasShower: true,
            hasWifi: true,
          },
          {
            price: 110,
            guests: 3,
            hasBar: true,
            hasBreakfast: true,
            hasParking: false,
            hasShower: true,
            hasWifi: true,
          },
          {
            price: 95,
            guests: 5,
            hasBar: true,
            hasBreakfast: true,
            hasParking: false,
            hasShower: true,
            hasWifi: true,
          },
        ],
      },
    },
  });
  await prisma.hotel.create({
    data: {
      title: 'Henderson Beach Resort',
      location: 'USA, Destin',
      rating: 9.1,
      description: `Henderson Beach Resort is located adjacent to Henderson Beach State Park and offers private beach access. Guests can take a refreshing plunge in one of the property's 2 pools or unwind in the full service spa. Several dining options are available on site that guests are sure to enjoy. 30,000 square feet of meeting and event space is available as well. Complimentary WiFi is provided for all guests.

      Rooms feature a flat-screen TV with cable channels and a coffee maker. A balcony with a view of either the pool, ocean, or courtyard is provided as well. Guests can enjoy access to the in-room mini bar and refreshment counter. Select rooms include a sofa bed.
      
      Guests can work up a sweat in the on-site fitness center. The business center is perfect for business travelers. The resort provides a variety of activities including paddle boarding, biking, and kayaking.`,
      HotelImages: {
        create: [
          { url: 'localhost:5000/images/6-1.jpg' },
          { url: 'localhost:5000/images/6-2.jpg' },
          { url: 'localhost:5000/images/6-3.jpg' },
        ],
      },
      rooms: {
        create: [
          {
            price: 120,
            guests: 3,
            hasBar: true,
            hasBreakfast: true,
            hasParking: true,
            hasShower: true,
            hasWifi: true,
          },
          {
            price: 135,
            guests: 3,
            hasBar: true,
            hasBreakfast: true,
            hasParking: true,
            hasShower: true,
            hasWifi: true,
          },
          {
            price: 150,
            guests: 4,
            hasBar: true,
            hasBreakfast: true,
            hasParking: true,
            hasShower: true,
            hasWifi: true,
          },
          {
            price: 100,
            guests: 2,
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

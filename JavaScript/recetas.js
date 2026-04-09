export const destinacionsDestacades = [
  {
    id: "australia",
    nom: "Australia",
    imatgeUrl: "/imagenes-pagina-principal/Australia.png",
    propietatsCount: 2246,
  },
  {
    id: "japan",
    nom: "Japan",
    imatgeUrl: "/imagenes-pagina-principal/Japon.png",
    propietatsCount: 1278,
  },
  {
    id: "new-zealand",
    nom: "New Zealand",
    imatgeUrl: "/imagenes-pagina-principal/NuevaZelanda.png",
    propietatsCount: 480,
  },
  {
    id: "greece",
    nom: "Greece",
    imatgeUrl: "/imagenes-pagina-principal/Grecia.png",
    propietatsCount: 320,
  },
];

export const ofertes = [
  {
    id: "sydneys-10-most-fashionable-5-star-hotels",
    titol: "Sydney's 10 Most Fashionable 5 Star Hotels",
    descripcio:
      "Browse the fastest growing tourism sector in the heart of Australia tourism Capital.",
    imatgeUrl: "/imagenes-pagina-principal/sydney.png",
  },
  {
    id: "vegan-travel",
    titol: "Top cities for Vegan Travellers",
    descripcio:
      "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
    imatgeUrl: "/imagenes-pagina-principal/vegan.png",
  },
  {
    id: "post-covid",
    titol: "World's top destinations during and post covid timeline",
    descripcio:
      "Pandemic is still here and will be here for a longer time. Here's where your next destination...",
    imatgeUrl: "/imagenes-pagina-principal/montaña.png",
  },
];

// Id coherent amb Search results i Product detail per enllaçar a la fitxa de l’hotel.
export const hotelsPopulars = [
  {
    id: "lakeside-motel-warefront",
    nom: "Lakeside Motel Warefront",
    imatgeUrl: "/imagenes-pagina-principal/Lakeside.png",
    propietatsCount: 2246,
  },
  {
    id: "rocce-graham-resort",
    nom: "Rocce Graham resort",
    imatgeUrl: "/imagenes-pagina-principal/Recce.png",
    propietatsCount: 1278,
  },
  {
    id: "fireside-dinners",
    nom: "Fireside Dinners",
    imatgeUrl: "/imagenes-pagina-principal/Fireside.png",
    propietatsCount: 480,
  },
  {
    id: "oculous-inn-stay",
    nom: "Oculous Inn Stay",
    imatgeUrl: "/imagenes-pagina-principal/Oculous.png",
    propietatsCount: 320,
  },
];

export const testimonis = [
  {
    id: 1,
    nom: "Maria G.",
    fotoUrl: "/images/avatars/avatar-1.jpg",
    text: "Increïble experiència reservant. Tot molt ràpid i clar.",
    valoracio: 5,
  },
  {
    id: 2,
    nom: "John K.",
    fotoUrl: "/images/avatars/avatar-2.jpg",
    text: "Bona selecció d'hotels i ofertes. Repetiria!",
    valoracio: 5,
  },
];

export const searchResultsData = {
  query: {
    where: "Melbourne",
    checkin: "Mar 18, 2022",
    checkout: "March 20, 2022",
    guests: "2 adult, 1 room",
  },
  totalResults: 2582,
  filters: {
    budgetRanges: [
      { min: 0, max: 200, count: 200 },
      { min: 250, max: 500, count: 19 },
      { min: 500, max: 1000, count: 12 },
      { min: 1000, max: 2000, count: 12 },
      { min: 2000, max: 8000, count: 230 },
    ],
    popularFilters: [
      { id: "free-cancellation", label: "Free cancellation", count: 200 },
      { id: "beachfront", label: "Beach front", count: 100 },
      { id: "hot-tub", label: "Hot tub/Jacuzzi", count: 15 },
      { id: "no-credit-card", label: "Book without credit card", count: 12 },
      { id: "pet-friendly", label: "Pet friendly", count: 200 },
    ],
    activities: [
      { id: "fishing", label: "Fishing", count: 200 },
      { id: "hiking", label: "Hiking", count: 100 },
      { id: "beach", label: "Beach", count: 15 },
      { id: "cycling", label: "Cycling", count: 12 },
      { id: "sauna", label: "Sauna", count: 12 },
      { id: "night-lights", label: "Night lights", count: 12 },
    ],
  },
  results: [
    {
      hotelId: "lakeside-motel-warefront",
      name: "Lakeside Motel Warefront",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      badge: "Book now and receive 15% off",
      pricePerNight: "$130",
      oldPrice: "$150",
      imatgeUrl: "/imagenes-pagina-principal/LakeMotel.png",
    },
    {
      hotelId: "julia-dens-resort",
      name: "Julia Dens Resort",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$240",
      imatgeUrl: "/imagenes-pagina-principal/JuliaResorte.png",
    },
    {
      hotelId: "achmin-septer-hotel",
      name: "Achmin Septer Hotel",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      badge: "Receive 30% discount on extra nights",
      pricePerNight: "$300",
      imatgeUrl: "/imagenes-pagina-principal/Anghim.png",
    },
    {
      hotelId: "regindford-hotel",
      name: "Regindford Hotel",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$120",
      imatgeUrl: "/imagenes-pagina-principal/Marineford.png",
    },
    {
      hotelId: "shangri-open-house",
      name: "Shangri Open House",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$145",
      imatgeUrl: "/imagenes-pagina-principal/Shanghai.png",
    },
    {
      hotelId: "ocean-waves-resort",
      name: "Ocean Waves Resort",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$310",
      imatgeUrl: "/imagenes-pagina-principal/Oceanwaves.png",
    },
    {
      hotelId: "main-city-frontier",
      name: "Main City frontier",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      badge: "Receive 30% discount on extra nights",
      pricePerNight: "$190",
      oldPrice: "$200",
      imatgeUrl: "/imagenes-pagina-principal/nostock.png",
    },
    {
      hotelId: "lakeside-motel-warefront",
      name: "Lakeside Motel Warefront",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$300",
      oldPrice: "$200",
      imatgeUrl: "/imagenes-pagina-principal/Lakeside2.png",
    },
  ],
};

export const productDetailData = {
  hotel: {
    id: "lakeside-motel-warefront",
    name: "Lakeside Motel Warefront",
    rating: 4.5,
    reviewsCount: 1200,
    address: "Lorem ipsum road, Tantri\n-2322, Melbourne, Australia",
    overviewText:
      "Featuring free WiFi throughout the property, Lakeside Motel Waterfront offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free private parking is available on site.\n\nEach room at this motel is air conditioned and comes with a flat-screen TV. You will find a kettle, toaster and a microwave in the room. Each room is fitted with a private bathroom. Guests have access to barbecue facilities and a lovely large lawn area. Metung is 6.8 mi from Lakeside Motel Waterfront, while Paynesville is 14 mi from the property.\n\nCouples in particular like the location – they rated it 9.2 for a two-person trip.",
  },
  topFacilities: [
    { id: "wifi", label: "Free wifi" },
    { id: "ac", label: "Air Conditioning" },
    { id: "parking", label: "Parking available" },
    { id: "business", label: "Business Services" },
    { id: "pool", label: "Swimming pool" },
    { id: "top-rated", label: "Top rated in area" },
  ],
  exploreArea: [
    { name: "Hotel Pennsylvania", distance: "2 min drive" },
    { name: "Travis Bakery store house", distance: "10 min drive" },
    { name: "Olivia Johnson Garden", distance: "15 min drive" },
    { name: "Norman Opera Circus", distance: "18 min drive" },
    { name: "Rockdesert hotel", distance: "32 min drive" },
  ],
  availability: {
    checkin: "Mar 18, 2022",
    checkout: "March 20, 2022",
    guests: "2 adult, 1 room",
  },
  promoCard: {
    title: "20% off\nUse Promotional\nCoupon Code:\nOrlando",
  },
  rooms: [
    {
      id: "standard-twin-multiple-beds",
      name: "Standard twin ben, Multiple beds",
      price: 300,
      currency: "$",
      sleeps: 3,
      beds: "1 double bed and 1 twin bed",
    },
    {
      id: "standard-twin-queen-bed",
      name: "Standard twin ben, 1 Queen bed",
      price: 300,
      currency: "$",
      sleeps: 3,
      beds: "1 double bed and 1 twin bed",
    },
  ],
};

export const checkoutData = {
  room: {
    roomLabel: "Room 1",
    summary: "2 adults, 1 double bed and 1 twin bed, Non-smoking",
  },
  summaryCard: {
    hotelId: "lakeside-motel-warefront",
    hotelName: "Lakeside Motel Warefront",
    rating: 4.5,
    reviewsCount: 1200,
    policy: "Non refundable",
    checkIn: "Sunday, March 18, 2022",
    checkOut: "Tuesday, March 20, 2022",
    stayNights: 2,
  },
  priceDetails: {
    items: [
      { description: "1 room X 2 nights", amount: 120.32 },
      { description: "Tax and service fees", amount: 8.32 },
    ],
    total: 130,
    currency: "$",
  },
  policyItems: [
    "This rate is non-refundable. If you change or cancel your booking you will not get a refund or credit to use for a future stay.",
    "Stay extensions will require a new reservation.",
    "Front desk staff will greet guests on arrival",
    "No refunds will be issued for late check-in or early check-out.",
  ],
};

export const myTripsData = {
  trips: [
    {
      bookingId: "b1",
      hotelId: "lakeside-motel-warefront",
      hotelName: "Lakeside Motel Warefront",
      rating: 4.5,
      reviewsCount: 1200,
      policy: "Non refundable",
      checkIn: "Sunday, March 18, 2022",
      checkOut: "Tuesday, March 20, 2022",
      stayNights: 2,
      rooms: 1,
      oldPrice: 150,
      price: 130,
      currency: "$",
    },
  ],
  suggestedDestinations: [
    {
      id: "australia",
      nom: "Australia",
      imatgeUrl: "/imagenes-pagina-principal/Australia.png",
      propietatsCount: 2246,
    },
    {
      id: "japan",
      nom: "Japan",
      imatgeUrl: "/imagenes-pagina-principal/Japon.png",
      propietatsCount: 1278,
    },
    {
      id: "new-zealand",
      nom: "New Zealand",
      imatgeUrl: "/imagenes-pagina-principal/NuevaZelanda.png",
      propietatsCount: 480,
    },
    {
      id: "greece",
      nom: "Greece",
      imatgeUrl: "/imagenes-pagina-principal/Grecia.png",
      propietatsCount: 320,
    },
  ],
};

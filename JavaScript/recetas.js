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
    },
    {
      hotelId: "julia-dens-resort",
      name: "Julia Dens Resort",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$240",
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
    },
    {
      hotelId: "regindford-hotel",
      name: "Regindford Hotel",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$120",
    },
    {
      hotelId: "shangri-open-house",
      name: "Shangri Open House",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$145",
    },
    {
      hotelId: "ocean-waves-resort",
      name: "Ocean Waves Resort",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$310",
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
    },
  ],
};
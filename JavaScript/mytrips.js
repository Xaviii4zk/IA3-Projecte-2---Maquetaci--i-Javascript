import { client } from "./recetas.js";

console.log("Trip");

async function loadTrips() {

  const { data, error } = await client
    .from("myTripsData")
    .select("*")
    .single();

  const parsedTrips = JSON.parse(data.trips);

  const trip = parsedTrips.trips?.[0];
  const destinations = parsedTrips.suggestedDestinations || [];

  const Centrar_cuadros = document.querySelector('.Centrar_cuadros');

  Centrar_cuadros.innerHTML = `
    <div class="Cuadros_izquierda">
        <strong>${trip.hotelName}</strong>

        <div class="Estrellas_opiniones">
            <img src="/imagenes-pagina-principal/estrellas.png" alt="Estrellas">
            <p>${trip.rating} (${trip.reviewsCount} Reviews)</p>
        </div>

        <div class="ps">
            <p class="projo">${trip.policy}</p>
            <p class="pgris">${trip.checkIn}</p>
            <p class="pgris">${trip.checkOut}</p>
            <p class="pgris">${trip.stayNights} night stay</p>
        </div>
    </div>

    <div class="Cuadros_derecha2">
        <div class="Cuadro_verde">
            <p>${trip.rooms} room 2 days</p>
        </div>

        <div class="rebajas_derecha">
            <p>${trip.currency}${trip.oldPrice}</p>
            <strong>${trip.currency}${trip.price}</strong>
        </div>

        <div class="pderecha">
            <p>Includes taxes and fees</p>
        </div>
    </div>
  `;


  const Paises_textos = document.querySelector('.Paises_textos');

  Paises_textos.innerHTML = destinations.map(d => `
    <div>
      <strong>${d.nom}</strong>
      <p>${d.propietatsCount} properties</p>
    </div>
  `).join("");


  const Paises = document.querySelector('.Paises');

  Paises.innerHTML = destinations.map(d => `
    <div class="Fotos">
      <img src="${d.imatgeUrl}" alt="${d.nom}">
    </div>
  `).join("");

}

loadTrips();
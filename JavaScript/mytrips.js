import { myTripsData } from "./recetas.js";

console.log(myTripsData);

const Centrar_cuadros = document.querySelector('.Centrar_cuadros');
Centrar_cuadros.innerHTML = `
    <div class="Cuadros_izquierda">
        <strong>${myTripsData.trips[0].hotelName}</strong>
        <div class="Estrellas_opiniones">
            <img src="/imagenes-pagina-principal/estrellas.png" alt="Estrellas">
            <p>${myTripsData.trips[0].rating} (${myTripsData.trips[0].reviewsCount} Reviews)</p>
        </div>
        <div class="ps">
            <p class="projo">${myTripsData.trips[0].policy}<p>
            <p class="pgris">${myTripsData.trips[0].checkIn}</p>
            <p class="pgris">${myTripsData.trips[0].checkOut}</p>
            <p class="pgris">${myTripsData.trips[0].stayNights} night stay</p>
        </div>
    </div>
    <div class="Cuadros_derecha2">
        <div class="Cuadro_verde">
            <p class="pnormal2">${myTripsData.trips[0].rooms} room 2 days</p>
        </div>
        <div class="rebajas_derecha">
            <p>${myTripsData.trips[0].currency}${myTripsData.trips[0].oldPrice}</p><strong class="preciorebajado">${myTripsData.trips[0].currency}${myTripsData.trips[0].price}</strong>
        </div>
        <div class="pderecha">
            <p>Includes taxes and fees</p>
        </div>
        <div class="ver_detalles">
            <button><a href="product.html">View trip details</a></button>
        </div>
    </div> `;

const Paises_textos = document.querySelector('.Paises_textos');
Paises_textos.innerHTML = `             
    <div class="Australia">
        <strong>${myTripsData.suggestedDestinations[0].nom}</strong>
        <p>${myTripsData.suggestedDestinations[0].propietatsCount} properties</p>
    </div>
    <div class="Japon">
        <strong>${myTripsData.suggestedDestinations[1].nom}</strong>
        <p>${myTripsData.suggestedDestinations[1].propietatsCount} properties</p>
    </div>
    <div class="NuevaZelanda">
        <strong>${myTripsData.suggestedDestinations[2].nom}</strong>
        <p>${myTripsData.suggestedDestinations[2].propietatsCount} properties</p>
    </div>
    <div class="Grecia">
        <strong>${myTripsData.suggestedDestinations[3].nom}</strong>
        <p>${myTripsData.suggestedDestinations[3].propietatsCount} properties</p>
    </div> `;

const Paises = document.querySelector('.Paises');

let texto="";
for (let i=0;i<myTripsData.suggestedDestinations.length;i++) {
    texto += `      
            <div class="Fotos">
                <img src="${myTripsData.suggestedDestinations[i].imatgeUrl}" alt="Autralia">
            </div>`
}

Paises.innerHTML=texto;
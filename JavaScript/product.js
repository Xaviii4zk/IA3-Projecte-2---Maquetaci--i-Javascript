import { productDetailData } from "./recetas.js";

console.log(productDetailData);

const parteizq = document.querySelector('.parteizq');

parteizq.innerHTML = `
    <div class="Container_opciones">
            <h2>${productDetailData.hotel.name}</h2>
            <div class="Estrellas_opiniones">
                <img src="/imagenes-pagina-principal/estrellas.png" alt="Estrellas">
                <p>${productDetailData.hotel.rating} (${productDetailData.hotel.reviewsCount} Reviews)</p>
            </div>
            <div class="Ubicacion">
                <img src="/imagenes-pagina-principal/locazul.png" alt="Ubicacion">
                <p>${productDetailData.hotel.address}</p>
            </div>
        </div>
        <div class="cuadro_blanco">
            <strong class="Overview">Overview</strong>
            <div class="descripcioncasa">
                <p>${productDetailData.hotel.overviewText}</p>
            </div>
            <div class="linea"></div>
            <strong class="Overview">Top facilities</strong>
            <div class="facilities">
                <div class="Columna">
                    <div class="facility">
                        <img src="/imagenes-pagina-principal/wifi.png" alt="WiFi">
                        <p>${productDetailData.topFacilities[0].label}</p>
                    </div>
                    <div class="facility">
                        <img src="/imagenes-pagina-principal/viento.png" alt="Air Conditioning">
                        <p>${productDetailData.topFacilities[1].label}</p>
                    </div>
                    <div class="facility">
                        <img src="/imagenes-pagina-principal/coche.png" alt="Parking">
                        <p>${productDetailData.topFacilities[2].label}</p>
                    </div>
                </div>
                <div class="Columna">
                    <div class="facility">
                        <img src="/imagenes-pagina-principal/bolsa.png" alt="Bolsa">
                        <p>${productDetailData.topFacilities[3].label}</p>
                    </div>
                    <div class="facility">
                        <img src="/imagenes-pagina-principal/flotador.png" alt="Flotador">
                        <p>${productDetailData.topFacilities[4].label}</p>
                    </div>
                    <div class="facility">
                        <img src="/imagenes-pagina-principal/like.png" alt="Barbecue">
                        <p>${productDetailData.topFacilities[5].label}</p>
                    </div>
                </div>
            </div>
        </div> `;

const Rutas = document.querySelector('.Rutas');

Rutas.innerHTML = `
    <strong class="Overview2">Explore the area</strong>
    <div class="Ruta">
        <img src="/imagenes-pagina-principal/avion_negro.png" alt="avion_negro">
        <p>${productDetailData.exploreArea[0].name}</p><p class="minutos">${productDetailData.exploreArea[0].distance}</p>
    </div>
    <div class="Ruta">
        <img src="/imagenes-pagina-principal/locnegro.png" alt="localizacion">
        <p>${productDetailData.exploreArea[1].name}</p><p class="minutos">${productDetailData.exploreArea[1].distance}</p>
    </div>
    <div class="Ruta">
        <img src="/imagenes-pagina-principal/locnegro.png" alt="localizacion">
        <p>${productDetailData.exploreArea[2].name}</p><p class="minutos">${productDetailData.exploreArea[2].distance}</p>
    </div>
    <div class="Ruta">
        <img src="/imagenes-pagina-principal/locnegro.png" alt="localizacion">
        <p>${productDetailData.exploreArea[3].name}</p><p class="minutos">${productDetailData.exploreArea[3].distance}</p>
    </div>
    <div class="Ruta">
        <img src="/imagenes-pagina-principal/locnegro.png" alt="localizacion">
        <p>${productDetailData.exploreArea[4].name}</p><p class="minutos">${productDetailData.exploreArea[4].distance}</p>
    </div>
`;

const formulario_vacaciones = document.querySelector('.formulario_vacaciones');

formulario_vacaciones.innerHTML = `
    <input type="text" placeholder="${productDetailData.availability.checkin}"  class="fechainicial"><img src="/imagenes-pagina-principal/calendario.png" alt="calendario"    class="calendario1">
    <input type="text"  placeholder="${productDetailData.availability.checkout}"    class="fechafinal"><img src="/imagenes-pagina-principal/calendario.png" alt="calendario2" class="calendario2">
    <input type="number"    placeholder="${productDetailData.availability.guests}"    class="Invitados"><img src="/imagenes-pagina-principal/user.png" alt="Usuario" class="Usuario">
    <button class="Busqueda">Check Avaliabilitty</button> `;


const Texto_descuento = document.querySelector('.Texto_descuento');

Texto_descuento.innerHTML = `
    <p class="Descuento">${productDetailData.promoCard.title}</p>
 `;

const Primera_habitacion = document.querySelector('.Primera_habitacion');
const Segunda_habitacion = document.querySelector('.Segunda_habitacion');
    Primera_habitacion.innerHTML = `
    <img src="/imagenes-pagina-principal/Habitacion1.png" alt="Habitacion1" class="Habitacion1">
    <strong class="Condiciones">${productDetailData.rooms[0].name}</strong>
    <div class="facility2">
        <img src="/imagenes-pagina-principal/bolsatic.png" alt="bolsa tic">
        <p>${productDetailData.rooms[0].price} ${productDetailData.rooms[0].currency}</p>
    </div>
    <div class="facility2">
        <img src="/imagenes-pagina-principal/flotadorblanco.png" alt="flotadorblanco">
        <p>Sleeps ${productDetailData.rooms[0].sleeps}</p>
    </div>
    <div class="facility2">
        <img src="/imagenes-pagina-principal/likeblanco.png" alt="likeblanco">
        <p>${productDetailData.rooms[0].beds}</p>
    </div>
    <button class="Reservar"><a href="checkout1.html">Reserve suite</a></button> `;

    Segunda_habitacion.innerHTML = `
        <img src="/imagenes-pagina-principal/Habitacion2.png" alt="Habitacion2" class="Habitacion2">
    <strong class="Condiciones">${productDetailData.rooms[1].name}</strong>
    <div class="facility2">
        <img src="/imagenes-pagina-principal/bolsatic.png" alt="bolsa tic">
        <p>${productDetailData.rooms[1].price} ${productDetailData.rooms[1].currency}</p>
    </div>
    <div class="facility2">
        <img src="/imagenes-pagina-principal/flotadorblanco.png" alt="flotadorblanco">
        <p>Sleeps ${productDetailData.rooms[1].sleeps}</p>
    </div>
    <div class="facility2">
        <img src="/imagenes-pagina-principal/likeblanco.png" alt="likeblanco">
        <p>${productDetailData.rooms[1].beds}</p>
    </div>
    <button class="Reservar"><a href="checkout1.html">Reserve suite</a></button>
    `
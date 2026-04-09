import { checkoutData } from "./recetas.js";

console.log(checkoutData);

const Room1 = document.querySelector('.Room1');
    Room1.innerHTML = `
    <img src="/imagenes-pagina-principal/seguridad.png" alt="seguridad">
    <span class="Room1span1">${checkoutData.room.roomLabel}</span><span class="Room1span2">${checkoutData.room.summary}</span> `;

const Info_motel = document.querySelector('.Info_motel');

Info_motel.innerHTML = `
    <img src="/imagenes-pagina-principal/LakeSideMotel.png" alt="LakeSideMotel">
        <div class="Separacion2">
            <strong class="LakeSideMotel">${checkoutData.summaryCard.hotelName}</strong>
            <div class="Estrellas_opiniones">
                <img src="/imagenes-pagina-principal/estrellas.png" alt="Estrellas">
                <p>${checkoutData.summaryCard.rating} (${checkoutData.summaryCard.reviewsCount} Reviews)</p>
            </div>
            <div class="Especificaciones">
                <span>${checkoutData.summaryCard.policy}</span>
                <p>${checkoutData.summaryCard.checkIn}</p>
                <p>${checkoutData.summaryCard.checkOut}</p>
                <p>${checkoutData.summaryCard.stayNights} nights stay</p>
            </div>
        </div>    `;

const Precios = document.querySelector ('.Precios');

Precios.innerHTML = `
    <div class="Estrellas_opiniones2">
        <p>${checkoutData.priceDetails.items[0].description}</p>
        <p>${checkoutData.priceDetails.items[0].amount}</p>
    </div>
    <div class="Estrellas_opiniones2">
        <p>${checkoutData.priceDetails.items[1].description}</p>
        <p>${checkoutData.priceDetails.items[1].amount}</p>
    </div>
    <div class="linea2"></div>
    <div class="Estrellas_opiniones3">
        <p>Total</p>
        <span>${checkoutData.priceDetails.total} ${checkoutData.priceDetails.currency}</span>
    </div>
    <div class="Cupon">
        <span>Use a coupon, credit or promotional code</span>
    </div>
    <div class="Estrellas_opiniones3">
        <label>
            Coupon Code
            <input type="text" id="textocupon" name="textocupon">
        </label>
        <button class="Aplica_cupon">Apply Coupon</button>
    </div>
`

const Puntos_info = document.querySelector('.Puntos_info');

    let texto = "";
    for (let i=0;i<checkoutData.policyItems.length;i++) {
        texto += `<li> ${checkoutData.policyItems[i]} </li>`;

}
Puntos_info.innerHTML=texto;
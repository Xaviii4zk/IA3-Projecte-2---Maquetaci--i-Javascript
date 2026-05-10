import { client } from "./recetas.js";

async function loadCheckout() {

  const { data } = await client
    .from("checkoutData")
    .select("*")
    .limit(1);

  const checkoutData = data[0];
  
  const Room1 = document.querySelector('.Room1');

  if (Room1) {
    Room1.innerHTML = `
      <img src="/imagenes-pagina-principal/seguridad.png" alt="seguridad">
      <span class="Room1span1">${checkoutData.room_label}</span>
      <span class="Room1span2">${checkoutData.room_summary}</span>
    `;
  }

  
  const Info_motel = document.querySelector('.Info_motel');

  if (Info_motel) {
    Info_motel.innerHTML = `
      <img src="/imagenes-pagina-principal/LakeSideMotel.png" alt="hotel">

      <div class="Separacion2">
        <strong class="LakeSideMotel">
          ${checkoutData.summary_hotel_name}
        </strong>

        <div class="Estrellas_opiniones">
          <img src="/imagenes-pagina-principal/estrellas.png" alt="Estrellas">
          <p>${checkoutData.summary_rating} (${checkoutData.summary_reviews_count} Reviews)</p>
        </div>

        <div class="Especificaciones">
          <span>${checkoutData.summary_policy}</span>
          <p>${checkoutData.summary_checkin}</p>
          <p>${checkoutData.summary_checkout}</p>
          <p>${checkoutData.summary_stay_nights} nights stay</p>
        </div>
      </div>
    `;
  }

  
  const Precios = document.querySelector('.Precios');

  if (Precios) {
    Precios.innerHTML = `
      ${(checkoutData.price_items || []).map(item => `
        <div class="Estrellas_opiniones2">
          <p>${item.description}</p>
          <p>${item.amount}</p>
        </div>
      `).join("")}

      <div class="linea2"></div>

      <div class="Estrellas_opiniones3">
        <p>Total</p>
        <span>${checkoutData.price_total} ${checkoutData.price_currency}</span>
      </div>

      <div class="Cupon">
        <span>Use a coupon, credit or promotional code</span>
      </div>

      <div class="Estrellas_opiniones3">
        <label>
          Coupon Code
          <input type="text" id="textocupon">
        </label>
        <button class="Aplica_cupon">Apply Coupon</button>
      </div>
    `;
  }

  
  const Puntos_info = document.querySelector('.Puntos_info');

  if (Puntos_info) {
    Puntos_info.innerHTML = (checkoutData.policy_items || [])
      .map(item => `<li>${item}</li>`)
      .join("");
  }
}

window.addEventListener("DOMContentLoaded", loadCheckout);